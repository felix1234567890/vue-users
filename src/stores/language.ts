import i18n from '@/i18n'
import { defineStore } from 'pinia'

export const useLanguage = defineStore('language', {
  state: (): { language: 'hr' | 'en' } => ({
    language: 'en'
  }),
  actions: {
    setLanguage(language: 'hr' | 'en') {
      this.language = language
      i18n.global.locale = this.language
    }
  }
})
