import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// 翻訳リソース
const resources = {
  ja: {
    translation: {
      // 後で翻訳キーを追加
    },
  },
  en: {
    translation: {
      // 後で翻訳キーを追加
    },
  },
}

void i18n
  .use(initReactI18next) // React i18next プラグイン
  .init({
    resources,
    lng: localStorage.getItem('language') || 'ja', // localStorageから取得、なければ日本語
    fallbackLng: 'ja', // フォールバック言語
    interpolation: {
      escapeValue: false, // React は XSS を防ぐため
    },
  })

// 言語変更時にlocalStorageに保存
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng)
})

export default i18n
