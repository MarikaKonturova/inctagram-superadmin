import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { AppLink } from 'shared/ui'

import CreditCard from '../../../shared/assets/icons/light/credit-card.svg'
import Image from '../../../shared/assets/icons/light/image24.svg'
import Person from '../../../shared/assets/icons/light/person.svg'
import TrendingUp from '../../../shared/assets/icons/light/trending-up.svg'

type MenuItemsType = {
  icon: ReactNode
  label: string
  route?: string
}

const menuItems: MenuItemsType[] = [
  {
    icon: <Person className={'fill-light-100 transition-colors duration-200 ease-out'} />,
    label: 'Users list',
    route: '/',
  },
  {
    icon: <TrendingUp className={'fill-light-100 transition-colors duration-200 ease-out'} />,
    label: 'Statistics',
    route: '/',
  },
  {
    icon: <CreditCard className={'fill-light-100 transition-colors duration-200 ease-out'} />,
    label: 'Payments list',
    route: '/',
  },
  {
    icon: (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image className={'fill-light-100 transition-colors duration-200 ease-out'} />
    ),
    label: 'Posts list',
    route: '/',
  },
]

export const Sidebar = () => {
  const { asPath } = useRouter()

  const currentPath = asPath

  return (
    <div className={'w-sidebar pt-16  h-screen border-r border-solid border-r-dark-300'}>
      <div className={'flex flex-col gap-6 items-start'}>
        {menuItems.map(item => {
          return (
            <div
              className={clsx('', {
                ['flex flex-col gap-6 items-start mt-15']: item.label === 'statistics',
              })}
              key={item.route || item.label}
            >
              <button
                className={
                  'inline-flex h-12 animate-shimmer items-center justify-items-start rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 w-40 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
                }
              >
                <AppLink
                  active={currentPath === item.route}
                  className={clsx(
                    'flex items-center text-light-100 focus:rounded-sm active:text-primary-100 hover:no-underline focus:outline-primary-700 active:outline-none hover:text-primary-100 [&>svg]:hover:fill-primary-100 ',
                    {
                      ['text-primary-300 [&>svg]:fill-primary-300']: currentPath === item.route,
                    }
                  )}
                  href={item.route}
                >
                  {item.icon}
                  <span className={'ml-4 text-regular-400'}>{item.label}</span>
                </AppLink>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
