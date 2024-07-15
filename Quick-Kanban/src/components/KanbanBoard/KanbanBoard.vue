<template>
  <div class="kanban">
        <KanbanColumn v-for="(column, columnIndex) in columns" :column="column" :columnIndex="columnIndex" :config="config" @drop="drop" />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import KanbanColumn from './KanbanColumn.vue';

const store = useStore();
const columns = computed(() => store.getters.getColumns);
const config = computed(() => store.getters.getConfig);

const board_name = frappe.get_route()[3]

onMounted(() => {
  window.refreshKanbanBoard = refreshKanbanBoard;
  refreshKanbanBoard()
});

console.log($);

const refreshKanbanBoard = (args) => {
  store.dispatch('fetchColumns', { board_name })
    .then(() => {
      return  store.dispatch('fetchKanban', {args});
    })
    .catch(error => console.error('Error during Kanban setup:', error));
}

function drop(evt) {
  store.dispatch('updateOrder', {
    fromColumn: evt.from.id,
    toColumn: evt.to.id,
    fromIndex: evt.oldIndex,
    toIndex: evt.newIndex,
    card: columns.value[evt.to.id].cards[evt.newIndex]
  });
}

</script>