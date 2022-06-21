<template>
    <el-table :data="Applications" border style="width: 100%">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="reviewerId" label="ReviewerId" />
        <el-table-column prop="status" label="Status" />
        <el-table-column prop="visitorName" label="VisitorName" />
        <el-table-column prop="visitorTel" label="VisitorTel" />
        <el-table-column prop="visitorIdNumber" label="VisitorIdNumber" />
        <el-table-column prop="startTime" label="StartTime" />
        <el-table-column prop="endTime" label="EndTime" />
        <el-table-column prop="vehicleNumber" label="VehicleNumber" />
        <el-table-column prop="validationSecret" label="ValidationSecret" />
    </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

interface Application {
    id: string;
    reviewerId: string; // 审批人 ID
    status: string; // 审批状态，0 是未审批，1 是第一审批人通过，2 是第一审批人失败，3 是第二审批人通过，4 时第二审批人失败
    visitorName: string; // 名字
    visitorTel: string; // 联系号码
    visitorIdNumber: string; // 身份证 ID
    startTime: Date; // 访问开始时间
    endTime: Date; // 访问结束时间
    vehicleNumber: string;
    validationSecret: string; // 用于生成访客二维码的 UUID
}

const Applications = ref<Application[]>([]);

function getAllApplication() {
    axios({
        url: 'https://2016wuji01.icu/api/allApplications',
        method: 'get',
    }).then((res) => {
        console.log(res.data.data);
        Applications.value = res.data.data;
    });
}

getAllApplication();
</script>

<style>
.tableName {
    font-size: larger;
    text-align: center;
}
</style>
