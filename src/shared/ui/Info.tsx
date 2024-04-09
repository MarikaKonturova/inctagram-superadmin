import { type StaticImageData } from 'next/image'
import React from 'react'

interface InfoPageProps {
  buttonText: string
  image: StaticImageData
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  text: string
  title: string
}

export function Info(props: InfoPageProps) {
  const { buttonText, image, onClick, text, title } = props

  return <div></div>
}
