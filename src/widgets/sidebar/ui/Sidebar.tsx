import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'

import CreditCard from '../../../shared/assets/icons/light/credit-card.svg'
import Image from '../../../shared/assets/icons/light/image24.svg'
import Person from '../../../shared/assets/icons/light/person.svg'
import TrendingUp from '../../../shared/assets/icons/light/trending-up.svg'
import { AppLink } from '../../../shared/ui'

interface SidebarProps {
  active?: string
  className?: string
}

type ParamsType = {
  fill: string
}

type MenuItemsType = {
  icon: ReactNode | Record<'active' | 'inactive', ReactNode>
  label: string
  route?: string
}

const getMenuItems = ({ fill }: ParamsType): MenuItemsType[] => [
  {
    icon: (
      <Person className={'fill-light-100 transition-colors duration-200 ease-out'} fill={fill} />
    ),
    label: 'Users list',
    route: '/',
  },
  {
    icon: (
      <TrendingUp
        className={'fill-light-100 transition-colors duration-200 ease-out'}
        fill={fill}
      />
    ),
    label: 'Statistics',
    route: '/',
  },
  {
    icon: (
      <CreditCard
        className={'fill-light-100 transition-colors duration-200 ease-out'}
        fill={fill}
      />
    ),
    label: 'Payments list',
    route: '/test',
  },
  {
    icon: (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image className={'fill-light-100 transition-colors duration-200 ease-out'} fill={fill} />
    ),
    label: 'Posts list',
    route: '/',
  },
]

export const Sidebar = (props: SidebarProps) => {
  const { className } = props

  const { asPath } = useRouter()

  const currentPath = asPath
  const fill = '#ffffff'

  const menuItems = getMenuItems({ fill })

  return (
    <div className={'w-sidebar pt-16 pl-12 h-screen border-r border-solid border-r-dark-300'}>
      <div className={'flex flex-col gap-6 items-start'}>
        {menuItems.map(item => {
          // @ts-ignore
          const { active, inactive } = item.icon || {}

          let iconElement

          if (active && inactive) {
            iconElement = currentPath === item.route ? active : inactive
          } else {
            iconElement = item.icon
          }

          return (
            <div
              className={clsx('', {
                ['flex flex-col gap-6 items-start mt-15']: item.label === 'statistics',
              })}
              key={item.route || item.label}
            >
              <AppLink
                active={currentPath === item.route}
                className={clsx(
                  'flex items-center text-light-100 focus:rounded-sm active:text-primary-100 hover:no-underline focus:outline-primary-700 active:outline-none hover:text-primary-100',
                  {
                    ['active:text-primary-100 icon fill-primary-500']: currentPath === item.route,
                  }
                )}
                href={item.route}
              >
                {iconElement}
                <span className={'ml-4 text-regular-400'}>{item.label}</span>
              </AppLink>
            </div>
          )
        })}
      </div>
    </div>
  )
}