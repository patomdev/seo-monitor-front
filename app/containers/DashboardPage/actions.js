import {
  LOAD_MESSAGES,
  NEW_MESSAGE,
} from './constants';

/**
 * Load the data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_MESSAGES
 */
export function loadMessages() {
  return {
    type: LOAD_MESSAGES,
  };
}

/**
 * Dispatched when new message is received
 *
 * @param  {object} message The new message
 *
 * @return {object} An action object with a type of NEW_MESSAGE passing the repos
 */
export function newMessage(message) {
  return {
    type: NEW_MESSAGE,
    message,
  };
}
