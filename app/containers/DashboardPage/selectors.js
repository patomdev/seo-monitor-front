/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectDashboard = (state) => state.get('dashboard');

const makeSelectLoading = () => createSelector(
  selectDashboard,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectDashboard,
  (globalState) => globalState.get('error')
);

const makeSelectSites = () => createSelector(
  selectDashboard,
  (globalState) => globalState.getIn(['data', 'sites'])
);

export {
  selectDashboard,
  makeSelectLoading,
  makeSelectError,
  makeSelectSites,
};
