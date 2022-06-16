<template>
    <div>Mouse:{{ x }},{{ y }}</div>
</template>

<script lang="ts" setup>
import { useMouse } from '@vueuse/core';
const { x, y } = useMouse();
</script>

<style lang="scss"></style>
