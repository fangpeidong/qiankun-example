import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />
    }
  ],
  {
    basename: window.__POWERED_BY_QIANKUN__ ? '/react18-child' : '/'
  }
);

export default router;
