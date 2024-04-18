import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../../../shared/ui/carousel'

type PostType = {
  photos: string[]
}

export const PostPhotos = ({ photos }: PostType) => {
  return (
    <Carousel className={'w-full max-w-xs'}>
      <CarouselContent>
        {Array.from({ length: photos.length }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <img
                alt={`photo ${index + 1}`}
                className={'w-60 h-60 object-cover mb-3'}
                src={photos[index]}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className={'absolute inset-0 flex items-center justify-between p-2'}>
        <CarouselPrevious />
        <CarouselNext className={'absolute top-0 right-0'} />
      </div>
    </Carousel>
  )
}
