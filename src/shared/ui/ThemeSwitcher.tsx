import clsx from 'clsx'
import React, { memo } from 'react'
import DarkIcon from 'shared/assets/icons/general/theme-dark.svg'
import LightIcon from 'shared/assets/icons/general/theme-light.svg'
import { Button } from 'shared/ui/Buttons'

interface ThemeSwitcherProps {
  className?: string
  size?: number
}

export const ThemeSwitcher = memo(({ className, size = 25 }: ThemeSwitcherProps) => {
  /* const { theme, toggleTheme } = useTheme()

  if (!theme) {
    return null
  }*/

  return (
    <Button
      className={clsx('', {}, [className])}
      /*onClick={toggleTheme}*/
      style={{ lineHeight: 0 }}
      variant={'clear'}
      /* theme={}*/
    >
      {/* {theme === Theme.DARK ? (
        <DarkIcon height={size} width={size} />
      ) : (
        <LightIcon height={size} width={size} />
      )}*/}
      <DarkIcon height={size} width={size} />
    </Button>
  )
})
