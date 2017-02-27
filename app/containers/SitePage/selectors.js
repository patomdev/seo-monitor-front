/**
 * The site state selectors
 */

import { createSelector } from 'reselect';

const selectSite = (state) => state.get('site');

const makeSelectLoading = () => createSelector(
  selectSite,
  (siteState) => siteState.get('loading')
);

const makeSelectError = () => createSelector(
  selectSite,
  (siteState) => siteState.get('error')
);

const makeSelectSite = () => createSelector(
  selectSite,
  (siteState) => siteState.get('data')
);


export {
  selectSite,
  makeSelectLoading,
  makeSelectError,
  makeSelectSite,
};
