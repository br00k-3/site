"use client"
import * as React from "react"
import Image from "next/image"
import { photos } from "@/lib/photos"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Photos() {
  const half = Math.ceil(photos.length / 2)
  const firstHalf = photos.slice(0, half)
  const secondHalf = photos.slice(half)

  const [open, setOpen] = React.useState(false)
  const [image, setImage] = React.useState()

  function handleOpen(image) {
    setImage(image)
    setOpen(!open)
  }

  return (
    <div>
      <div>
        <div className="flex items-start justify-center space-x-2 md:space-x-6">
          <div className="flex-col justify-center content-start">
            {firstHalf.map(photosItem => (
              <div key={photosItem.title}>
                <Image
                  onClick={() => handleOpen(photosItem)}
                  className="light:rounded-md light:md:rounded-2xl dark:rounded-md dark:md:rounded-2xl retro:rounded-none mt-3 md:mt-6 cursor-pointer"
                  src={photosItem.path}
                  quality={100}
                  placeholder="blur"
                  height={0}
                  width={1080}
                  title={photosItem.title}
                  alt={photosItem.title}
                />
              </div>
            ))}
          </div>
          <div className="flex-col justify-center content-start gap-4">
            {secondHalf.map(photosItem => (
              <div key={photosItem.title}>
                <Image
                  onClick={() => handleOpen(photosItem)}
                  className="light:rounded-md light:md:rounded-2xl dark:rounded-md dark:md:rounded-2xl retro:rounded-none mt-3 md:mt-6 cursor-pointer"
                  src={photosItem.path}
                  quality={100}
                  height={0}
                  placeholder="blur"
                  width={1080}
                  title={photosItem.title}
                  alt={photosItem.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {open ? (
          <div>
            <Dialog open={open} onOpenChange={setOpen}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="mb-1">{image.title}</DialogTitle>
                  <DialogDescription>
                    <Image
                      className=""
                      src={image.path}
                      quality={100}
                      height={0}
                      placeholder="blur"
                      width={1080}
                      title={image.title}
                      alt={image.title}
                    />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        ) : null}
      </div>
    </div>
  )
}