
frappe.provide("frappe.views");

let kanban_conf = frappe.call({
    method: "quick_kanban.get_beta _users.get_kanban_config",
    callback: function (r) {
        if (!r.exc && r.message) {
            kanban_conf = r.message
        }
    }
});

frappe.views.KanbanView = class KanbanView extends frappe.views.KanbanView {

    render() {
        if (!kanban_conf.kanban_beta) {
            this.renderOld()
            return
        }
        if (kanban_conf.kanban_beta_users) {
            if (kanban_conf.kanban_beta_users.includes(frappe.session.user)) {
                this.renderBeta()
            }
            else {
                this.renderOld()
            }
        }
        else {
            this.renderBeta()
        }
    }

    renderBeta() {
        if (!window.refreshKanbanBoard) {
            const script = document.createElement('script');
            script.src = '/assets/quick_kanban/js/quick_kanban.js';
            document.head.appendChild(script);
            this.$result.html(`<div id="kanbanapp"></div>`);
        } else {
            if (window.refreshKanbanBoard) {
                let args = this.get_args();
                window.refreshKanbanBoard(args);
            }
        }
    }

    renderOld() {
        const board_name = this.board_name;
        if (!this.kanban) {
            this.kanban = new frappe.views.KanbanBoard({
                doctype: this.doctype,
                board: this.board,
                board_name: board_name,
                cards: this.data,
                card_meta: this.card_meta,
                wrapper: this.$result,
                cur_list: this,
                user_settings: this.view_user_settings,
            });
        } else if (board_name === this.kanban.board_name) {
            this.kanban.update(this.data);
        }
    }
}
