<script setup lang="ts">
import Filters from './components/Filters.vue';
import Header from './components/Header.vue';
</script>

<template>
 <Header @search="(_payload:Event)=>{}" />
 <Filters />
</template>

<style lang="scss">
@import "@/assets/scss/global.scss"
</style>