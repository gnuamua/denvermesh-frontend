/**
 * Routes.
 * @module routes
 */

import { App } from '@plone/volto/components';
import { defaultRoutes } from '@plone/volto/routes';
import config from '@plone/volto/registry';
import { PasswordReset, RequestPasswordReset } from '@plone/volto/components';
import { SubscriptionFormView } from './components';

/**
 * Routes array.
 * @array
 * @returns {array} Routes.
 */
const routes = [
  {
    path: '/',
    component: App, // Change this if you want a different component
    routes: [
      // Add your routes here
      { path: '/passwordreset/:token', component: PasswordReset, exact: true },
      {
        path: '/passwordreset',
        component: RequestPasswordReset,
        exact: true,
      },
      ...(config.addonRoutes || []),
      ...defaultRoutes,
    ],
  },
];

export default routes;
