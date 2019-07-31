
import { Component } from 'react';
import { connectAlita } from 'redux-alita';

class AuthWidget extends Component {
    render() {
        const { auth = {} } = this.props;
        return this.props.children(auth.data || {});
    }
}

export default connectAlita(['auth'])(AuthWidget);