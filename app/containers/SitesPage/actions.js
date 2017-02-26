import {
  LOAD_SITES,
  LOAD_SITES_SUCCESS,
  LOAD_SITES_ERROR,
} from './constants';

/**
 * Load the sites, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_SITES
 */
export function loadSites() {
  return {
    type: LOAD_SITES,
  };
}

/**
 * Dispatched when the sites are loaded by the request saga
 *
 * @param  {array} sites The repository data
 *
 * @return {object} An action object with a type of LOAD_SITES_SUCCESS passing the repos
 */
export function sitesLoaded(sites) {
  return {
    type: LOAD_SITES_SUCCESS,
    sites,
  };
}

/**
 * Dispatched when loading the sites fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_SITES_ERROR passing the error
 */
export function sitesLoadingError(error) {
  return {
    type: LOAD_SITES_ERROR,
    error,
  };
}
