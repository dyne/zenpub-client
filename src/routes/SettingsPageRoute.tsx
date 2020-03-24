import { SettingsPage, SettingsPageTab } from 'HOC/pages/settings/SettingsPage';
import { RedirectToLoginIfNotLoggedIn } from 'HOC/wrappers/RedirectToLoginIfNotLoggedIn';
import NotFound from 'pages/not-found/NotFound';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithoutSidebarTemplate } from 'HOC/templates/WithoutSidebar/WithoutSidebar';

interface SettingsPageRouter {
  tab?: string;
}
const SettingsPageRouter: FC<RouteComponentProps<SettingsPageRouter>> = ({
  match
}) => {
  const maybeTabStr = match.params.tab;
  const tab =
    maybeTabStr === 'preferences'
      ? SettingsPageTab.Preferences
      : maybeTabStr === 'invites'
      ? SettingsPageTab.Invites
      : maybeTabStr === 'instance'
      ? SettingsPageTab.Instance
      : maybeTabStr === 'flags'
      ? SettingsPageTab.Flags
      : !maybeTabStr
      ? SettingsPageTab.General
      : null;
  if (tab === null) {
    return <NotFound />;
  }

  const props: SettingsPage = {
    tab,
    basePath: `/settings`
  };

  return (
    <RedirectToLoginIfNotLoggedIn>
      <WithoutSidebarTemplate>
        <SettingsPage {...props} />
      </WithoutSidebarTemplate>
    </RedirectToLoginIfNotLoggedIn>
  );
};

export const SettingsPageRoute: RouteProps = {
  exact: true,
  path: '/settings/:tab?',
  component: SettingsPageRouter
};
