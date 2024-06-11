<template>
    <div class="kanban-column" :key="column.id"
        :style="getColumnStyle(indicators.find(indicator => indicator.name === column.indicator).class)">
        <div class="kanban-column-header d-flex justify-content-between">
            <div class="d-flex">
                <IndicatorPill :indicator="indicators.find(ind => ind.name === column.indicator).class ?? 'gray'" />
                <span class="column-title">{{ column.title }}</span>
            </div>

            <div class="column-options dropdown pull-right show">
                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" draggable="false"> <svg
                        class="icon icon-sm">
                        <use href="#icon-dot-horizontal"></use>
                    </svg>
                </a>

                <ul class="dropdown-menu column-dropdown" x-placement="bottom-start">
                    <!-- <li><a class="dropdown-item" data-action="archive" draggable="false">Archive</a></li> -->
                    <li class="button-group">
                        <div v-for="indicator in indicators"
                            @click="setIndicator(indicator.name, columnIndex, config.board_name)">
                            <IndicatorPill :indicator="indicator.class" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="add-card" v-if="showNew !== column.id"
            style="border: 1px solid var(--kanban-new-card-bg);color: inherit;background-color: white;"
            @click="showNew = column.id">
            <div class="ellipsis"> + Add {{ config.ref_doctype }} </div>
        </div>
        <div class="kanban-card new-card-area" v-if="showNew === column.id">
            <textarea name="title" v-model="newCard" @blur="(showNew = false)"
                @keyup.enter="newDoc(column.title)"></textarea>
        </div>

        <draggable v-model="column.cards" group="cards" @end="drop" item-key="name" :animation="250" :id="columnIndex"
            class="kanban-cards">
            <template #item="{ element }">
                <KanbanCard :card="element" :config="config" :columnIndex="columnIndex" />
            </template>
        </draggable>
    </div>
</template>

<script setup>

import { defineProps, ref } from 'vue';
import draggable from 'vuedraggable';
import { indicators } from '../../utils/colors';
import KanbanCard from './KanbanCard.vue';
import IndicatorPill from '../IndicatorPill.vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
    column: Object,
    config: Object,
    columnIndex: Number
});
const emits = defineEmits(['drop']);

const newCard = ref()
const showNew = ref()

function drop(evt) {
    emits('drop', evt)
}

function newDoc(field) {
    const args = window.cur_list.get_args()
    frappe.new_doc(args.doctype, { first_name: newCard.value, [props.config.field_name]: field });
    showNew.value = undefined;
    newCard.value = '';
}

function getColumnStyle(color) {
    return `background-color: var(--${color}-100); color: var(--${color}-800)`
}

function setIndicator(indicator, columnIndex, board_name) {
    store.dispatch('setIndicator', { indicator, columnIndex, board_name });
}

</script>