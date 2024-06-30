import * as Types from '../../../shared/lib/apollo/schema.types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreatedSubscriptionSubscriptionVariables = Types.Exact<{ [key: string]: never }>

export type CreatedSubscriptionSubscription = {
  __typename?: 'Subscription'
  createdSubscription: {
    __typename?: 'PaymentListViewModel'
    urlAvatar?: string | null
    userName: string
    userId: number
    createdAt: any
    amount: string
    typeSubscription: string
    paymentType: Types.PaymentMethod
  }
}

export const CreatedSubscriptionDocument = gql`
  subscription createdSubscription {
    createdSubscription {
      urlAvatar
      userName
      userId
      createdAt
      amount
      typeSubscription
      paymentType
    }
  }
`

/**
 * __useCreatedSubscriptionSubscription__
 *
 * To run a query within a React component, call `useCreatedSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCreatedSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreatedSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCreatedSubscriptionSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    CreatedSubscriptionSubscription,
    CreatedSubscriptionSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    CreatedSubscriptionSubscription,
    CreatedSubscriptionSubscriptionVariables
  >(CreatedSubscriptionDocument, options)
}
export type CreatedSubscriptionSubscriptionHookResult = ReturnType<
  typeof useCreatedSubscriptionSubscription
>
export type CreatedSubscriptionSubscriptionResult =
  Apollo.SubscriptionResult<CreatedSubscriptionSubscription>
