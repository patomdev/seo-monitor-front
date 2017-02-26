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
  LOAD_DATA_SUCCESS,
  LOAD_DATA,
  LOAD_DATA_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  data: {
    data: false,
  },
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data', 'data'], false);
    case LOAD_DATA_SUCCESS:
      return state
        .setIn(['data', 'sites'], action.sites)
        .set('loading', false);
    case LOAD_DATA_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default dashboardReducer;
