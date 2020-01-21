import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { useFormik } from 'formik';
import React from 'react';
import { ActivityPreview, Props, Status } from '.';
import { ContextType, ContextVerb } from './preview';

const getActions = () => ({
  like: {
    totalLikes: 3,
    toggleLikeFormik: useFormik<{}>({
      initialValues: {},
      onSubmit: vals => {
        action('submitting...')();
        return new Promise(resolve =>
          setTimeout(() => {
            action('submitted...')();
            resolve();
          }, 2000)
        );
      }
    }),
    iLikeIt: true
  },
  reply: {
    replyFormik: useFormik<{ replyMessage: string }>({
      initialValues: { replyMessage: '' },
      onSubmit: vals => {
        action(`submitting: ${vals.replyMessage}`)();
        return new Promise(resolve =>
          setTimeout(() => {
            action(`submitted: ${vals.replyMessage}`)();
            resolve();
          }, 2000)
        );
      }
    })
  }
});
const getActor = () => ({
  icon: 'https://picsum.photos/80/80',
  link: '1',
  name: 'Ivan',
  preferredUsername: 'tata'
});
storiesOf('Modules/ActivityPreview', module)
  .add('Comment', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '29-01-2020',
      context: {
        link: 'https://picsum.photos/80/80',
        content:
          "my niece is completely mystified by my computer in that:- she thought the monitor was the computer - i had to explain how dual monitors work - wow, you can charge your phone from it? she's like 12 and i feel old now",
        type: ContextType.Comment,
        verb: ContextVerb.Created
      }
    };
    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Follow', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '29-01-2020',
      context: {
        link: 'https://picsum.photos/80/80',
        type: ContextType.Community,
        verb: ContextVerb.Follow,
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti'
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Like', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '29-01-2020',
      context: {
        link: 'https://picsum.photos/80/80',
        type: ContextType.Community,
        verb: ContextVerb.Like,
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti'
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Flag', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '29-01-2020',
      context: {
        link: 'https://picsum.photos/80/80',
        type: ContextType.Resource,
        verb: ContextVerb.Flag,
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti'
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Create a community', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '29-01-2020',
      context: {
        link: 'https://picsum.photos/80/80',
        type: ContextType.Community,
        verb: ContextVerb.Created,
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti'
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Create a collection', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '29-01-2020',
      context: {
        link: 'https://picsum.photos/80/80',
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        type: ContextType.Collection,
        verb: ContextVerb.Created
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Update a resource', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '29-01-2020',
      context: {
        link: 'https://picsum.photos/80/80',
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        type: ContextType.Resource,
        verb: ContextVerb.Updated
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Updated a collection', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '29-01-2020',
      context: {
        link: 'https://picsum.photos/80/80',
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        type: ContextType.Collection,
        verb: ContextVerb.Updated
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Updated a community', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '29-01-2020',
      context: {
        link: 'https://picsum.photos/80/80',
        icon: 'https://picsum.photos/80/80',
        title: 'Liceo Alberghiero Celletti',
        type: ContextType.Community,
        verb: ContextVerb.Updated
      }
    };

    return <ActivityPreview {...activityPreviewProps} />;
  })
  .add('Reply to a message', () => {
    const activityPreviewProps: Props = {
      status: Status.Loaded,
      actor: getActor(),
      actions: getActions(),
      createdAt: '29-01-2020',
      context: {
        link: 'https://picsum.photos/80/80',
        verb: ContextVerb.Created,
        type: ContextType.Comment,
        content: 'a message'
      } /* ,
      inReplyToCtx: {
        link: 'https://picsum.photos/80/80',
        actor: getActor()
      } */
    };

    return <ActivityPreview {...activityPreviewProps} />;
  });