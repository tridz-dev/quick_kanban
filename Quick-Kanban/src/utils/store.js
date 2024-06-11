import { createStore } from 'vuex';

const store = createStore({
    state: {
        columns: [],
        config: [],
        // ref_doctype: '',
        // field_name: '',
        // fields: [],
    },
    mutations: {
        SET_COLUMNS(state, columns) {
            state.columns = columns;
        },
        MOVE_CARD(state, { fromColumn, toColumn, fromIndex, toIndex, card }) {
            state.columns[fromColumn].cards.splice(fromIndex, 1);
            if (toIndex !== null) {
                state.columns[toColumn].cards.splice(toIndex, 0, card);
            } else {
                state.columns[toColumn].cards.push(card);
            }
        },
        UPDATE_COLUMN_INDICATOR(state, { columnIndex, indicator }) {
            state.columns[columnIndex].indicator = indicator;
        },
        SET_KANBAN_CONFIG(state, { board_name, ref_doctype, field_name, title_field, fields, highlighted_field, highlight_table }) {
            state.config.board_name = board_name;
            state.config.ref_doctype = ref_doctype;
            state.config.field_name = field_name;
            state.config.title_field = title_field;
            state.config.fields = fields;
            state.config.highlighted_field = highlighted_field;
            state.config.highlight_table = highlight_table;
        },
    },
    actions: {
        async fetchKanban({ commit, state }, { args }) {
            if (args === 0) {
                args = window.cur_list.get_args();
            }
            try {
                const response = await frappe.call({
                    method: 'frappe.desk.reportview.get',
                    args: args,
                });

                const board = response.message;
                if (board.length !== 0) {
                    const columns = state.columns;
                    const fieldIndex = board.keys.findIndex(key => key === state.config.field_name);
                    const userInfoLookup = {};
                    Object.values(board.user_info).forEach((user) => {
                        userInfoLookup[user.name] = user.fullname
                    });

                    columns.forEach((column) => {
                        column.cards = [];
                        board.values.forEach((card) => {
                            if (card[fieldIndex] === column.title) {
                                const transformedCard = transformCard(board.keys, card, userInfoLookup);
                                column.cards.push(transformedCard);
                            }
                        });
                    });
                    commit('SET_COLUMNS', columns);
                }
            } catch (error) {
                console.error('Error fetching columns:', error);
            }
        },
        async fetchColumns({ commit }, { board_name }) {
            try {
                const response = await frappe.call({
                    method: 'frappe.client.get',
                    args: {
                        doctype: 'Kanban Board',
                        name: board_name,
                    },
                });
                const board = response.message;
                const ref_doctype = board.reference_doctype;
                const field_name = board.field_name;
                const highlighted_field = board.custom_highlighted_field
                const highlight_table = board.custom_highlight_table
                let fields = [];
                console.log(board);
                if (board.fields) {
                    try {
                        fields = JSON.parse(board.fields);
                    } catch (e) {
                        console.error("Error parsing fields:", e);
                    }
                } else {
                    fields = ['name', 'title'];
                }
                const meta = frappe.get_meta(ref_doctype);
                commit('SET_KANBAN_CONFIG', { board_name, ref_doctype, field_name, title_field: meta.title_field, fields, highlighted_field, highlight_table });

                const columnsData = board.columns.map(column => ({
                    id: column.name,
                    title: column.column_name,
                    indicator: column.indicator,
                    cards: [],
                }));

                commit('SET_COLUMNS', columnsData);
            } catch (error) {
                console.error('Error fetching columns:', error);
            }
        },
        async updateOrder({ commit, state }, { fromColumn, toColumn, fromIndex, toIndex, card }) {
            console.log(fromColumn, toColumn, fromIndex, toIndex, card.title);
            // commit('MOVE_CARD', { fromColumn, toColumn, fromIndex, toIndex, card })
            try {
                await frappe.call({
                    method: 'frappe.client.set_value',
                    args: {
                        doctype: state.config.ref_doctype,
                        name: card.name,
                        fieldname: state.config.field_name,
                        value: state.columns[toColumn].title,
                    },
                    callback: function (r) {
                        console.log('Dropped', card.title, 'to', r.message[state.config.field_name]);
                    }
                });
            } catch (error) {
                commit('MOVE_CARD', { fromColumn: toColumn, toColumn: fromColumn, fromIndex: toIndex, toIndex: fromIndex, card })
                console.error(error);
            }
        },
        async setIndicator({ commit, state }, { indicator, columnIndex, board_name }) {
            try {
                await frappe.call({
                    method: 'frappe.desk.doctype.kanban_board.kanban_board.set_indicator',
                    args: {
                        board_name: board_name,
                        column_name: state.columns[columnIndex].title,
                        indicator: indicator,
                    },
                    callback: function () {
                        commit('UPDATE_COLUMN_INDICATOR', { columnIndex, indicator });
                    }
                });
            } catch (error) {
                console.error(`Error updating indicator ${indicator}:`, error);
            }
        },
    },
    getters: {
        getColumns: state => state.columns,
        getConfig: state => state.config,
    },
});

function transformCard(keys, card, userInfoLookup) {
    try {
        const transformedCard = {};
        keys.forEach((key, index) => {
            transformedCard[key] = card[index];
        });

        const transformedAssign = {};
        if (transformedCard['_assign']) {
            const assignees = JSON.parse(transformedCard['_assign']);
            assignees.forEach((assignee) => {
                transformedAssign[assignee] = userInfoLookup[assignee];
            });

        }
        transformedCard['_assign'] = transformedAssign;
        return transformedCard;

    } catch (e) {
        console.error("Error parsing fields:", e);
    }
}

export default store;