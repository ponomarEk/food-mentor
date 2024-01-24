import { Navigate, createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '../constants';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Navigate to={ROUTES.GOAL} />,
    errorElement: <>Error</>,
  },
  {
    path: ROUTES.GOAL,
    element: <>Goal</>,
  },
  {
    path: ROUTES.MEASUREMENT,
    element: <>Measurement</>,
  },
  {
    path: ROUTES.BEHAVIOURS,
    element: <>Behaviours</>,
  },
  {
    path: ROUTES.EXERCISE,
    element: <>Exercise</>,
  },
]);
