import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoodsFromApi } from "../actions/foodactions";
import MenuContainer from "./card/Card_ContainerAdmin";
import "./css/dashboardadmin.css";
import Editmodal from "./Modals/ModalContainerAdmin/EditModal";
import Addmodal from "./Modals/ModalContainerAdmin/AddModal";
import CommandsModal from "./Modals/ModalContainerAdmin/ListofCommandsModal";
import UserModal from "./Modals/userModal";
import ListofUsers from "./Modals/ModalContainerAdmin/listofUsers";

export class Menu extends Component {
  state = {
    modal: false,
    modaledit: false,
    modalCommand: false,
    modalUser: false,
    ModalListofUsers: false,
    exp: [],
  };
  toggle = (el) => {
    this.setState({
      modal: !this.state.modal,
      exp: el,
    });
  };
  toggleAdd = () => {
    this.setState({
      modaledit: !this.state.modaledit,
    });
  };
  toggleCommands = () => {
    this.setState({
      modalCommand: !this.state.modalCommand,
    });
  };
  toggleUser = () => {
    this.setState({
      modalUser: !this.state.modalUser,
    });
  };
  toggleListofUser = () => {
    this.setState({
      ModalListofUsers: !this.state.ModalListofUsers,
    });
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <div fixed="top" class="ui inverted menu ">
          <a onClick={this.toggleAdd} class="active item navabr">
            Ajouter produit
          </a>
          <a onClick={this.toggleListofUser} class="item">
            Listes des utilisateurs
          </a>
          <a onClick={this.toggleCommands} class="item">
            Listes des commandes
          </a>
          <div class="right menu">
            <div class="item">
              <a onClick={this.toggleUser}>
                <i class="user circle icon">{this.state.exp.id}</i>
              </a>
            </div>
          </div>
        </div>
        <div class="ui segment">
          <p></p>
        </div>
        <ListofUsers
          toggleListofUser={this.toggleListofUser}
          ModalListofUsers={this.state.ModalListofUsers}
        />
        <Editmodal
          toggle={this.toggle}
          element={this.state.exp}
          modal={this.state.modal}
        />
        <Addmodal toggleAdd={this.toggleAdd} state={this.state} />
        <CommandsModal
          toggleCommands={this.toggleCommands}
          state={this.state}
        />
        <UserModal
          toggleUser={this.toggleUser}
          modalUser={this.state.modalUser}
        />

        <MenuContainer state={this.state} toggle={this.toggle} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foods: state.foods,
  sessions: state.sessions,
});

const mapDispatchToProps = (dispatch) => ({
  getAllFoods: () => dispatch(getFoodsFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
