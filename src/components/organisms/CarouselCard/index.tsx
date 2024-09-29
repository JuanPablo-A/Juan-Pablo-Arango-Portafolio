import * as React from "react"

import { Card, CardContent } from "@/components/atoms/Card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/atoms/Carousel"
import CarouselInfo from "@/components/molecules/CarouselInfo"
import { firstItems } from "@/data/carouselItems"

export function CarouselCard() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="flex flex-col justify-center items-center w-[100px]">
      <div className="flex flex-col gap-6 h-full">
          <Carousel setApi={setApi} className="w-full max-w-72 sm:max-w-80 md:max-w-md transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110">
            <CarouselContent>
              {Array.from({ length: firstItems.length }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-start justify-center p-6">
                        <CarouselInfo 
                          imageUrl={firstItems[index].img}
                          title={firstItems[index].title}
                          description={firstItems[index].description}
                        />
                        <div>
                          <a href='https://github.com/JuanPablo-A/Aprendiendo-React' className="text-yellow-500 hover:underline mt-4 block">
                            Learn More &raquo;
                          </a> 
                        </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
      </div>
    </div>
  )
}
