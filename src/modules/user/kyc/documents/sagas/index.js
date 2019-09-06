
import { takeEvery } from 'redux-saga/effects';
import { SEND_DOCUMENTS_FETCH, } from '../constants';
import { sendDocumentsSaga } from './sendDocumentsSaga';
export function* rootSendDocumentsSaga() {
    console.log(SEND_DOCUMENTS_FETCH)
    yield takeEvery(SEND_DOCUMENTS_FETCH, sendDocumentsSaga);
}

