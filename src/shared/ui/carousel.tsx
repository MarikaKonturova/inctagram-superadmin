import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import * as React from 'react'

import { cn } from 'shared/utils'

import { Button } from './Button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
type CarouselProps = {
  opts?: CarouselOptions
  orientation?: 'horizontal' | 'vertical'
  plugins?: CarouselPlugin
  setApi?: (api: CarouselApi) => void
}
type CarouselContextProps = {
  api: ReturnType<typeof useEmblaCarousel>[1]
  canScrollNext: boolean
  canScrollPrev: boolean
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  scrollNext: () => void
  scrollPrev: () => void
} & CarouselProps
const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ children, className, opts, orientation = 'horizontal', plugins, setApi, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return
    }
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])
  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])
  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) {
      return
    }
    setApi(api)
  }, [api, setApi])
  React.useEffect(() => {
    if (!api) {
      return
    }
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        api: api,
        canScrollNext,
        canScrollPrev,
        carouselRef,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollNext,
        scrollPrev,
      }}
    >
      <div
        aria-roledescription={'carousel'}
        className={cn('relative', className)}
        onKeyDownCapture={handleKeyDown}
        ref={ref}
        role={'region'}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
})

Carousel.displayName = 'Carousel'
const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
      <div className={'overflow-hidden'} ref={carouselRef}>
        <div
          className={cn(
            'flex',
            orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

CarouselContent.displayName = 'CarouselContent'
const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <div
        aria-roledescription={'slide'}
        className={cn(
          'min-w-0 shrink-0 grow-0 basis-full',
          orientation === 'horizontal' ? 'pl-4' : 'pt-4',
          className
        )}
        ref={ref}
        role={'group'}
        {...props}
      />
    )
  }
)

CarouselItem.displayName = 'CarouselItem'
const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, ...props }) => {
    const { canScrollPrev, scrollPrev } = useCarousel()

    return (
      <Button
        className={cn('h-8 w-8 rounded text-center p-0', className)}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        variant={'secondary'}
        {...props}
      >
        <div className={'flex items-center justify-center w-full m-auto text-center'}>
          <ArrowLeftIcon className={'h-4 w-4'} /> <span className={'sr-only'}>Previous slide</span>
        </div>
      </Button>
    )
  }
)

CarouselPrevious.displayName = 'CarouselPrevious'
const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, ...props }) => {
    const { canScrollNext, scrollNext } = useCarousel()

    return (
      <Button
        className={cn('h-8 w-8 rounded text-center p-0', className)}
        disabled={!canScrollNext}
        onClick={scrollNext}
        variant={'secondary'}
        {...props}
      >
        <div className={'flex items-center justify-center w-full m-auto text-center'}>
          <ArrowRightIcon className={'h-4 w-4'} /> <span className={'sr-only'}>Next slide</span>
        </div>
      </Button>
    )
  }
)

CarouselNext.displayName = 'CarouselNext'
export { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious }
