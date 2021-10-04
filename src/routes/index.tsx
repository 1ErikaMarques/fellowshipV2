import { useAuth } from '../hooks/AuthContext';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </>
  )
}