import clsx from 'clsx'
import Logo from 'shared/assets/icons/general/inctagram-logo.svg'
import { AppLink, Container, LangSelect, ThemeSwitcher } from 'shared/ui'

import cls from './Header.module.css'

interface HeaderProps {
  className?: string
}

export const Header = (props: HeaderProps) => {
  const { className } = props

  return (
    <header className={clsx(cls.Header, [className])}>
      <Container className={cls.container}>
        <AppLink className={cls.headerText} href={'/'}>
          <Logo />
        </AppLink>
        <div className={cls.rightBlock}>
          <ThemeSwitcher />
          <LangSelect />
        </div>
      </Container>
    </header>
  )
}
