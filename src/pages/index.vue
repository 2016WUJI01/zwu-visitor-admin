<template>
    <el-tabs type="border-card">
        <el-tab-pane label="Reviewers">
            <Reviewers></Reviewers>
        </el-tab-pane>
        <el-tab-pane label="Applications">
            <Applications></Applications>
        </el-tab-pane>
        <el-tab-pane label="Departments">
            <Departments></Departments>
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import Reviewers from '../components/Reviewers.vue';
import Applications from '../components/Applications.vue';
import Departments from '../components/Departments.vue';
</script>

<style></style>
