import { useEffect, useState } from 'react'

import { Button } from './Button'
import { Modal } from './Modal'

interface DeleteModalProps {
  isOpen: boolean
  onClose: () => void
  userName: string
  onConfirm: () => void
}

export const UnBanModal = ({ isOpen, onClose, userName, onConfirm }: DeleteModalProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      description={`Are you sure to unban user ${userName} ?`}
      isOpen={isOpen}
      onClose={onClose}
      title={'Unban User'}
    >
      <div className={'pt-6 space-x-2 flex items-center justify-end w-full'}>
        <Button onClick={onClose} variant={'ghost'}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variant={'destructive'}>
          Continue
        </Button>
      </div>
    </Modal>
  )
}
