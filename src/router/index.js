import { Navigate, createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '../constants';
import { BehavioursPage, ExercisePage, GoalPage, MeasurementPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Navigate to={ROUTES.GOAL} />,
    errorElement: <>Error</>,
  },
  {
    path: ROUTES.GOAL,
    element: <GoalPage />,
  },
  {
    path: ROUTES.MEASUREMENT,
    element: <MeasurementPage />,
  },
  {
    path: ROUTES.BEHAVIOURS,
    element: <BehavioursPage />,
  },
  {
    path: ROUTES.EXERCISE,
    element: <ExercisePage />,
  },
]);
