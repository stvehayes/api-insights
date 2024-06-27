import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './reset.css';
import { Home } from './pages/Home/Home';
import { App } from './pages/App/App';
import { Time } from './pages/Time/Time';
import { IncrementProvider } from './context/IncrementContext';
import { PeriodProvider } from './context/PeriodContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/token-name',
    element: <App />,
  },
  {
    path: '/time-group',
    element: <Time />,
  },
]);

root.render(
  <StrictMode>
    <PeriodProvider>
      <IncrementProvider>
        <RouterProvider router={router} />
      </IncrementProvider>
    </PeriodProvider>
  </StrictMode>
);
