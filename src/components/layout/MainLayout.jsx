import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../common/Footers';
import Headers from '../common/Headers';

const { Content } = Layout;

function MainLayout() {
  return (
    <Layout>
      <Headers />
      <Content className='min-h-[75vh]'>
        <Outlet />
      </Content>
      <Footers />
    </Layout>
  );
}

export default MainLayout;
