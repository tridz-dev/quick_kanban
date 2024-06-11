<template>
    <div :key="indicator" data-action="indicator" class='btn btn-default btn-xs indicator-pill' :class="indicator">
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    indicator: String,
});

</script>
