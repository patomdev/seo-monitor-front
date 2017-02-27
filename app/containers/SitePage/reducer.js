/*
 * SiteReducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_SITE,
  LOAD_SITE_SUCCESS,
  LOAD_SITE_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: false,
});

function siteReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SITE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', false);
    case LOAD_SITE_SUCCESS:
      return state
        .set('data', action.site)
        .set('loading', false);
    case LOAD_SITE_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default siteReducer;
