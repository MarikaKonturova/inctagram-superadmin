import clsx from 'clsx'
import { AppLink } from 'shared/ui'
import { Container } from 'shared/ui/container/Container'
import { ComboboxDemo } from 'shared/ui/langSelect/LangSelect'

import Logo from '../../../shared/assets/icons/general/inctagram-logo.svg'
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
          <ComboboxDemo />
        </div>
      </Container>
    </header>
  )
}
