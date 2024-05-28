"use client"

import { FiSun, FiMoon, FiSettings } from "react-icons/fi"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={20}
        height={20}
        alt=""
        priority={false}
      />
    )

  return (
    <button
      className="text-amber-400 border-amber-400 bg-yellow-100 dark:text-sky-400 dark:bg-cyan-100 dark:border-sky-400 rounded-lg p-1.5 border"
      title={
        theme === "system"
          ? "system"
          : theme === "dark"
          ? "dark theme"
          : "light theme"
      }
      onClick={() =>
        theme === "system"
          ? setTheme("dark")
          : theme === "dark"
          ? setTheme("light")
          : setTheme("system")
      }
    >
      {theme === "system" ? (
        <FiSettings />
      ) : theme === "dark" ? (
        <FiMoon />
      ) : <FiSun />}
    </button>
  )
}
