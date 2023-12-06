import { createI18n } from "vue-i18n"
import en from '@/assets/locales/en/translation.json'
import hr from '@/assets/locales/hr/translation.json'
const i18n = createI18n({// to use with Composition API
    legacy: true,           // so that VueI18n still works with Options API
    globalInjection: true, 
    locale: 'en', // Default locale
    fallbackLocale: 'en', // Fallback locale if translation not available
    messages: {
        en,
        hr
        // Add other language translations here
    },
})

export default i18n