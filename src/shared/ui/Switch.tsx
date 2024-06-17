import { Root, Thumb } from '@radix-ui/react-switch'
import { Dispatch, SetStateAction, useId } from 'react'

interface SwitchProps {
  text: string
  checked: boolean
  setChecked: Dispatch<SetStateAction<boolean>>
}

export const Switch = ({ text, checked, setChecked }: SwitchProps) => {
  const id = useId()
  const handlerSwitch = (checked: boolean) => {
    sessionStorage.setItem('autoUpdatePosts', String(checked))
    setChecked(checked)
  }

  return (
    <div className={'inline-flex items-center'}>
      <label
        className={
          'text-black dark:text-white text-sm leading-none pr-4 select-none whitespace-nowrap cursor-pointer'
        }
        htmlFor={id}
      >
        {text}
      </label>
      <Root
        className={'w-[42px] h-[25px] rounded-full relative bg-gray-950 dark:bg-white outline-none'}
        id={id}
        checked={checked}
        onCheckedChange={checked => handlerSwitch(checked)}
      >
        <Thumb
          className={
            'block w-[21px] h-[21px] bg-white dark:bg-gray-950 rounded-full transition-transform duration-100 translate-x-0.5 data-[state=checked]:translate-x-[19px]'
          }
        />
      </Root>
    </div>
  )
}
