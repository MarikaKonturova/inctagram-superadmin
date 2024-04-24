import { Layout } from 'layouts'

import NotFoundImg from 'shared/assets/images/404error.png'
import { Info } from 'shared/ui'

export default function NotFound() {
  return (
    <Info
      buttonText={'back'}
      image={NotFoundImg}
      onClick={() => {
        history.back()
      }}
      text={'notFoundText'}
      title={'notFoundTitle'}
    />
  )
}

NotFound.getLayout = Layout
