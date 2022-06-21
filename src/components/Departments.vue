<template>
    <el-table :data="Departments" border style="width: 100%">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="campus" label="Campus" />
    </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

interface Department {
    id: string; // 部门 ID
    name: string; // 部门名称
    campus: string; // 校区 ID，1 钱湖校区，2 回龙校区，3 其他校区
}

const Departments = ref<Department[]>([]);

function getAllDepartments() {
    axios({
        url: 'https://2016wuji01.icu/api/allDepartments',
        method: 'get',
    }).then((res) => {
        console.log(res.data.data);
        Departments.value = res.data.data;
    });
}

getAllDepartments();
</script>

<style>
.tableName {
    font-size: larger;
    text-align: center;
}
</style>
