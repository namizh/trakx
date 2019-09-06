
import { call, put } from 'redux-saga/effects';
import { API } from '../../../../api';
import { userData, userError, } from '../actions';
const userOptions = {
    apiVersion: 'barong',
};
export function* userSaga() {
    try {
        // const user = yield call(API.get(userOptions), '/resource/users/me');
        const user = {
            email: 'yyon151121@gmail.com',
            level: 1,
            otp: false,
            role: '1',
            state: 'active',
            uid: '123',
        };
        const payload = {
            user: user,
        };
        yield put(userData(payload));
    }
    catch (error) {
        yield put(userError(error));
    }
}

