<template>
  <div class="kanban" ref="kanbanBoard">
    <KanbanColumn
      v-for="(column, columnIndex) in columns"
      :column="column"
      :columnIndex="columnIndex"
      :config="config"
      @drop="drop"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import KanbanColumn from "./KanbanColumn.vue";

const store = useStore();
const columns = computed(() => store.getters.getColumns);
const config = computed(() => store.getters.getConfig);
const kanbanBoard = ref(null);

const board_name = frappe.get_route()[3];

onMounted(() => {
  window.refreshKanbanBoard = refreshKanbanBoard;
  refreshKanbanBoard();
  bindClickDrag();
});

onBeforeUnmount(() => {
  unbindClickDrag(); 
});
console.log($);

const refreshKanbanBoard = (args) => {
  store
    .dispatch("fetchColumns", { board_name })
    .then(() => {
      return store.dispatch("fetchKanban", { args });
    })
    .catch((error) => console.error("Error during Kanban setup:", error));
};

function drop(evt) {
  console.log(evt);
  if (evt.newIndex === -1) {
    console.log("Dropped from index", evt.oldIndex);
  }
  if (evt.oldIndex === -1) {
    console.log(evt.newIndex);
    console.log(columns.value[evt.to.id].cards[evt.newIndex]);

    const card = columns.value[evt.to.id].cards.find(
      (item) => item.name === evt.target.dataset.key
    );
    store.dispatch("updateOrder", {
      fromColumn: evt.from.id,
      toColumn: evt.to.id,
      fromIndex: -1,
      toIndex: evt.newIndex,
      card,
    });
  }
}

const bindClickDrag = () => {
  let isDown = false;
  let startX;
  let scrollLeft;

  const draggable = kanbanBoard.value;

  const onMouseDown = (e) => {
    let ignoreEl = [
      ".kanban-column .kanban-column-header",
      ".kanban-column .add-card",
      ".kanban-column .kanban-card",
      ".kanban-card-wrapper",
    ];
    if (ignoreEl.some((el) => e.target.closest(el))) return;

    isDown = true;
    draggable.classList.add("clickdrag-active");
    startX = e.pageX - draggable.offsetLeft;
    scrollLeft = draggable.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown = false;
    draggable.classList.remove("clickdrag-active");
  };

  const onMouseUp = () => {
    isDown = false;
    draggable.classList.remove("clickdrag-active");
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - draggable.offsetLeft;
    const walk = x - startX;
    draggable.scrollLeft = scrollLeft - walk;
  };

  draggable.addEventListener("mousedown", onMouseDown);
  draggable.addEventListener("mouseleave", onMouseLeave);
  draggable.addEventListener("mouseup", onMouseUp);
  draggable.addEventListener("mousemove", onMouseMove);
};

const unbindClickDrag = () => {
  const draggable = kanbanBoard.value;

  draggable.removeEventListener("mousedown", onMouseDown);
  draggable.removeEventListener("mouseleave", onMouseLeave);
  draggable.removeEventListener("mouseup", onMouseUp);
  draggable.removeEventListener("mousemove", onMouseMove);
};
</script>
