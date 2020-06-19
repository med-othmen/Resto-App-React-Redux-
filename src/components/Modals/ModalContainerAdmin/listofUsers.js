import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { connect } from "react-redux";
import { getUsersFromApi, DeleteUserAPI } from "../../../actions/UserACtion";
import { Button } from "semantic-ui-react";
import "../../css/modals.css";

class ModalPage extends Component {
  componentDidMount() {
    this.props.getAllallusers();
  }
  render() {
    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.props.ModalListofUsers}
          toggle={this.props.toggleListofUser}
          fullHeight
          position="top"
        >
          <MDBModalHeader toggle={this.toggleListofUser}>
            Liste des utilisateurs
          </MDBModalHeader>
          <MDBModalBody>
            <table class="table">
              <thead class="black white-text">
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">image</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prénom</th>
                  <th scope="col">email</th>
                  <th scope="col">Mot de passe</th>
                  <th class="text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                {this.props.users.map((el) => (
                  <tr>
                    <th scope="row">{el.id}</th>
                    <td>
                      <img
                        className="img-fluid img-user"
                        src={el.img}
                        alt="user"
                      />
                    </td>
                    <td>{el.first_name}</td>
                    <td>{el.last_name}</td>
                    <td>{el.email}</td>
                    <td>{el.password}</td>
                    <td>
                      <Button
                        basic
                        color="red"
                        content="Effacer"
                        onClick={() => this.props.deleteUser(el.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </MDBModalBody>
          <MDBModalFooter>
            <Button
              basic
              color="black"
              content="Fermer"
              onClick={this.props.toggleListofUser}
            />
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getAllallusers: () => dispatch(getUsersFromApi()),
  deleteUser: (id) => dispatch(DeleteUserAPI(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);
