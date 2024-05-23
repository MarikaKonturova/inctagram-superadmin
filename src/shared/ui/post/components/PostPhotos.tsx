import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'shared/ui/carousel'

type PostType = { photos: string[] | null | undefined }
export const PostPhotos = ({ photos }: PostType) => {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }

    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <Carousel className={'relative w-full max-w-xs'} setApi={setApi}>
      <CarouselContent>
        {photos?.map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Image
                alt={`photo ${index + 1}`}
                className={'w-60 h-60 object-cover'}
                src={photos[index]}
                width={500}
                height={100}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {photos && photos.length > 1 && (
        <div className={'absolute inset-0 flex flex-row items-center justify-between p-2'}>
          <CarouselPrevious className={'bg-[rgba(0,0,0,0.2)]'} />
          {currentIndex < photos.length - 1 && <CarouselNext className={'bg-[rgba(0,0,0,0.2)]'} />}
        </div>
      )}
      {photos && photos.length > 1 && (
        <div
          className={
            'absolute rounded bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 p-1 bg-[rgba(0,0,0,0.2)]'
          }
        >
          {photos.map((_, index) => (
            <span
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-primary-500' : 'bg-light-100 transition-colors duration-500'}`}
              key={index}
            />
          ))}
        </div>
      )}
    </Carousel>
  )
}
