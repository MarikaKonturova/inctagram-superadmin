import { ReactNode } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './Dialog'

interface ModalProps {
  children?: ReactNode
  description: string
  isOpen: boolean
  onClose: () => void
  title: string
}

export const Modal = ({ children, description, isOpen, onClose, title }: ModalProps) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Dialog onOpenChange={onChange} open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <div>{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
