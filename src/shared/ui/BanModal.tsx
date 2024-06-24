import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { useTranslation } from 'shared/hooks'
import { BanReasonInputType, User } from 'shared/types'
import { Input } from 'shared/ui/Input'

import { Button } from './Button'
import { Modal } from './Modal'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './Select'

interface BanModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  userData: User
  banReason: BanReasonInputType
  setBanReason: Dispatch<SetStateAction<BanReasonInputType>>
  details: string
  setDetails: Dispatch<SetStateAction<string>>
}

type ReasonType = {
  text: string
  value: BanReasonInputType
}

export const BanModal = ({
  isOpen,
  onClose,
  userData,
  onConfirm,
  setBanReason,
  banReason,
  details,
  setDetails,
}: BanModalProps) => {
  const t = useTranslation()
  const [isMounted, setIsMounted] = useState(false)

  const reasons: ReasonType[] = [
    { text: t.modals.badBehavior, value: BanReasonInputType.BadBehavior },
    { text: t.modals.advertisingPlacement, value: BanReasonInputType.AdvertisingPlacement },
    { text: t.modals.anotherReason, value: BanReasonInputType.AnotherReason },
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      description={`${t.modals.sureToBan} ${userData.userName} ?`}
      isOpen={isOpen}
      onClose={onClose}
      title={'Ban User'}
      className={banReason === BanReasonInputType.AnotherReason ? 'w-[450px]' : 'w-[350px]'}
    >
      <div className={'w-full flex items-center justify-center p-2'}>
        <Select onValueChange={setBanReason as (value: string) => void} value={banReason}>
          <SelectTrigger className={'w-[200px]'}>
            <SelectValue placeholder={banReason} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {reasons.map(reason => (
                <SelectItem key={reason.value} value={reason.value}>
                  {reason.text}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {banReason === BanReasonInputType.AnotherReason && (
        <div className={'flex items-center justify-center p-2'}>
          <Input
            placeholder={t.modals.enterDetails}
            value={details}
            onChange={e => setDetails(e.target.value)}
          />
        </div>
      )}
      <div className={'pt-6 space-x-2 flex items-center justify-center w-full'}>
        <Button onClick={onClose} variant={'ghost'}>
          {t.modals.no}
        </Button>
        <Button onClick={onConfirm} variant={'destructive'}>
          {t.modals.yes}
        </Button>
      </div>
    </Modal>
  )
}
