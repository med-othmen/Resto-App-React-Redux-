import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import '../../css/signin.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getUsersFromApi, } from '../../../actions/UserACtion'
class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: 'user'
    };
  }

  verifmail = (e) => {
    this.setState({ email: e.target.value })
  }

  verifpswd = (e) => {
    this.setState({ password: e.target.value })
  }

  login = () => {
    const user = this.props.users.filter(el => (((el.email === this.state.email) && (el.password === this.state.password))))
    if (user.length === 0) alert('Utilisateur nexiste pas')
    user.map(el => el.post === "root" ? window.location.pathname = '/Admin' : (el.post === 'user' ? window.location.pathname = '/User' : alert('comte nexiste pas')))

  }
  componentDidMount = () => {
    this.props.getAllUsers()
  }

  render() {

    return <div className="loginform">
      <MDBContainer className="float-right">
        <MDBRow>

          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-2">
                    <strong>Sign in</strong>
                  </h3>
                </div>
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.verifmail}
                />
                <MDBInput
                  label="Your password"
                  group
                  icon="lock"
                  type="password"
                  validate
                  containerClass="mb-0"
                  onChange={this.verifpswd}
                />
                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  Forgot
                  <a href="#!" className="blue-text ml-1">

                    Password?
                  </a>
                </p>
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    color="success"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={() => this.login()}
                  >
                    Sign in
                  </MDBBtn>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                  or Sign in with:
                </p>
                <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                  >
                    <MDBIcon fab icon="twitter" className="blue-text" />
                  </MDBBtn>
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="z-depth-1a"
                  >
                    <MDBIcon fab icon="google-plus-g" className="blue-text" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <Link to="/signup"><MDBBtn
                    type="button"
                    gradient="blue"

                  >
                    Sign in
                  </MDBBtn></Link>


                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </div>
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
})

const mapDispatchToProps = (dispatch) => ({

  getAllUsers: () => dispatch(getUsersFromApi())

});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);