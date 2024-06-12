import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { ImagesUserType, UserImagesType } from 'shared/types'

import { useGetUserImagesQuery } from 'entities/user'

const UserPosts = () => {
  const router = useRouter()
  const [photosData, setPhotosData] = useState<ImagesUserType | undefined>()
  const { userId } = router.query

  const {} = useGetUserImagesQuery({
    variables: {
      userId: Number(userId),
    },
    fetchPolicy: 'cache-and-network',
    onCompleted: (data: UserImagesType) => setPhotosData(data.user.imagesUser),
    onError: error => console.error('error', error),
  })

  return (
    <div className={'flex items-start justify-start flex-wrap gap-1 max-w-[972px] '}>
      {photosData?.items.map(post => (
        <div key={post.url}>
          <Image
            alt={`photo ${post.url}`}
            className={'w-60 h-60 object-cover'}
            src={post.url}
            width={500}
            height={100}
          />
        </div>
      ))}
    </div>
  )
}

export default UserPosts
