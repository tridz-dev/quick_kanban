import { createStore } from 'vuex';

const store = createStore({
    state: {
        columns: [],
        config: {
            board_name: '',
            ref_doctype: '',
            field_name: '',
            title_field: '',
            fields: [],
            highlighted_field: '',
            highlight_table: '',
        },
    },
    mutations: {
        SET_COLUMNS(state, columns) {
            if (state.columns.length === 0) {
                state.columns = columns;
            } else {
                columns.forEach((newColumn, index) => {
                    if (state.columns[index]) {
                        state.columns[index] = newColumn.cards
                            ? newColumn
                            : Object.assign(state.columns[index], ...Object.keys(newColumn).filter(key => key !== 'cards').map(key => ({ [key]: newColumn[key] })));
                    } else {
                        state.columns.push(newColumn);
                    }
                });
            }
            state.columns = state.columns.filter(oldColumn =>
                columns.some(newColumn => newColumn.name === oldColumn.name)
            );
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
        SET_KANBAN_CONFIG(state, config) {
            state.config = config;
        },
    },
    actions: {
        async fetchKanban({ commit, state }, { args }) {
            if (args === undefined) {
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
                            if (card[fieldIndex] === column.column_name) {
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
                commit('SET_COLUMNS', board.columns);

                const ref_doctype = board.reference_doctype;
                const field_name = board.field_name;
                const highlighted_field = board.custom_highlighted_field
                const highlight_table = board.custom_highlight_table
                let fields = [];
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
                
                const config = { board_name, ref_doctype, field_name, title_field: meta.title_field, fields, highlighted_field, highlight_table }
                commit('SET_KANBAN_CONFIG', config);

            } catch (error) {
                console.error('Error fetching columns:', error);
            }
        },
        async updateOrder({ commit, state }, { fromColumn, toColumn, fromIndex, toIndex, card }) {
            // console.log(fromColumn, toColumn, fromIndex, toIndex, card.title);
            // commit('MOVE_CARD', { fromColumn, toColumn, fromIndex, toIndex, card })
            try {
                await frappe.call({
                    method: 'frappe.client.set_value',
                    args: {
                        doctype: state.config.ref_doctype,
                        name: card.name,
                        fieldname: state.config.field_name,
                        value: state.columns[toColumn].column_name,
                    },
                    // callback: function (r) {
                    //     console.log('Dropped', card.title, 'to', r.message[state.config.field_name]);
                    // }
                });
            } catch (error) {
                // commit('MOVE_CARD', { fromColumn: toColumn, toColumn: fromColumn, fromIndex: toIndex, toIndex: fromIndex, card })
                console.error(error);
            }
        },
        async setIndicator({ commit, state }, { indicator, columnIndex, board_name }) {
            try {
                await frappe.call({
                    method: 'frappe.desk.doctype.kanban_board.kanban_board.set_indicator',
                    args: {
                        board_name: board_name,
                        column_name: state.columns[columnIndex].column_name,
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