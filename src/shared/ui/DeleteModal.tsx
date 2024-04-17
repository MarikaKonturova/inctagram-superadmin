import { useEffect, useState } from 'react'

import { Button } from './Button'
import { Modal } from './Modal'

interface DeleteModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export const DeleteModal = ({ isOpen, onClose, onConfirm }: DeleteModalProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      description={'This action cannot be undone'}
      isOpen={isOpen}
      onClose={onClose}
      title={'Are you sure'}
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
