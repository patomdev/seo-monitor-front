/**
 * The sites state selectors
 */

import { createSelector } from 'reselect';

const selectSites = (state) => state.get('sites');

const makeSelectLoading = () => createSelector(
  selectSites,
  (sitesState) => sitesState.get('loading')
);

const makeSelectError = () => createSelector(
  selectSites,
  (sitesState) => sitesState.get('error')
);

const makeSelectSites = () => createSelector(
  selectSites,
  (sitesState) => sitesState.getIn(['data', 'sites'])
);

export {
  selectSites,
  makeSelectLoading,
  makeSelectError,
  makeSelectSites,
};
