import { ReactNode } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './Dialog'

interface ModalProps {
  children?: ReactNode
  description: string
  isOpen: boolean
  onClose: () => void
  title: string
  className?: string
}

export const Modal = ({ children, description, isOpen, onClose, title, className }: ModalProps) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Dialog onOpenChange={onChange} open={isOpen}>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <div>{children}</div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
