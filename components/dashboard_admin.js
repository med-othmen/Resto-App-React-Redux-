import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFoodsFromApi } from '../actions/foodactions';
import { MDBBtn, MDBBtnGroup } from 'mdbreact';
import MenuContainer from './card/Card_ContainerAdmin'
import './css/dashboardadmin.css'
import Editmodal from './Modals/ModalContainerAdmin/EditModal'
import Addmodal from './Modals/ModalContainerAdmin/AddModal'
import CommandsModal from './Modals/ModalContainerAdmin/ListofCommandsModal'
import UserModal from './Modals/userModal'
import ListofUsers from './Modals/ModalContainerAdmin/listofUsers'

export class Menu extends Component {
    state = {
        modal: false,
        modaledit: false,
        modalCommand: false,
        modalUser: false,
        ModalListofUsers: false,
        exp: []
    }
    toggle = (el) => {
        this.setState({
            modal: !this.state.modal,
            exp: el
        });

    }
    toggleAdd = () => {
        this.setState({
            modaledit: !this.state.modaledit
        });
    }
    toggleCommands = () => {
        this.setState({
            modalCommand: !this.state.modalCommand
        });
    }
    toggleUser = () => {
        this.setState({
            modalUser: !this.state.modalUser
        });
    }
    toggleListofUser = () => {
        this.setState({
            ModalListofUsers: !this.state.ModalListofUsers
        });
    }

    render() {
        return (
            <div >
                <ListofUsers toggleListofUser={this.toggleListofUser} ModalListofUsers={this.state.ModalListofUsers} />
                <Editmodal toggle={this.toggle} element={this.state.exp} modal={this.state.modal} />
                <Addmodal toggleAdd={this.toggleAdd} state={this.state} />
                <CommandsModal toggleCommands={this.toggleCommands} state={this.state} />
                <UserModal toggleUser={this.toggleUser} modalUser={this.state.modalUser} />

               
                <div className="sticky-top bg-dark d-flex p-2 col-example  justify-content-between" >
                    <div>
                        <MDBBtnGroup size="ms">
                            <MDBBtn color="danger" onClick={this.toggleAdd}> <span>Ajouter produit</span></MDBBtn>
                            <MDBBtn color="danger" onClick={this.toggleListofUser} > <span>Liste des utilisateurs</span></MDBBtn>
                            <MDBBtn color="danger" onClick={this.toggleCommands}> <span>Liste des commandes</span></MDBBtn>
                        </MDBBtnGroup>
                    </div>
                    <div className="float-right" >
                        <MDBBtn icon="user" color="light" float="lf" onClick={this.toggleUser}>Compte</MDBBtn>
                    </div>
                </div>

                <MenuContainer state={this.state} toggle={this.toggle} />

            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    foods: state.foods,

})

const mapDispatchToProps = (dispatch) => ({
    getAllFoods: () => dispatch(getFoodsFromApi())

});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);