import * as Types from '../../../shared/lib/apollo/schema.types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateUserStatusMutationVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input']
  banReason?: Types.InputMaybe<Types.BanReasonInputType>
  isBanned: Types.Scalars['Boolean']['input']
  details?: Types.InputMaybe<Types.Scalars['String']['input']>
}>

export type UpdateUserStatusMutation = { __typename?: 'Mutation'; updateUserStatus: boolean }

export const UpdateUserStatusDocument = gql`
  mutation updateUserStatus(
    $userId: Int!
    $banReason: BanReasonInputType
    $isBanned: Boolean!
    $details: String
  ) {
    updateUserStatus(userId: $userId, banReason: $banReason, isBanned: $isBanned, details: $details)
  }
`
export type UpdateUserStatusMutationFn = Apollo.MutationFunction<
  UpdateUserStatusMutation,
  UpdateUserStatusMutationVariables
>

/**
 * __useUpdateUserStatusMutation__
 *
 * To run a mutation, you first call `useUpdateUserStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserStatusMutation, { data, loading, error }] = useUpdateUserStatusMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      banReason: // value for 'banReason'
 *      isBanned: // value for 'isBanned'
 *      details: // value for 'details'
 *   },
 * });
 */
export function useUpdateUserStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserStatusMutation,
    UpdateUserStatusMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateUserStatusMutation, UpdateUserStatusMutationVariables>(
    UpdateUserStatusDocument,
    options
  )
}
export type UpdateUserStatusMutationHookResult = ReturnType<typeof useUpdateUserStatusMutation>
export type UpdateUserStatusMutationResult = Apollo.MutationResult<UpdateUserStatusMutation>
export type UpdateUserStatusMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserStatusMutation,
  UpdateUserStatusMutationVariables
>
