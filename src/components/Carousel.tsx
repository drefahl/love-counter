"use client"

import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Carousel as UiCarousel,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Carousel() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images")
        const data = await response.json()

        setImages(data)
      } catch (error) {
        console.error("Error fetching images:", error)
      }
    }

    fetchImages()
  }, [])

  if (images.length === 0) return null

  return (
    <div className="relative w-full h-screen">
      <UiCarousel opts={{ loop: true }} plugins={[Autoplay({ delay: 5000 })]} className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full h-screen">
              <div className="relative w-full h-full min-h-[400px] lg:min-h-0 flex items-center justify-center">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 z-10" />
      </UiCarousel>
    </div>
  )
}
