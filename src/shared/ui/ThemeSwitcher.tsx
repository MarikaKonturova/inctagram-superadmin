import clsx from 'clsx'
import React, { memo, useEffect, useState } from 'react'

import DarkIcon from 'shared/assets/icons/general/theme-dark.svg'
import LightIcon from 'shared/assets/icons/general/theme-light.svg'
import { Theme } from 'shared/constants/theme'
import { useTheme } from 'shared/hooks/useTheme'
import { Button } from 'shared/ui/Button'

interface ThemeSwitcherProps {
  className?: string
  size?: number
}

export const ThemeSwitcher = memo(({ className, size = 25 }: ThemeSwitcherProps) => {
  const [theme, setTheme] = useState(Theme.DARK)
  const { toggleTheme: toggleThemeNew } = useTheme()

  useEffect(() => {
    document.documentElement.setAttribute('class', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme == Theme.DARK ? Theme.LIGHT : Theme.DARK

    toggleThemeNew()
    setTheme(newTheme)
  }

  if (!theme) {
    return null
  }

  return (
    <Button
      className={clsx('', {}, [className])}
      onClick={toggleTheme}
      style={{ lineHeight: 0 }}
      variant={'clear'}
    >
      {theme === Theme.DARK ? (
        <DarkIcon height={size} width={size} />
      ) : (
        <LightIcon height={size} width={size} />
      )}
    </Button>
  )
})
