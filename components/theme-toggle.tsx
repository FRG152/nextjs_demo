'use client'

import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

const emptySubscribe = () => () => {}
const useHasMounted = () =>
  useSyncExternalStore(emptySubscribe, () => true, () => false)

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return <button className="rounded-md border px-3 py-1 text-sm" aria-hidden />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-md border px-3 py-1 text-sm"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? "🌙 Oscuro" : "☀️ Claro"}
    </button>
  )
}

export default ThemeToggle
