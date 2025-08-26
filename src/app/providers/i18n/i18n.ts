import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
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
  .use(LanguageDetector) // ブラウザ言語検出プラグイン
  .use(initReactI18next) // React i18next プラグイン
  .init({
    resources,
    fallbackLng: 'ja', // フォールバック言語
    detection: {
      // 言語検出の順序
      order: ['localStorage', 'navigator', 'htmlTag'],
      // localStorageのキー名
      lookupLocalStorage: 'language',
      // 自動的にlocalStorageに保存
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React は XSS を防ぐため
    },
  })

export default i18n
