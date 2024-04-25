import Image from 'next/image'

import IconImg from 'shared/assets/icons/light/image.svg'
import { cn } from 'shared/utils'

type Props = {
  className?: string
  src?: string | null
}

export const Avatar = ({ className, src }: Props) => {
  return (
    <div
      className={cn(
        `relative flex h-[60px] w-[60px] overflow-hidden rounded-full bg-[var(--dark-500-color)]`,
        className
      )}
    >
      {!src && (
        <div
          className={
            'flex bg-[var(--dark-500-color)] h-full w-full items-center justify-center rounded-full'
          }
        >
          <IconImg className={'h-[36px] w-[36px]'} />
        </div>
      )}
      {src && (
        <Image
          alt={'avatar'}
          className={'aspect-square h-full w-full object-cover'}
          fill
          src={src}
        />
      )}
    </div>
  )
}
