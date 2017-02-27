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
  NEW_MESSAGE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  messages: false,
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_MESSAGE:
      return state
        .set('messages', action.message);
    default:
      return state;
  }
}

export default dashboardReducer;
