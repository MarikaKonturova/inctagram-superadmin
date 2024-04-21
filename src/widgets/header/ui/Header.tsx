import clsx from 'clsx'
import Logo from 'shared/assets/icons/general/inctagram-logo.svg'
import { AppLink, Container, LangSelect, ThemeSwitcher } from 'shared/ui'

interface HeaderProps {
  className?: string
}

export const Header = (props: HeaderProps) => {
  const { className } = props

  return (
    <header
      className={clsx(
        'box-border h-header py-12 px-0 bg-dark-700 border-b-2 border-dark-500 transition duration-500 ease-in-out',
        [className]
      )}
    >
      <Container className={'flex items-center justify-between px-12'}>
        <AppLink className={'font-large text-light-100 no-underline'} href={'/'}>
          <Logo />
        </AppLink>
        <div className={'flex gap-10 items-center'}>
          <ThemeSwitcher />
          <LangSelect />
        </div>
      </Container>
    </header>
  )
}
