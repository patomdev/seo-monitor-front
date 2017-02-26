/**
 * Gets the sites from API
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_SITES } from './constants';
import { sitesLoaded, sitesLoadingError } from './actions';

export function* getSites() {
  const requestURL = '/sites';
  try {
    const sites = yield call(request, requestURL);
    yield put(sitesLoaded(sites));
  } catch (err) {
    yield put(sitesLoadingError(err));
  }
}

export function* watchData() {
  const watcher = yield takeLatest(LOAD_SITES, getSites);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [watchData];
