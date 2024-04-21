import PropTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import { useAuth } from 'src/provider/AuthProvider';
import DashboardLayout from 'src/layouts/dashboard';

import LoadingFallback from 'src/components/loading/LoadingFallback';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const SitePage = lazy(() => import('src/pages/sites'));
export const SiteDetailPage = lazy(() => import('src/pages/siteDetail')); // Nouvelle page pour les détails du site

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<LoadingFallback />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <PrivateRoute component={<UserPage />} /> },
        { path: 'products', element: <PrivateRoute component={<ProductsPage />} /> },
        { path: 'blog', element: <PrivateRoute component={<BlogPage />} /> },
        { path: 'site', element: <PrivateRoute component={<SitePage />} /> },
        { path: 'site/:id', element: <PrivateRoute component={<SiteDetailPage />} /> }, // Route dynamique pour les détails du site
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}

// Composant de route privée pour protéger les routes nécessitant une connexion
const PrivateRoute = ({ component }) => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return isLoggedIn ? component : <Navigate to="/login" />;
};
PrivateRoute.propTypes = {
  component: PropTypes.any,
};
