import { useAtom } from 'jotai'
import { type ReactNode, useEffect } from 'react'
import { colorSetAtom, themeAtom } from '../../../features/changeTheme'

interface ThemeProviderProps {
  children: ReactNode
}

// システムのダークモード設定を取得
const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme] = useAtom(themeAtom)
  const [colorSet] = useAtom(colorSetAtom)

  useEffect(() => {
    // systemの場合は実際のテーマに解決
    const resolvedTheme = theme === 'system' ? getSystemTheme() : theme

    // DOMにテーマとカラーセット属性を設定
    document.documentElement.setAttribute('data-theme', resolvedTheme)
    document.documentElement.setAttribute('data-color', colorSet)
  }, [theme, colorSet])

  // システム設定の変更を監視（themeが'system'の時のみ）
  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const newResolvedTheme = mediaQuery.matches ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', newResolvedTheme)
    }

    // 初期設定
    handleChange()

    // 変更を監視
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  return <>{children}</>
}
