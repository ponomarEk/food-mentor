import { Navigate, createHashRouter } from 'react-router-dom';

import { ROUTES } from '../constants';
import { BehavioursPage, ErrorPage, ExercisePage, GoalPage, MeasurementPage } from '../pages';

export const router = createHashRouter([
  {
    path: ROUTES.ROOT,
    element: <Navigate to={ROUTES.GOAL} />,
    errorElement: <ErrorPage />,
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
