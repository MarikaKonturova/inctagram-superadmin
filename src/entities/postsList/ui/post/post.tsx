import React, { useState } from 'react'

export const Post = () => {
  const [showMore, setShowMore] = useState(false)
  const [buttonText, setButtonText] = useState('Show more')

  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  const handleToggle = () => {
    setShowMore(!showMore)
    setButtonText(showMore ? 'Show more' : 'Hide')
  }

  return (
    <div className={'w-56 h-98'}>
      <div>
        <img
          alt={'asd'}
          className={'w-60 h-60 object-cover mb-3'}
          src={
            'https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752960.jpg?t=st=1712914944~exp=1712918544~hmac=0d3c7a7296bbb53cbb9572eba3e371bfd1e9da406a00d3f026286572408d101f&w=740'
          }
        />
      </div>
      <div className={'flex flex-row justify-between items-center'}>
        <div className={'flex flex-row'}>
          <img
            alt={'sd'}
            className={'h-9 w-9 object-cover rounded-full mr-2'}
            src={
              'https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752960.jpg?t=st=1712914944~exp=1712918544~hmac=0d3c7a7296bbb53cbb9572eba3e371bfd1e9da406a00d3f026286572408d101f&w=740'
            }
          />
          <p className={'font-inter text-base font-semibold leading-6 tracking-normal'}>
            URLProfile
          </p>
        </div>
        <p>x</p>
      </div>
      <div className={'mt-3'}>
        <span className={'font-inter text-xs font-normal leading-4 tracking-normal text-light-900'}>
          22 min ago
        </span>
        <p className={'mt-1 font-inter text-sm font-normal leading-6 tracking-normal text-left'}>
          {showMore ? text : text.slice(0, 83) + '...'}
          {text.length > 83 && (
            <span className={'underline text-primary-900 cursor-pointer'} onClick={handleToggle}>
              {buttonText}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}
