
import { call, put } from 'redux-saga/effects';
import { API } from '../../../../api';
import { alertPush } from '../../../public/alert';
import { userData } from '../../profile';
import { signInError, signInRequire2FA, signUpRequireVerification } from '../actions';
const sessionsConfig = {
    apiVersion: 'barong',
};
export function* signInSaga(action) {
    const user = {
        email: 'yyon151121@gmail.com',
        level: 1,
        otp: false,
        role: '1',
        state: 'active',
        uid: '123',
    };
    try {
        // const user = yield call(API.post(sessionsConfig), '/identity/sessions', action.payload);
        yield put(userData({ user }));
        yield put(signInRequire2FA({ require2fa: user.otp }));
    }
    catch (error) {
        switch (error.code) {
            case 401:
                if (error.message.indexOf('identity.session.not_active') > -1) {
                    yield put(signUpRequireVerification({ requireVerification: true }));
                }
                yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
                break;
            case 403:
                if (error.message.indexOf('identity.session.invalid_otp') > -1) {
                    yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
                }
                yield put(signInRequire2FA({ require2fa: true }));
                break;
            default:
                yield put(signInError(error));
                yield put(alertPush({ message: error.message, code: error.code, type: 'error' }));
        }
    }
}

