import { atomWithStorage } from 'jotai/utils'

export type Theme = 'light' | 'dark' | 'system'
export type ColorSet = 'red' | 'blue' | 'yellow' | 'purple'

// テーマ設定（明度） - system がデフォルト
export const themeAtom = atomWithStorage<Theme>('theme', 'system')

// カラーセット設定（色相） - red がデフォルト
export const colorSetAtom = atomWithStorage<ColorSet>('colorSet', 'red')
