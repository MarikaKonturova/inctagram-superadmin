import { useContext } from 'react'
import { ThemeContext } from 'shared/hooks/ThemeProvider'

const LOCAL_STORAGE_THEME_KEY = 'theme'

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
  const { setTheme, theme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme == Theme.DARK ? Theme.LIGHT : Theme.DARK

    /* setTheme?.(newTheme)*/
    document.documentElement.setAttribute('class', newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
