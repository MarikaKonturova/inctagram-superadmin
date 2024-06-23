import { useEffect, useState } from 'react'

import { useTranslation } from 'shared/hooks'

import { Button } from './Button'
import { Modal } from './Modal'

interface DeleteModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  userName: string
}

export const DeleteModal = ({ isOpen, onClose, onConfirm, userName }: DeleteModalProps) => {
  const t = useTranslation()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      description={`${t.modals.sureToDelete} ${userName} ?`}
      isOpen={isOpen}
      onClose={onClose}
      title={'Delete User'}
    >
      <div className={'pt-6 space-x-2 flex items-center justify-end w-full'}>
        <Button onClick={onClose} variant={'ghost'}>
          {t.modals.cancel}
        </Button>
        <Button onClick={onConfirm} variant={'destructive'}>
          {t.modals.continue}
        </Button>
      </div>
    </Modal>
  )
}
