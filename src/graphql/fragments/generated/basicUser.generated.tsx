import * as Types from '../../types.generated.d';

import gql from 'graphql-tag';

export type BasicUserFragment = (
  { __typename?: 'User' }
  & Pick<Types.User, 'id' | 'canonicalUrl' | 'preferredUsername' | 'name' | 'icon' | 'location' | 'summary' | 'image' | 'isLocal' | 'createdAt' | 'updatedAt' | 'lastActivity'>
  & { myFollow: Types.Maybe<(
    { __typename?: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )>, myLike: Types.Maybe<(
    { __typename?: 'Like' }
    & Pick<Types.Like, 'id'>
  )> }
);

export const BasicUserFragmentDoc = gql`
    fragment BasicUser on User {
  id
  canonicalUrl
  preferredUsername
  name
  icon
  location
  summary
  image
  isLocal
  createdAt
  updatedAt
  lastActivity
  myFollow {
    id
  }
  myLike {
    id
  }
}
    `;
