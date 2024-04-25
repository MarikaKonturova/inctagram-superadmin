import Link from 'next/link'
import ArrowLeft from 'shared/assets/icons/outline/arrow-back-outline.svg'
import { Avatar } from 'shared/ui/Avatar'

import { UserForSuperAdminViewModel } from '../../../shared/types/types'

export const MainUserInfo = ({ userData }: { userData: UserForSuperAdminViewModel }) => {
  const { createdAt, profileLink, userId, userName } = userData

  return (
    <>
      <div className={'pt-6 leading-6 font-normal text-sm'}>
        <Link className={'flex'} href={'/'}>
          <ArrowLeft fill={'white'} />
          <span className={'cursor-pointer outline-none pl-2 font-medium'}>Back to Users List</span>
        </Link>
        <div className={'pt-6 w-[360px]'}>
          <div className={'flex w-full h-14'}>
            <Avatar />
            <div className={'pl-6 flex flex-col '}>
              <span className={'text-h1 leading-9'}>{userData.userName}</span>
              <Link href={'#'}>
                <span
                  className={
                    'transition-colors outline-none text-medium-400 underline hover:text-primary-100'
                  }
                >
                  link to profile
                </span>
              </Link>
            </div>
          </div>
          <div className={'flex justify-between pt-6'}>
            <div className={'flex flex-col w-[172px]'}>
              <span className={'text-light-900'}>UserID</span>
              <span>{'userId'}</span>
            </div>
            <div className={'flex pl-3 w-3/6 flex-col'}>
              <span className={'text-light-900'}>Profile Creation Date</span>
              <span>{'24 04 2006'}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}