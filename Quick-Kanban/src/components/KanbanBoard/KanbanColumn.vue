<template>
    <div class="kanban-column" :key="column.name" :style="getColumnStyle(column.indicator)">
        <div class="kanban-column-header">
            <div class="d-flex align-items-center">
                <IndicatorPill :indicator="indicators.find(ind => ind.name === column.indicator).class ?? 'gray'" />
                <span class="column-title">{{ column.column_name }}</span>
            </div>

            <div class="column-options dropdown pull-right show d-flex align-items-center" style="gap: 5px;">
                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" draggable="false">
                    <svg class="icon icon-sm">
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
                <div class="addcard" v-if="showNew !== column.name" @click="showNew = column.name"> + </div>
            </div>
        </div>

        <div class="kanban-card new-card-area" v-if="showNew === column.name">
            <textarea name="title" v-model="newCard" @blur="(showNew = false)"
                @keyup.enter="newDoc(column.title)"></textarea>
        </div>

        <draggable v-model="column.cards" group="cards" @end="drop" item-key="name" :animation="100" :id="columnIndex"
            class="kanban-cards">
            <template #header>
                <div class="loadbtn" v-if="startIndex > 0" @click="loadPrevious">Load Previous</div>
            </template>

            <template #item="{ element, index }">
                <KanbanCard v-if="index >= startIndex && index < endIndex" :card="element" :config="config"
                    :columnIndex="columnIndex" />
            </template>

            <template #footer>
                <div class="loadbtn" v-if="endIndex < (column.cards ? column.cards.length : 0)" @click="loadNext">Load
                    Next</div>
            </template>
        </draggable>
    </div>
</template>

<script setup>

import { defineProps, ref, computed } from 'vue';
import draggable from 'vuedraggable';
import { indicators } from '../../utils/colors';
import KanbanCard from './KanbanCard.vue';
import IndicatorPill from '../IndicatorPill.vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
    column: {
        type: Object,
        required: true,
        default: () => ({ cards: [] })
    },
    config: Object,
    columnIndex: Number
});
const emits = defineEmits(['drop']);

const newCard = ref()
const showNew = ref()
const startIndex = ref(0)
const cardsPerPage = 30

const endIndex = computed(() => {
    return Math.min(startIndex.value + cardsPerPage, props.column.cards?.length || 0);
});

function drop(evt) {
    emits('drop', evt)
}

function newDoc(field) {
    const args = window.cur_list.get_args()
    frappe.new_doc(args.doctype, { first_name: newCard.value, [props.config.field_name]: field });
    showNew.value = undefined;
    newCard.value = '';
}

function getColumnStyle(columnIndicator) {
    const color = indicators.find(indicator => indicator.name === columnIndicator).class
    return `background-color: var(--kanban-column-${color}); color: var(--text-on-${color});`
}

function setIndicator(indicator, columnIndex, board_name) {
    store.dispatch('setIndicator', { indicator, columnIndex, board_name });
}

function loadPrevious() {
    if (startIndex.value > 0) {
        startIndex.value = Math.max(0, startIndex.value - cardsPerPage);
    }
}

function loadNext() {
    if (startIndex.value + cardsPerPage < (props.column.cards?.length || 0)) {
        startIndex.value += cardsPerPage;
    }
}

</script>