import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button, Layout } from 'antd';
import { INSTAGRAM_AUTH_URL } from '../conf';

const Routes = () => (
  <Layout.Content className="main-content">
    <Switch>
      <Route exact path="/">
        <Button type="primary" size="large" href={INSTAGRAM_AUTH_URL}>
          Authorize Instagram
        </Button>
      </Route>
      <Route path="/profile">Profile</Route>
      <Route path="/post/add">Add Post</Route>
    </Switch>
  </Layout.Content>
);

export default Routes;
