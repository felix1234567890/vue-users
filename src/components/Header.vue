<script setup lang="ts">
import i18n from '@/i18n'
import { ref } from 'vue'
const lang = ref<'en' | 'hr'>('en')

const handleChangeLanguage = () => {
  lang.value = lang.value === 'en' ? 'hr' : 'en'
  i18n.global.locale = lang.value
}

defineProps<{ onSearch: (payload: Event) => void }>()
</script>

<template>
  <header class="header">
    <div class="header__title">{{ $t('headerTitle') }}</div>
    <div class="header__search">
      <input class="search-input" :placeholder="$t('searchText')" @input="onSearch" />
    </div>
    <span @click="handleChangeLanguage" class="language">{{ $t('lng') }}</span>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  &__title {
    font-weight: 600;
    font-size: 3rem;
    color: #fff;
  }

  &__search {
    input {
      background: lighten($body-background-color, 10%);
      margin-left: 5rem;
      border: 1px solid lighten($body-background-color, 10%);
      padding: 1rem 2rem;
      border-radius: 10rem;
      width: 25rem;
      outline: none;
      color: $body-color;
      &::placeholder {
        color: white;
        opacity: 0.9;
      }
    }
  }
}

.header__title {
  font-size: 2rem;
  font-weight: 700;
}

.header__search {
  flex: 1;
  margin-right: 2rem;
}

.search-input {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 100%;
}

.language {
  cursor: pointer;
}
</style>
