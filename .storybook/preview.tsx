import type { Preview } from '@storybook/react-vite'
import { Provider } from 'jotai'
import React from 'react'
import { ThemeProvider } from '@/app/providers/theme/ThemeProvider.tsx'
import type { ColorSet, Theme } from '@/features/changeTheme'
import '../src/app/styles/styles.css'

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // 初期グローバル設定（v9の新機能）
  initialGlobals: {
    colorSet: 'red',
    backgrounds: { value: 'light' },
  },
  // テーマ切り替えのためのデコレータ
  decorators: [
    (Story, context) => {
      // backgroundsの値からテーマを取得（Storybookの標準背景切り替えと連動）
      const backgroundValue = context.globals.backgrounds?.value || 'light'
      const theme: Theme = backgroundValue === 'dark' ? 'dark' : 'light'
      const colorSet: ColorSet = context.globals.colorSet || 'red'

      React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        document.documentElement.setAttribute('data-color', colorSet)
      }, [theme, colorSet])

      return (
        <Provider>
          <ThemeProvider>
            <Story />
          </ThemeProvider>
        </Provider>
      )
    },
  ],
  // カスタムツールバーの設定
  globalTypes: {
    colorSet: {
      description: 'Color Set',
      toolbar: {
        title: 'Color',
        icon: 'circlehollow',
        items: [
          { value: 'red', title: 'Red' },
          { value: 'blue', title: 'Blue' },
          { value: 'yellow', title: 'Yellow' },
          { value: 'violet', title: 'Violet' },
        ],
      },
    },
  },
}

export default preview
