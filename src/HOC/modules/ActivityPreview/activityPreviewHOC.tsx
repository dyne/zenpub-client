import { useFormik } from 'formik';
import * as GQL from 'graphql/types.generated';
import React, { SFC, useMemo } from 'react';
import * as UI from 'ui/modules/ActivityPreview';
import * as UIA from 'ui/modules/ActivityPreview/Actions';
import * as UIP from 'ui/modules/ActivityPreview/preview';
import * as UIT from 'ui/modules/ActivityPreview/types';
import * as APGQL from './getActivityPreview.generated';

export interface Props {
  activityId: GQL.Activity['id'];
}
export const ActivityPreviewHOC: SFC<Props> = ({ activityId }) => {
  const activityQ = APGQL.useGetActivityPreviewQuery({
    variables: { activityId }
  });
  const [likeMut, likeMutStatus] = APGQL.useActivityPreviewLikeMutation();
  const [unlikeMut, unlikeMutStatus] = APGQL.useActivityPreviewUnlikeMutation();
  const [
    createThreadMut,
    createThreadMutStatus
  ] = APGQL.useActivityPreviewCreateThreadMutation();
  const [
    createReplyMut,
    createReplyMutStatus
  ] = APGQL.useActivityPreviewCreateReplyMutation();

  const activity = activityQ.data && activityQ.data.activity;
  const replyFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) => {
      if (
        !activity ||
        'Like' === activity.context.__typename ||
        'Flag' === activity.context.__typename ||
        'Follow' === activity.context.__typename ||
        createReplyMutStatus.loading ||
        createThreadMutStatus.loading
      ) {
        return;
      } else if (activity.context.__typename === 'Comment') {
        const { thread, id } = activity.context;
        return createReplyMut({
          variables: {
            threadId: thread.id,
            inReplyToId: id,
            comment: { content: replyMessage }
          }
        });
      } else {
        return createThreadMut({
          variables: {
            contextId: activity.context.id,
            comment: { content: replyMessage }
          }
        });
      }
    }
  });
  const toggleLikeFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: () => {
      if (
        !activity ||
        'Community' === activity.context.__typename ||
        'Like' === activity.context.__typename ||
        'Flag' === activity.context.__typename ||
        'Follow' === activity.context.__typename ||
        likeMutStatus.loading ||
        unlikeMutStatus.loading
      ) {
        return;
      } else {
        const { myLike } = activity.context;
        if (myLike) {
          return unlikeMut({ variables: { contextId: myLike.id } });
        } else {
          return likeMut({ variables: { contextId: activity.context.id } });
        }
      }
    }
  });

  const props = useMemo<UI.Props>(
    () => {
      if (!activity) {
        return {
          status: UI.Status.Loading
        };
      } else {
        const user = activity.user;
        const _baseProps: Pick<
          UI.ActivityLoaded,
          'status' | 'actor' | 'createdAt'
        > = {
          status: UI.Status.Loaded,
          createdAt: activity.createdAt,
          actor: getActor(user)
        };
        const [context, gqlContext] = getContext(activity);
        const actions = getActions(gqlContext, replyFormik, toggleLikeFormik);
        const inReplyToCtx = getInReplyToCtx(activity);
        const props: UI.ActivityLoaded = {
          ..._baseProps,
          context,
          actions,
          inReplyToCtx
        };
        return props;
      }
    },
    [activity]
  );
  return <UI.ActivityPreview {...props} />;
};

