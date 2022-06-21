<template>
    <el-table :data="Reviewers" border style="width: 100%">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="departmentId" label="DepartmentId" />
        <el-table-column prop="status" label="Status" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="tel" label="Tel" />
        <el-table-column prop="IdNumber" label="IdNumber" />
        <el-table-column prop="vehicleNumber" label="VehicleNumber" />
        <el-table-column prop="validationSecret" label="ValidationSecret" />
    </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

interface Reviewer {
    id: string; // 工号，学生 ID
    departmentId: string; // 部门 ID
    status: string; // 状态，0 是无审批能力，1 是教学部门审批能力，2 是后勤部门审批能力
    name: string; // 姓名
    tel: string; // 联系
    IdNumber: string; // 身份证
    vehicleNumber: string;
    validationSecret: string; // 用于生成访客二维码的 UUID
}

const Reviewers = ref<Reviewer[]>([]);

function getAllReviewers() {
    axios({
        url: 'https://2016wuji01.icu/api/allReviewers',
        method: 'get',
    }).then((res) => {
        console.log(res.data.data);
        Reviewers.value = res.data.data;
    });
}

getAllReviewers();
</script>

<style>
.tableName {
    font-size: larger;
    text-align: center;
}
</style>
