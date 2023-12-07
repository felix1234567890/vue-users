<script setup lang="ts">
import {useI18n} from 'vue-i18n'
const i18n = useI18n()

const options = [
  { value: '', label: i18n.t('none') },
  { value: 'asc', label: i18n.t('ageAsc') },
  { value: 'desc', label: i18n.t('ageDesc') },
  { value: 'under40', label: i18n.t('ageUnder') },
  { value: 'over40', label: i18n.t('ageOver') },
  { value: 'male', label: i18n.t('male') },
  { value: 'female', label: i18n.t('female') },
];
</script>

<template>
  <div class="sortBy">
    <span>{{ $t('sortBy') }}</span>
    <v-select :options="options" label="label"></v-select>
  </div>
</template>