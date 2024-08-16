<template>
    <div class="kanban-card drag">
        <div class="kanban-title-area pb-3 drag">
            <a :href="getUrl()" draggable="false">
                <span class="card-title ellipsis drag" :title="card[config.title_field]">
                    {{ card[config.title_field] }}
                </span>
            </a>
        </div>

        <div v-for="field in config.fields" class="drag">
            <span v-if="field !== card[config.title_field] && field !== config.highlighted_field" class="drag">
                {{ field === 'creation' ? card[field]?.split('.')[0] : card[field] }}
            </span>
        </div>

        <div class="kanban-card-meta drag">
            <span :style="(getHighlight(card[config.highlighted_field]))" class="drag">
                {{ config.fields.includes(config.highlighted_field) ? card[config.highlighted_field] : '' }}
            </span>

            <div class="kanban-assignments d-flex float-right drag">
                <div class="avatar-group float-right overlap">
                    <Assignments :assignments="card._assign" />

                    <span @click="assignTo(card)" class="avatar avatar-small">
                        <div class="avatar-frame avatar-action">
                            <svg class="icon  icon-sm" style="" aria-hidden="true">
                                <use class="" href="#icon-add"></use>
                            </svg>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

import { defineProps } from 'vue';
import { useStore } from 'vuex';
import Assignments from '../Assignments.vue'

const store = useStore();

const props = defineProps({
    card: Object,
    config: Object,
    columnIndex: Number
});

function getHighlight(field) {
    let style = 'border-radius: 4px;text-align:center;padding:5px;'
    if (props.config.fields.includes(props.config.highlighted_field) && props.card[props.config.highlighted_field]) {
        let color = 'gray'
        for (const highlight of props.config.highlight_table) {
            if (highlight.tag === field) {
                { color = highlight.color }
            }
        }
        style += `background-color:  var(--${color}-200); color: var(--${color}-800);`
        return style
    }
}

function getUrl() {
    return '/app/' + props.config.ref_doctype.toLowerCase() + '/' + props.card.name
}

async function assignTo(card) {
    let args = window.cur_list.get_args()
    const assignToDialog = new frappe.ui.form.AssignToDialog({
        obj: card,
        method: 'frappe.desk.form.assign_to.add',
        doctype: args.doctype,
        docname: card.name,
        callback: async function () {
            args = window.cur_list.get_args()
            store.dispatch('fetchKanban', { args });
        },
    });
    assignToDialog.dialog.show();
}

</script>