const getInReplyToCtx = ({
  context
}: APGQL.ActivityPreviewDataFragment): null | UIP.InReplyToContext => {
  if (context.__typename !== 'Comment') {
    return null;
  } else if (context.inReplyTo) {
    const actor = getActor(context.inReplyTo.creator);
    return {
      actor: getActor(context.inReplyTo.creator),
      link: getSimpleLink(context.inReplyTo.thread),
      desc: context.inReplyTo.content,
      icon: actor.icon
    };
  } else if (context.thread.context.__typename === 'Flag') {
    const type =
      context.thread.context.context.__typename === 'Collection'
        ? UIP.ContextType.Collection
        : context.thread.context.context.__typename === 'Community'
          ? UIP.ContextType.Community
          : context.thread.context.context.__typename === 'Resource'
            ? UIP.ContextType.Resource
            : context.thread.context.context.__typename === 'Comment'
              ? UIP.ContextType.Comment
              : context.thread.context.context.__typename === 'User'
                ? UIP.ContextType.User
                : null;
    if (!type) {
      console.error(context);
      throw new Error(`Type Error: can't extract thread.flag.context type`);
    }

    return {
      actor:
        context.thread.context.context.__typename === 'User'
          ? null
          : getActor(context.thread.context.context.creator),
      link: getSimpleLink(
        context.thread.context.context.__typename === 'User'
          ? {
              ...context.thread.context.context,
              id: context.thread.context.context.userId
            }
          : context.thread.context.context.__typename === 'Resource'
            ? context.thread.context.context.collection
            : context.thread.context.context.__typename === 'Comment'
              ? context.thread.context.context.thread
              : context.thread.context.context
      ),
      icon:
        context.thread.context.context.__typename === 'Collection' ||
        context.thread.context.context.__typename === 'Community' ||
        context.thread.context.context.__typename === 'Resource' ||
        context.thread.context.context.__typename === 'User'
          ? context.thread.context.context.icon || ''
          : context.thread.context.context.creator.icon ||
            context.thread.context.context.creator.image ||
            '',
      desc:
        context.thread.context.context.__typename === 'Collection' ||
        context.thread.context.context.__typename === 'Community' ||
        context.thread.context.context.__typename === 'Resource'
          ? context.thread.context.context.name
          : context.thread.context.context.__typename === 'User'
            ? context.thread.context.context.userName ||
              context.thread.context.context.preferredUsername
            : context.thread.context.context.content
    };
  } else {
    const type =
      context.thread.context.__typename === 'Collection'
        ? UIP.ContextType.Collection
        : context.thread.context.__typename === 'Community'
          ? UIP.ContextType.Community
          : context.thread.context.__typename === 'Resource'
            ? UIP.ContextType.Resource
            : null; // context.thread.context: never
    if (!type) {
      console.error(context);
      throw new Error(`Type Error: can't extract thread.context type`);
    }
    return {
      actor: getActor(context.thread.context.creator),
      link: getSimpleLink(
        context.thread.context.__typename === 'Resource'
          ? context.thread.context.collection
          : context.thread.context
      ),
      desc: context.thread.context.name,
      icon: context.thread.context.icon || ''
    };
  }
};

const getActions = (
  context: GQLConcreteContext,
  replyFormik: UIA.ReplyActions['replyFormik'],
  toggleLikeFormik: UIA.LikeActions['toggleLikeFormik']
): null | UIA.ActionProps => {
  const like: null | UIA.LikeActions =
    'Community' !== context.__typename && 'myLike' in context
      ? {
          toggleLikeFormik,
          iLikeIt: !!context.myLike,
          totalLikes: 'likes' in context ? context.likes.totalCount : null
        }
      : null;

  const reply: null | UIA.ReplyActions = {
    replyFormik
  };

  return {
    like,
    reply
  };
};

type GQLConcreteContext =
  | APGQL.ActivityPreviewCommentCtxBaseFragment
  | APGQL.ActivityPreviewResourceCtxFragment
  | APGQL.ActivityPreviewCollectionCtxFragment
  | APGQL.ActivityPreviewCommunityCtxFragment
  | APGQL.ActivityPreviewBaseUserFragment;

