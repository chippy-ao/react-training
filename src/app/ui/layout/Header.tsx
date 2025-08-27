import { Link } from '@tanstack/react-router'
import { useAtom } from 'jotai'
import { type ColorSet, colorSetAtom, type Theme, themeAtom } from '@/features/changeTheme'

export default function Header() {
  const [theme, setTheme] = useAtom(themeAtom)
  const [colorSet, setColorSet] = useAtom(colorSetAtom)

  const themes: Theme[] = ['light', 'dark', 'system']
  const colorSets: ColorSet[] = ['red', 'blue', 'yellow', 'violet']

  return (
    <header className="p-2 flex gap-2 bg-background text-foreground justify-between border-b border-border">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/tanstack-query">TanStack Query</Link>
        </div>
      </nav>

      <div className="flex gap-2 items-center">
        <div className="flex gap-1">
          <span className="text-sm">テーマ:</span>
          {themes.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTheme(t)}
              className={`px-2 py-1 text-xs rounded border ${
                theme === t
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex gap-1">
          <span className="text-sm">色:</span>
          {colorSets.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setColorSet(color)}
              className={`px-2 py-1 text-xs rounded border ${
                colorSet === color
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-accent'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
