import { ProductPage, ServiceDetailPage, ServicePage } from '@/pages';
import { path } from './path';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: path.HOME,
    element: <div>Home page goes here</div>
  },
  {
    path: path.CHAT,
    element: <div>Chat page goes here</div>
  },
  {
    path: path.DONATIONS,
    element: <div>Donation page goes here</div>
  },
  {
    path: path.SHOP,
    element: <div>Shop page goes here</div>
  },
  {
    path: path.EVENTS,
    element: <div>Events page goes here</div>
  },
  {
    path: path.PRODUCT,
    element: <ProductPage />
  },
  {
    path: path.SERVICES,
    element: <ServicePage />
  },
  {
    path: path.SERVICES_DETAIL,
    element: <ServiceDetailPage />
  }
]);