type VerbMapKey = keyof typeof verbMap;
const verbMap = {
  Create: UIP.ContextVerb.Created,
  Update: UIP.ContextVerb.Updated,
  Flag: UIP.ContextVerb.Flag,
  Follow: UIP.ContextVerb.Follow,
  Like: UIP.ContextVerb.Like
};
const getContext = (
  activity: APGQL.ActivityPreviewDataFragment
): [UIP.Context, GQLConcreteContext] => {
  const verbType: null | VerbMapKey =
    activity.context.__typename === 'Flag' ||
    activity.context.__typename === 'Like' ||
    activity.context.__typename === 'Follow'
      ? activity.context.__typename
      : activity.verb === GQL.ActivityVerb.Created
        ? 'Create'
        : activity.verb === GQL.ActivityVerb.Updated
          ? 'Update'
          : null; // activity.verb: never
  if (!verbType) {
    console.error(activity);
    throw new Error(`Type Error: can't extract activity verbType`);
  }

  const gqlContext: null | GQLConcreteContext =
    activity.context.__typename === 'Collection' ||
    activity.context.__typename === 'Community' ||
    activity.context.__typename === 'Comment' ||
    activity.context.__typename === 'Resource'
      ? activity.context // simple direct concrete object ctx
      : activity.context.__typename === 'Flag' ||
        activity.context.__typename === 'Follow' ||
        activity.context.__typename === 'Like'
        ? activity.context.context.__typename === 'Thread' // if VERB'ed ona a thread we should go deeper
          ? activity.context.context.context.__typename === 'Flag' // if it's thread about a flag go deeper
            ? activity.context.context.context.context // simple thread's flag's concrete object ctx
            : activity.context.context.context // if not VERB'ed ona a thread use that context
          : activity.context.context
        : null; // activity.context: never
  if (!gqlContext) {
    console.error(activity);
    throw new Error(`Type Error: can't extract activity context`);
  }
  const context: null | UIP.Context =
    gqlContext.__typename === 'Collection'
      ? {
          verb: verbMap[verbType],
          link: getSimpleLink(gqlContext),
          type: UIP.ContextType.Collection,
          icon: gqlContext.icon || '',
          title: gqlContext.name
        }
      : gqlContext.__typename === 'Comment'
        ? {
            verb: verbMap[verbType],
            link: getSimpleLink(gqlContext.thread),
            type: UIP.ContextType.Comment,
            content: gqlContext.content
          }
        : gqlContext.__typename === 'Community'
          ? {
              verb: verbMap[verbType],
              link: getSimpleLink(gqlContext),
              type: UIP.ContextType.Community,
              icon: gqlContext.icon || '',
              title: gqlContext.name
            }
          : gqlContext.__typename === 'Resource'
            ? {
                verb: verbMap[verbType],
                link: getSimpleLink(gqlContext.collection),
                type: UIP.ContextType.Resource,
                icon: gqlContext.icon || '',
                title: gqlContext.name
              }
            : gqlContext.__typename === 'User'
              ? {
                  verb: verbMap[verbType],
                  link: getSimpleLink({ ...gqlContext, id: gqlContext.userId }),
                  type: UIP.ContextType.Resource,
                  icon: gqlContext.icon || gqlContext.image || '',
                  title: gqlContext.userName || gqlContext.preferredUsername
                }
              : null; // gqlContext: never
  if (!context) {
    console.error(context);
    throw new Error(`Type Error: unexpected error in providing context`);
  }
  return [context, gqlContext];
};

const getActor = (usr: APGQL.ActivityPreviewBaseUserFragment): UIT.Actor => {
  return {
    icon: usr.icon || usr.image || '',
    name: usr.userName || usr.preferredUsername,
    preferredUsername: usr.preferredUsername,
    link: getSimpleLink({ ...usr, id: usr.userId })
  };
};

const linkPathMap = {
  User: 'user',
  Community: 'communities',
  // Resource: 'resource',
  Thread: 'thread',
  Collection: 'collections'
};

const getSimpleLink = ({
  __typename,
  // isLocal,
  id
}: // canonicalUrl
{
  __typename: keyof typeof linkPathMap;
  // isLocal: boolean;
  id: string;
  // canonicalUrl?: string | null | undefined;
}) => `/${linkPathMap[__typename]}/${id}`;