import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
} from "mdbreact";
import { connect } from "react-redux";
import { getUsersFromApi } from "../../actions/UserACtion";
import { getSessionsFromApi } from "../../actions/sessionAction";
import { Button, Image } from "semantic-ui-react";

class ModalPage extends Component {
  state = {
    userID: "",
  };
  componentDidMount() {
    this.props.getAllallusers();
    this.props.getAllallsessions();
  }

  deconnect = () => {
    window.location.pathname = "/signin";
  };

  render() {
    const x = this.props.sessions.length;
    const session = this.props.sessions.slice(x - 1);

    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time);

    return (
      <MDBContainer>
        <MDBModal
          className="float-right"
          isOpen={this.props.modalUser}
          toggle={this.props.toggleUser}
          side
          position="top-right"
        >
          <MDBModalBody>
            {session.map((item) =>
              this.props.users
                .filter((el) => el.id === item.userID)
                .map((el) => (
                  <div className="d-flex ">
                    <Image src={el.img} size="small" />

                    <div>
                      <h3>
                        {el.first_name} <span>{el.last_name} </span>{" "}
                      </h3>

                      <p>{el.email} </p>
                      <p>
                        Votre mot passe <strong>{el.password}</strong>
                      </p>
                      <p>
                        Derniére connexion<strong>{item.time}</strong>
                      </p>
                    </div>
                  </div>
                ))
            )}
          </MDBModalBody>
          <MDBModalFooter>
            <Button
              basic
              color="black"
              content="Fermer"
              onClick={this.props.toggleUser}
            />
            <Button
              basic
              color="red"
              content="Se déconnecter"
              onClick={() => this.deconnect()}
            />
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  sessions: state.sessions,
});

const mapDispatchToProps = (dispatch) => ({
  getAllallusers: () => dispatch(getUsersFromApi()),
  getAllallsessions: () => dispatch(getSessionsFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);
