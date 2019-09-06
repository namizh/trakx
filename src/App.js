import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Alerts, ErrorWrapper, Header } from './containers';
import { Layout } from './routes';
class AppLayout extends React.Component {
    constructor(props)
    {
        super(props);
        // user.profile.userData.user
        // profile.userData.isFetching
        // profile.userData.isFetching && profile.userData.user.state
        // this.state = {isLoggedIn:true, user:{
        //     profile:{
        //         userData:{
        //             user:{
        //                 email: "test@163.com", level: 1, otp: true, role: "1", state: "active", uid:1
        //                 }
        //             },
        //             isFetching:false
        //         },
        //         email: "test@163.com", level: 1, otp: true, role: "1", state: "active", uid:1
        //     }
        // };
    }
    render() {
        const { locale, history } = this.props;
        const { lang, messages } = locale;
        return (React.createElement(IntlProvider, { locale: lang, messages: messages, key: lang },
            React.createElement(Router, { history: history },
                React.createElement(ErrorWrapper, null,
                    React.createElement(Header, null),
                    React.createElement(Alerts, null),
                    React.createElement(Layout, null)))));
    }
}
const mapStateToProps = (state) => ({
    locale: state.public.i18n,
});

const App = connect(mapStateToProps, {})(AppLayout);
export { App, };

