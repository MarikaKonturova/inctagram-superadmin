import React from 'react'

import { PostDescription } from '../postDescription'
import { PostPhotos } from '../postPhotos'
import { PostUserInfo } from '../postUserInfo'

type PostType = {
  user?: any
}

export const Post = (user: PostType) => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  const mockImage = [
    'https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752960.jpg?t=st=1712914944~exp=1712918544~hmac=0d3c7a7296bbb53cbb9572eba3e371bfd1e9da406a00d3f026286572408d101f&w=740',
    'https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752960.jpg?t=st=1712914944~exp=1712918544~hmac=0d3c7a7296bbb53cbb9572eba3e371bfd1e9da406a00d3f026286572408d101f&w=740',
  ]

  const mockImageProfile =
    'https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752960.jpg?t=st=1712914944~exp=1712918544~hmac=0d3c7a7296bbb53cbb9572eba3e371bfd1e9da406a00d3f026286572408d101f&w=740'

  const mockUserName = 'URLProfile'

  return (
    <div className={'w-60 h-[391px]'}>
      <PostPhotos photos={mockImage} />
      {/*<PostUserInfo avatar={mockImageProfile} banned={false} userName={mockUserName} />*/}
      <PostDescription
        avatar={mockImageProfile}
        banned={false}
        createdAt={'22 min ago'}
        description={text}
        userName={mockUserName}
      />
    </div>
  )
}