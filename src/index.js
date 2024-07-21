import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './reset.css';

import { Home } from './pages/Home/Home';
import { App } from './pages/App/App';
import { Time } from './pages/Time/Time';
import { App as UserApp } from './pages/User/App/App';
import { Home as UserHome } from './pages/User/Home/Home';

import { IncrementProvider } from './context/IncrementContext';
import { PeriodProvider } from './context/PeriodContext';
import { SearchProvider } from './context/SearchContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/app-name',
    element: <App />,
  },
  {
    path: '/time-group',
    element: <Time />,
  },
  {
    path: '/username',
    element: <UserHome />,
  },
  {
    path: '/username/app-name',
    element: <UserApp />,
  },
]);

root.render(
  <StrictMode>
    <SearchProvider>
      <PeriodProvider>
        <IncrementProvider>
          <RouterProvider router={router} />
        </IncrementProvider>
      </PeriodProvider>
    </SearchProvider>
  </StrictMode>
);
