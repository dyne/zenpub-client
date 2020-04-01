import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AllCollectionsPageRoute } from 'routes/AllCollectionsPageRoute';
import { AllCommunitiesPageRoute } from 'routes/AllCommunitiesPageRoute';
import { CollectionPageRoute } from 'routes/CollectionPageRoute';
import { CommunityPageRoute } from 'routes/CommunityPageRoute';
import { ConfirmEmailRoute } from 'routes/ConfirmEmailPageRoute';
import { CreateNewPasswordPageRoute } from 'routes/CreateNewPasswordPageRoute';
import { DiscoverPageRoute } from 'routes/DiscoverPageRoute';
import { HomePageRoute } from 'routes/HomePageRoute';
import { LoginPageRoute } from 'routes/LoginPageRoute';
import { ResetPasswordPageRoute } from 'routes/ResetPasswordPageRoute';
import { SearchPageRoute } from 'routes/SearchPageRoute';
import { SettingsPageRoute } from 'routes/SettingsPageRoute';
import { SignupPageRoute } from 'routes/SignupPageRoute';
import { ThreadPageRoute } from 'routes/ThreadPageRoute';
import { UserPageRoute } from 'routes/UserPageRoute';
import NotFound from '../../pages/not-found/NotFound';

export const Router: React.FC = () => {
  return (
    <Switch>
      <Route {...UserPageRoute} />
      <Route {...CommunityPageRoute} />
      <Route {...CollectionPageRoute} />
      <Route {...SettingsPageRoute} />
      <Route {...AllCollectionsPageRoute} />
      <Route {...AllCommunitiesPageRoute} />
      <Route {...ThreadPageRoute} />
      <Route {...DiscoverPageRoute} />
      <Route {...HomePageRoute} />
      <Route {...SearchPageRoute} />
      <Route {...ResetPasswordPageRoute} />
      <Route {...CreateNewPasswordPageRoute} />
      <Route {...LoginPageRoute} />
      <Route {...SignupPageRoute} />
      <Route {...ConfirmEmailRoute} />
      <Route component={NotFound} />
    </Switch>
  );
};
