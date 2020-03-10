import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import './AppHeader.scss';

const AppHeader = () => (
  <Layout.Header>
    <div className="main-logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="main-logo--menu">
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/post/add">Add Post</Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
);

export default AppHeader;
