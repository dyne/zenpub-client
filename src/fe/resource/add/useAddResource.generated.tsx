import * as Types from '../../../graphql/types.generated';

import { AddResourceCreateResourceMutationResultFragment } from '../../../HOC/modules/AddResource/addResource.generated';
import gql from 'graphql-tag';
import { AddResourceCreateResourceMutationResultFragmentDoc } from '../../../HOC/modules/AddResource/addResource.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type AddResourceCreateResourceMutationVariables = {
  collectionId: Types.Scalars['String'],
  resource: Types.ResourceInput
};


export type AddResourceCreateResourceMutation = (
  { __typename: 'RootMutationType' }
  & { createResource: Types.Maybe<(
    { __typename: 'Resource' }
    & Pick<Types.Resource, 'id'>
    & AddResourceCreateResourceMutationResultFragment
  )> }
);

export type AddResourceUploadMutationVariables = {
  contextId: Types.Scalars['ID'],
  upload: Types.Scalars['Upload']
};


export type AddResourceUploadMutation = (
  { __typename: 'RootMutationType' }
  & { uploadResource: Types.Maybe<(
    { __typename: 'FileUpload' }
    & AddResourceUploadMutationResultFragment
  )> }
);

export type AddResourceUploadMutationResultFragment = (
  { __typename: 'FileUpload' }
  & Pick<Types.FileUpload, 'id'>
  & { parent: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | (
    { __typename: 'Resource' }
    & Pick<Types.Resource, 'id'>
    & AddResourceCreateResourceMutationResultFragment
  ) | { __typename: 'User' }> }
);

export const AddResourceUploadMutationResultFragmentDoc = gql`
    fragment AddResourceUploadMutationResult on FileUpload {
  id
  parent {
    ... on Resource {
      id
      ...AddResourceCreateResourceMutationResult
    }
  }
}
    ${AddResourceCreateResourceMutationResultFragmentDoc}`;
export const AddResourceCreateResourceDocument = gql`
    mutation addResourceCreateResource($collectionId: String!, $resource: ResourceInput!) {
  createResource(collectionId: $collectionId, resource: $resource) {
    id
    ...AddResourceCreateResourceMutationResult
  }
}
    ${AddResourceCreateResourceMutationResultFragmentDoc}`;
export type AddResourceCreateResourceMutationFn = ApolloReactCommon.MutationFunction<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>;

/**
 * __useAddResourceCreateResourceMutation__
 *
 * To run a mutation, you first call `useAddResourceCreateResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddResourceCreateResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addResourceCreateResourceMutation, { data, loading, error }] = useAddResourceCreateResourceMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      resource: // value for 'resource'
 *   },
 * });
 */
export function useAddResourceCreateResourceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>) {
        return ApolloReactHooks.useMutation<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>(AddResourceCreateResourceDocument, baseOptions);
      }
export type AddResourceCreateResourceMutationHookResult = ReturnType<typeof useAddResourceCreateResourceMutation>;
export type AddResourceCreateResourceMutationResult = ApolloReactCommon.MutationResult<AddResourceCreateResourceMutation>;
export type AddResourceCreateResourceMutationOptions = ApolloReactCommon.BaseMutationOptions<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>;
export const AddResourceUploadDocument = gql`
    mutation addResourceUpload($contextId: ID!, $upload: Upload!) {
  uploadResource(contextId: $contextId, upload: $upload) {
    ...AddResourceUploadMutationResult
  }
}
    ${AddResourceUploadMutationResultFragmentDoc}`;
export type AddResourceUploadMutationFn = ApolloReactCommon.MutationFunction<AddResourceUploadMutation, AddResourceUploadMutationVariables>;

/**
 * __useAddResourceUploadMutation__
 *
 * To run a mutation, you first call `useAddResourceUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddResourceUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addResourceUploadMutation, { data, loading, error }] = useAddResourceUploadMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      upload: // value for 'upload'
 *   },
 * });
 */
export function useAddResourceUploadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddResourceUploadMutation, AddResourceUploadMutationVariables>) {
        return ApolloReactHooks.useMutation<AddResourceUploadMutation, AddResourceUploadMutationVariables>(AddResourceUploadDocument, baseOptions);
      }
export type AddResourceUploadMutationHookResult = ReturnType<typeof useAddResourceUploadMutation>;
export type AddResourceUploadMutationResult = ApolloReactCommon.MutationResult<AddResourceUploadMutation>;
export type AddResourceUploadMutationOptions = ApolloReactCommon.BaseMutationOptions<AddResourceUploadMutation, AddResourceUploadMutationVariables>;


export interface AddResourceCreateResourceMutationOperation {
  operationName: 'addResourceCreateResource'
  result: AddResourceCreateResourceMutation
  variables: AddResourceCreateResourceMutationVariables
  type: 'mutation'
}
export const AddResourceCreateResourceMutationName:AddResourceCreateResourceMutationOperation['operationName'] = 'addResourceCreateResource'


export interface AddResourceUploadMutationOperation {
  operationName: 'addResourceUpload'
  result: AddResourceUploadMutation
  variables: AddResourceUploadMutationVariables
  type: 'mutation'
}
export const AddResourceUploadMutationName:AddResourceUploadMutationOperation['operationName'] = 'addResourceUpload'
