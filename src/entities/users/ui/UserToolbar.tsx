import { Dispatch, SetStateAction } from 'react'

import { UserStatusInputType } from 'shared/types/user'
import {
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'shared/ui'

type UserToolbarType = {
  userStatus: string
  setUserStatus: Dispatch<SetStateAction<UserStatusInputType>>
  search: string
  setSearch: (value: string) => void
}

const UserToolbar = ({ userStatus, search, setSearch, setUserStatus }: UserToolbarType) => {
  return (
    <div
      className={
        'flex items-center justify-between mb-[-25px]  lg:w-[1200px] md:w-[800px] sm:w-[500px]'
      }
    >
      <div className={'flex items-center py-4'}>
        <Input
          placeholder={'Search'}
          value={search}
          onChange={event => setSearch(event.target.value)}
          className={'max-w-sm'}
        />
      </div>
      <Select onValueChange={setUserStatus as Dispatch<UserStatusInputType>} value={userStatus}>
        <SelectTrigger className={'w-[200px]'}>
          <SelectValue placeholder={userStatus} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value={UserStatusInputType.All}>Not blocked</SelectItem>
            <SelectItem value={UserStatusInputType.Banned}>Blocked</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default UserToolbar
