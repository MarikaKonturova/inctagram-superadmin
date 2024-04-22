import clsx from 'clsx'
import React, { memo, useEffect, useState } from 'react'
import DarkIcon from 'shared/assets/icons/general/theme-dark.svg'
import LightIcon from 'shared/assets/icons/general/theme-light.svg'
import { Button } from 'shared/ui/Button'

interface ThemeSwitcherProps {
  className?: string
  size?: number
}

export const ThemeSwitcher = memo(({ className, size = 25 }: ThemeSwitcherProps) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('class', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Button
      className={clsx('', {}, [className])}
      onClick={toggleTheme}
      style={{ lineHeight: 0 }}
      variant={'clear'}
    >
      {theme === 'dark' ? (
        <DarkIcon height={size} width={size} />
      ) : (
        <LightIcon height={size} width={size} />
      )}
    </Button>
  )
})
