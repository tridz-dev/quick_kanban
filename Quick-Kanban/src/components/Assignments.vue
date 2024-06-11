<template>
    <span class="avatar avatar-small" v-for="assignee in assignments" :title="assignee">
        <div class="avatar-frame standard-image" :style="getAvatar(assignee)" :title="assignee">
            {{ assignee?.charAt(0) }}
        </div>
    </span>
</template>
<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    assignments: Array,
});

function getAvatar(title) {
    let color = frappe.get_palette(title)
    return `background-color: var(${color[0]}); color: var(${color[1]})`
}

</script>