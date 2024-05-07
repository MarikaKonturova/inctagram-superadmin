import React, { useEffect, useState } from 'react'

import { Input, Switch, TablePagination } from 'shared/ui'

import {
  PaymentsTable,
  useCreatedSubscriptionSubscription,
  useGetAllPaymentsQuery,
} from 'entities/payments'

export const PaymentsList = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const [autoUpdate, setAutoUpdate] = useState(true)

  const [pageSize, setPageSize] = useState('10')
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const value = sessionStorage.getItem('autoUpdatePosts')

    if (value) {
      const booleanValue = JSON.parse(value)

      setAutoUpdate(booleanValue)
    }
  }, [])

  const { data, loading, previousData, refetch } = useGetAllPaymentsQuery({
    variables: {
      pageNumber: pageIndex + 1,
      pageSize: +pageSize,
      search,
    },
    fetchPolicy: 'cache-and-network',
  })
  const paymentsData = loading && previousData ? previousData : data

  useCreatedSubscriptionSubscription({
    skip: !autoUpdate,
    onData: () => {
      refetch()
    },
    onComplete: () => {
      console.log('on complete')
    },
  })

  return (
    <div className={'flex flex-col'}>
      <div className={'flex flex-col gap-[18px] items-end'}>
        <Switch text={'Autoupdate'} checked={autoUpdate} setChecked={setAutoUpdate} />
        <Input
          type={'search'}
          rootContainerProps={{ className: 'mb-6 w-full' }}
          value={search}
          onValueChange={setSearch}
        />
      </div>
      <PaymentsTable data={data} />
      <TablePagination
        pageIndex={pageIndex}
        pageSize={pageSize}
        pagesCount={data?.paymentsList.pagesCount || paymentsData?.paymentsList.pagesCount || 1}
        setPageIndex={setPageIndex}
        setPageSize={setPageSize}
      />
    </div>
  )
}
