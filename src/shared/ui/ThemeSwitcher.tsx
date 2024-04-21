import clsx from 'clsx'
import React, { memo, useState } from 'react'
import DarkIcon from 'shared/assets/icons/general/theme-dark.svg'
import LightIcon from 'shared/assets/icons/general/theme-light.svg'
import { Button } from 'shared/ui/Buttons'

interface ThemeSwitcherProps {
  className?: string
  size?: number
}

export const ThemeSwitcher = memo(({ className, size = 25 }: ThemeSwitcherProps) => {
  const [theme, setTheme] = useState('DARK')
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'DARK' ? 'LIGHT' : 'DARK'))
  }
  /* const { theme, toggleTheme } = useTheme()



  if (!theme) {
    return null
  }*/

  return (
    <Button
      className={clsx('', {}, [className])}
      /* theme={}*/
      onClick={toggleTheme}
      style={{ lineHeight: 0 }}
      variant={'clear'}
    >
      {/* {theme === Theme.DARK ? (
        <DarkIcon height={size} width={size} />
      ) : (
        <LightIcon height={size} width={size} />
      )}*/}

      {theme === 'DARK' ? (
        <DarkIcon height={size} width={size} />
      ) : (
        <LightIcon height={size} width={size} />
      )}
    </Button>
  )
})
