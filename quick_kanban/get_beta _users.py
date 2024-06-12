
import frappe

@frappe.whitelist()
def get_kanban_config():
    config = frappe.local.conf
    kanban_beta = config.get('kanban_beta', 0) 
    kanban_beta_users = config.get('kanban_beta_users', {})
    return {
        "kanban_beta": kanban_beta,
        "kanban_beta_users": kanban_beta_users
    }
