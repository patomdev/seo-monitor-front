/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectDashboard = (state) => state.get('dashboard');

const makeSelectMessages = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('messages')
);

export {
  selectDashboard,
  makeSelectMessages,
};
