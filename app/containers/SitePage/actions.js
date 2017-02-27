import {
  LOAD_SITE,
  LOAD_SITE_SUCCESS,
  LOAD_SITE_ERROR,
} from './constants';

/**
 * Load the site, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_SITE
 */
export function loadSite(id) {
  return {
    type: LOAD_SITE,
    id,
  };
}

/**
 * Dispatched when the site is loaded by the request saga
 *
 * @param  {array} site The repository data
 *
 * @return {object} An action object with a type of LOAD_SITE_SUCCESS passing the repos
 */
export function siteLoaded(site) {
  return {
    type: LOAD_SITE_SUCCESS,
    site,
  };
}

/**
 * Dispatched when loading the site fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_SITE_ERROR passing the error
 */
export function siteLoadingError(error) {
  return {
    type: LOAD_SITE_ERROR,
    error,
  };
}
