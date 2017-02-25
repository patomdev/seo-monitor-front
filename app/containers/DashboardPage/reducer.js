/*
 * DashboardReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_SITES_SUCCESS,
  LOAD_SITES,
  LOAD_SITES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  data: {
    sites: false,
  },
});

function dashboardReducer(state = initialState, action) {
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

export default dashboardReducer;
