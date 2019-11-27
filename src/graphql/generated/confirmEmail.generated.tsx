import * as Types from '../types.generated.d';

import { BasicUserFragment } from '../fragments/generated/basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from '../fragments/generated/basicUser.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type ConfirmEmailMutationMutationVariables = {
  token: Types.Scalars['String']
};


export type ConfirmEmailMutationMutation = { __typename?: 'RootMutationType', confirmEmail: Types.Maybe<{ __typename?: 'AuthPayload', token: string, me: { __typename?: 'Me', email: string, wantsEmailDigest: boolean, wantsNotifications: boolean, isConfirmed: boolean, isInstanceAdmin: boolean, user: (
        { __typename?: 'User' }
        & BasicUserFragment
      ) } }> };


export const ConfirmEmailMutationDocument = gql`
    mutation confirmEmailMutation($token: String!) {
  confirmEmail(token: $token) {
    token
    me {
      email
      wantsEmailDigest
      wantsNotifications
      isConfirmed
      isInstanceAdmin
      user {
        ...BasicUser
      }
    }
  }
}
    ${BasicUserFragmentDoc}`;
export type ConfirmEmailMutationMutationFn = ApolloReactCommon.MutationFunction<ConfirmEmailMutationMutation, ConfirmEmailMutationMutationVariables>;
export type ConfirmEmailMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ConfirmEmailMutationMutation, ConfirmEmailMutationMutationVariables>, 'mutation'>;

    export const ConfirmEmailMutationComponent = (props: ConfirmEmailMutationComponentProps) => (
      <ApolloReactComponents.Mutation<ConfirmEmailMutationMutation, ConfirmEmailMutationMutationVariables> mutation={ConfirmEmailMutationDocument} {...props} />
    );
    
export type ConfirmEmailMutationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ConfirmEmailMutationMutation, ConfirmEmailMutationMutationVariables> & TChildProps;
export function withConfirmEmailMutation<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ConfirmEmailMutationMutation,
  ConfirmEmailMutationMutationVariables,
  ConfirmEmailMutationProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ConfirmEmailMutationMutation, ConfirmEmailMutationMutationVariables, ConfirmEmailMutationProps<TChildProps>>(ConfirmEmailMutationDocument, {
      alias: 'confirmEmailMutation',
      ...operationOptions
    });
};

/**
 * __useConfirmEmailMutationMutation__
 *
 * To run a mutation, you first call `useConfirmEmailMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmailMutationMutation, { data, loading, error }] = useConfirmEmailMutationMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmEmailMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ConfirmEmailMutationMutation, ConfirmEmailMutationMutationVariables>) {
        return ApolloReactHooks.useMutation<ConfirmEmailMutationMutation, ConfirmEmailMutationMutationVariables>(ConfirmEmailMutationDocument, baseOptions);
      }
export type ConfirmEmailMutationMutationHookResult = ReturnType<typeof useConfirmEmailMutationMutation>;
export type ConfirmEmailMutationMutationResult = ApolloReactCommon.MutationResult<ConfirmEmailMutationMutation>;
export type ConfirmEmailMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<ConfirmEmailMutationMutation, ConfirmEmailMutationMutationVariables>;