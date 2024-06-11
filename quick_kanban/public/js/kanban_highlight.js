frappe.ui.form.on('Kanban Board', {
    reference_doctype: function (frm) {
        if (!frm.doc.reference_doctype) return;

        frappe.model.with_doctype(frm.doc.reference_doctype, function () {
            var options = $.map(frappe.get_meta(frm.doc.reference_doctype).fields, function (d) {
                if (
                    d.fieldname &&
                    d.fieldtype === "Select" &&
                    frappe.model.no_value_type.indexOf(d.fieldtype) === -1
                ) {
                    return d.fieldname;
                }
                return null;
            });
            frm.set_df_property("custom_highlighted_field", "options", options);
            frm.get_field("custom_highlighted_field").refresh();
        });
    }
})