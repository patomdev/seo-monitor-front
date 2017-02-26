/*
 * SitesReducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_SITES,
  LOAD_SITES_SUCCESS,
  LOAD_SITES_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: {
    sites: false,
  },
});

function sitesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SITES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'sites'], false);
    case LOAD_SITES_SUCCESS:
      return state
        .setIn(['data', 'sites'], action.sites)
        .set('loading', false);
    case LOAD_SITES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default sitesReducer;
