/**
 * Gets the sites from API
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_DATA } from './constants';
import { dataLoaded, dataLoadingError } from './actions';

export function* getData() {
  const requestURL = 'https://api.github.com/users/';
  try {
    const sites = yield call(request, requestURL);
    yield put(dataLoaded(sites));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

export function* watchData() {
  const watcher = yield takeLatest(LOAD_DATA, getData);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [watchData];
