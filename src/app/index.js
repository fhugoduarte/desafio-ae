import React from 'react';

import Routes from '../Routes';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import Toast from '../components/UI/Toast';

const app = () => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <Routes />
    <Toast />
  </div>
);

export default app;