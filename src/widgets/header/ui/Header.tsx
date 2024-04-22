import clsx from 'clsx'
import { AppLink, Container, LangSelect, ThemeSwitcher } from 'shared/ui'
import { SparklesCore } from 'shared/ui/Sparkles'

interface HeaderProps {
  className?: string
}

export const Header = (props: HeaderProps) => {
  const { className } = props

  return (
    <header
      className={clsx(
        'box-border h-header py-10 px-0 bg-dark-700 border-b-2 border-dark-500 transition duration-500 ease-in-out',
        [className]
      )}
    >
      <Container className={'flex items-center justify-between px-12'}>
        <AppLink className={'font-large text-light-100 no-underline '} href={'/'}>
          <div
            className={
              'h-full w-full  flex flex-col items-center justify-center overflow-hidden rounded-md'
            }
          >
            <h1 className={'text-3xl leading-3 font-bold text-center relative z-40 '}>
              <span className={'font-semibold text-2xl '}>Inctagram</span>
              <span className={'font-light text-small'}>Super</span>
              <span className={'font-normal text-medium'}>Admin</span>
            </h1>

            <div className={'w-36 h-5 relative'}>
              {/* Gradients */}
              <div className={'absolute inset-x-0 top-0 left-1 -right-1/3'}>
                <div
                  className={
                    'absolute bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-1/4 blur-sm'
                  }
                />
                <div
                  className={
                    'absolute bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-1/4'
                  }
                />
                <div
                  className={
                    'absolute bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-3/4 blur-sm'
                  }
                />
                <div
                  className={
                    'absolute bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-3/4'
                  }
                />
              </div>

              {/* Core component */}
              <SparklesCore
                background={'transparent'}
                className={'w-full h-full'}
                maxSize={0.7}
                minSize={0.2}
                particleColor={'#FFFFFF'}
                particleDensity={2000}
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div
                className={
                  'absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'
                }
              ></div>
            </div>
          </div>
        </AppLink>
        <div className={'flex gap-10 items-center'}>
          <ThemeSwitcher />
          <LangSelect />
        </div>
      </Container>
    </header>
  )
}
