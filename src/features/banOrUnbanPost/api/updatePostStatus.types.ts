import * as Types from '../../../shared/lib/apollo/schema.types'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdatePostStatusMutationVariables = Types.Exact<{
  postId: Types.Scalars['Int']['input']
  banReason?: Types.InputMaybe<Types.BanReasonForPostInputType>
  isBanned: Types.Scalars['Boolean']['input']
  details?: Types.InputMaybe<Types.Scalars['String']['input']>
}>

export type UpdatePostStatusMutation = { __typename?: 'Mutation'; updatePostStatus: boolean }

export const UpdatePostStatusDocument = gql`
  mutation updatePostStatus(
    $postId: Int!
    $banReason: BanReasonForPostInputType
    $isBanned: Boolean!
    $details: String
  ) {
    updatePostStatus(postId: $postId, banReason: $banReason, isBanned: $isBanned, details: $details)
  }
`
export type UpdatePostStatusMutationFn = Apollo.MutationFunction<
  UpdatePostStatusMutation,
  UpdatePostStatusMutationVariables
>

/**
 * __useUpdatePostStatusMutation__
 *
 * To run a mutation, you first call `useUpdatePostStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostStatusMutation, { data, loading, error }] = useUpdatePostStatusMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      banReason: // value for 'banReason'
 *      isBanned: // value for 'isBanned'
 *      details: // value for 'details'
 *   },
 * });
 */
export function useUpdatePostStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePostStatusMutation,
    UpdatePostStatusMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdatePostStatusMutation, UpdatePostStatusMutationVariables>(
    UpdatePostStatusDocument,
    options
  )
}
export type UpdatePostStatusMutationHookResult = ReturnType<typeof useUpdatePostStatusMutation>
export type UpdatePostStatusMutationResult = Apollo.MutationResult<UpdatePostStatusMutation>
export type UpdatePostStatusMutationOptions = Apollo.BaseMutationOptions<
  UpdatePostStatusMutation,
  UpdatePostStatusMutationVariables
>
