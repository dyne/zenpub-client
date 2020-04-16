import * as Types from './types.generated';

import { BasicCollectionFragment } from './fragments/basicCollection.generated';
import { ActivityPreviewFragment } from '../HOC/modules/previews/activity/ActivityPreview.generated';
import { BasicCommunityFragment } from './fragments/basicCommunity.generated';
import { BasicUserFragment } from './fragments/basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './fragments/basicUser.generated';
import { BasicCommunityFragmentDoc } from './fragments/basicCommunity.generated';
import { ActivityPreviewFragmentDoc } from '../HOC/modules/previews/activity/ActivityPreview.generated';
import { BasicCollectionFragmentDoc } from './fragments/basicCollection.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';





export type GetUserQueryVariables = {
  limitComm?: Types.Maybe<Types.Scalars['Int']>,
  endComm?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  limitColl?: Types.Maybe<Types.Scalars['Int']>,
  endColl?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  limitTimeline?: Types.Maybe<Types.Scalars['Int']>,
  endTimeline?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>
};


export type GetUserQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & { user: (
      { __typename: 'User' }
      & { followedCommunities: Types.Maybe<(
        { __typename: 'FollowedCommunitiesPage' }
        & { pageInfo: (
          { __typename: 'PageInfo' }
          & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
        ), edges: Array<(
          { __typename: 'FollowedCommunity' }
          & { follow: (
            { __typename: 'Follow' }
            & Pick<Types.Follow, 'id' | 'canonicalUrl'>
          ), community: (
            { __typename: 'Community' }
            & BasicCommunityFragment
          ) }
        )> }
      )>, outbox: Types.Maybe<(
        { __typename: 'ActivitiesPage' }
        & { pageInfo: (
          { __typename: 'PageInfo' }
          & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
        ), edges: Array<(
          { __typename: 'Activity' }
          & ActivityPreviewFragment
        )> }
      )>, followedCollections: Types.Maybe<(
        { __typename: 'FollowedCollectionsPage' }
        & { pageInfo: (
          { __typename: 'PageInfo' }
          & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
        ), edges: Array<(
          { __typename: 'FollowedCollection' }
          & { follow: (
            { __typename: 'Follow' }
            & Pick<Types.Follow, 'id' | 'canonicalUrl'>
          ), collection: (
            { __typename: 'Collection' }
            & BasicCollectionFragment
          ) }
        )> }
      )> }
      & BasicUserFragment
    ) }
  )> }
);


export const GetUserDocument = gql`
    query getUser($limitComm: Int, $endComm: [Cursor], $limitColl: Int, $endColl: [Cursor], $limitTimeline: Int, $endTimeline: [Cursor]) {
  me {
    user {
      ...BasicUser
      followedCommunities(limit: $limitComm, after: $endComm) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          follow {
            id
            canonicalUrl
          }
          community {
            __typename
            ... on Community {
              ...BasicCommunity
            }
          }
        }
      }
      outbox(limit: $limitTimeline, after: $endTimeline) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          ...ActivityPreview
        }
      }
      followedCollections(limit: $limitColl, after: $endColl) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          follow {
            id
            canonicalUrl
          }
          collection {
            __typename
            ... on Collection {
              ...BasicCollection
            }
          }
        }
      }
    }
  }
}
    ${BasicUserFragmentDoc}
${BasicCommunityFragmentDoc}
${ActivityPreviewFragmentDoc}
${BasicCollectionFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      limitComm: // value for 'limitComm'
 *      endComm: // value for 'endComm'
 *      limitColl: // value for 'limitColl'
 *      endColl: // value for 'endColl'
 *      limitTimeline: // value for 'limitTimeline'
 *      endTimeline: // value for 'endTimeline'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;


export interface GetUserQueryOperation {
  operationName: 'getUser'
  result: GetUserQuery
  variables: GetUserQueryVariables
  type: 'query'
}
export const GetUserQueryName:GetUserQueryOperation['operationName'] = 'getUser'
