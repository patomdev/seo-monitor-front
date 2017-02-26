/**
 * The sites state selectors
 */

import { createSelector } from 'reselect';

const selectSites = (state) => state.get('sites');

const makeSelectLoading = () => createSelector(
  selectSites,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectSites,
  (globalState) => globalState.get('error')
);

const makeSelectSites = () => createSelector(
  selectSites,
  (globalState) => globalState.getIn(['data', 'sites'])
);

export {
  selectSites,
  makeSelectLoading,
  makeSelectError,
  makeSelectSites,
};
