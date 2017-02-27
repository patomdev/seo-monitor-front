/**
 * Gets the site from API
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_SITE } from './constants';
import { siteLoaded, siteLoadingError } from './actions';

export function* getSite(action) {
  const requestURL = `/sites/${action.id}`;
  try {
    const sites = yield call(request, requestURL);
    yield put(siteLoaded(sites));
  } catch (err) {
    yield put(siteLoadingError(err));
  }
}

export function* watchData() {
  const watcher = yield takeLatest(LOAD_SITE, getSite);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [watchData];
