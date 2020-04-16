import * as Types from '../../../graphql/types.generated';

import { CollectionPreviewFragment } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { CollectionPreviewFragmentDoc } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type MyFollowedCollectionsQueryVariables = {};


export type MyFollowedCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & MyFollowedCollectionsDataFragment
  )> }
);

export type MyFollowedCollectionsDataFragment = (
  { __typename: 'Me' }
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { collectionFollows: Types.Maybe<(
      { __typename: 'FollowsPage' }
      & Pick<Types.FollowsPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
        & { context: (
          { __typename: 'Collection' }
          & CollectionPreviewFragment
        ) | { __typename: 'Community' } | { __typename: 'Thread' } | { __typename: 'User' } }
      )> }
    )> }
  ) }
);

export const MyFollowedCollectionsDataFragmentDoc = gql`
    fragment MyFollowedCollectionsData on Me {
  user {
    id
    collectionFollows {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        id
        context {
          ... on Collection {
            ...CollectionPreview
          }
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${CollectionPreviewFragmentDoc}`;
export const MyFollowedCollectionsDocument = gql`
    query myFollowedCollections {
  me @connection(key: "myFollowedCollections") {
    ...MyFollowedCollectionsData
  }
}
    ${MyFollowedCollectionsDataFragmentDoc}`;

/**
 * __useMyFollowedCollectionsQuery__
 *
 * To run a query within a React component, call `useMyFollowedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFollowedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFollowedCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyFollowedCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables>(MyFollowedCollectionsDocument, baseOptions);
      }
export function useMyFollowedCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables>(MyFollowedCollectionsDocument, baseOptions);
        }
export type MyFollowedCollectionsQueryHookResult = ReturnType<typeof useMyFollowedCollectionsQuery>;
export type MyFollowedCollectionsLazyQueryHookResult = ReturnType<typeof useMyFollowedCollectionsLazyQuery>;
export type MyFollowedCollectionsQueryResult = ApolloReactCommon.QueryResult<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables>;


export interface MyFollowedCollectionsQueryOperation {
  operationName: 'myFollowedCollections'
  result: MyFollowedCollectionsQuery
  variables: MyFollowedCollectionsQueryVariables
  type: 'query'
}
export const MyFollowedCollectionsQueryName:MyFollowedCollectionsQueryOperation['operationName'] = 'myFollowedCollections'
