import { PaidAccountsChart, UsersChart } from 'features/statistics'

export const UsersAndPaidAccounts = () => {
  return (
    <div className={'flex flex-col gap-8'}>
      <UsersChart />
      <PaidAccountsChart />
    </div>
  )
}
