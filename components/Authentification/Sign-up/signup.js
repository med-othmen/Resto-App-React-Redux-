import React from 'react';
import './../../css/signup.css'
import { postUserInApi } from '../../../actions/UserACtion'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {
  Link
} from "react-router-dom";
import { connect } from 'react-redux';

class signun extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  verifmail = (e) => {
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (filter.test(e.target.value)) {

      e.target.style.border = "3px solid green";
    }
    else {
      e.target.style.border = "3px solid red";
    }
  }

  verifpswd = (e) => {
    let filter = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;   // at least one number, one lowercase and one uppercase letter
    // at least six characters

    if (filter.test(e.target.value)) {

      e.target.style.border = "3px solid green";
    }
    else {
      e.target.style.border = "3px solid red";
    }
  }

  render() {
    return <div className="loginform">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                      <strong>Sign up</strong>
                    </h3>
                  </div>
                  <div className="grey-text">
                    <MDBInput
                      label="Your first name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) => this.setState({ first_name: e.target.value })}
                    />
                    <MDBInput
                      label="Your last name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) => this.setState({ last_name: e.target.value })}
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <MDBInput
                      label="Confirm your email"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) => this.setState({ emailcomfirmation: e.target.value })}
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      onChange={(e) => this.setState({ password: e.target.value })}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn
                      gradient="blue"
                      onClick={() => {
                        this.props.addUser(
                          {
                            first_name: this.state.first_name,
                            last_name: this.state.last_name,
                            img: this.state.img,
                            email: this.state.email,
                            password: this.state.password,
                            post:"user"
                          }
                        )
                      }}
                    >
                      Register
                  </MDBBtn>
                    <Link to="/signin">
                      <MDBBtn
                       color="success"
                      >
                        Login
                  </MDBBtn></Link>

                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
      ;
  }
}



const mapDispatchToProps = (dispatch) => ({
  addUser: (food) => dispatch(postUserInApi(food))
});

export default connect(null, mapDispatchToProps)(signun);

