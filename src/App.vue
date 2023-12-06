<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
 <Header @search="(_payload:Event)=>{}" />
</template>

<style lang="scss">
@import "@/assets/scss/global.scss"
</style>