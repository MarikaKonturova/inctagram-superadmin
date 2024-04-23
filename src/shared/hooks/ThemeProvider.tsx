import React, { type FC, createContext, useEffect, useMemo, useState } from 'react'

let defaultTheme: Theme

const LOCAL_STORAGE_THEME_KEY = 'theme'

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}
interface ThemeProviderProps {
  children: React.ReactNode
  initialTheme?: Theme
}

export interface ThemeContextProps {
  setTheme: (theme: Theme) => void
  theme: Theme
}

export const ThemeContext = createContext<ThemeContextProps>({
  setTheme: () => {},
  theme: Theme.DARK,
})

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  if (typeof window !== 'undefined') {
    document.body.className = theme
  }
  useEffect(() => {
    if (!initialTheme) {
      setTheme((localStorage?.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK)
    }
  }, [])

  const defaultProps = useMemo(
    () => ({
      setTheme,
      theme,
    }),
    [theme]
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
