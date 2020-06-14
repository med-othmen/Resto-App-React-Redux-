import React from 'react';
import Signin from './Sign-In/signin'
import Signup from './Sign-up/signup'

class Authentification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showsignup: false
        };
    }
    ChangeSignup = () => {
        this.setState({ showsignup: true });
    }

    render() {
        return <div> {this.state.showsignup ? <Signup ChangeSignup={this.ChangeSignup} /> : <Signin ChangeSignup={this.ChangeSignup} />}


        </div>;
    }
}



export default Authentification;