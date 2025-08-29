import { createFileRoute, Link } from '@tanstack/react-router'
import logo from '../ui/assets/logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <img src={logo} className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]" alt="logo" />
        <p>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>

        {/* ポケモンページへのリンク */}
        <div className="flex flex-col gap-4 mt-8">
          <Link to="/pokemon" className="text-[#61dafb] hover:underline text-xl font-bold">
            🐾 ポケモン図鑑
          </Link>

          <Link to="/demo/tanstack-query" className="text-[#61dafb] hover:underline">
            TanStack Query Demo
          </Link>
        </div>

        <div className="flex flex-col gap-2 mt-8">
          <a
            className="text-[#61dafb] hover:underline"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="text-[#61dafb] hover:underline"
            href="https://tanstack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn TanStack
          </a>
        </div>
      </header>
    </div>
  )
}
