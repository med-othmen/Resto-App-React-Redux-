import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFoodsFromApi } from '../actions/foodactions';
import {getOrdersFromApi} from '../actions/OrdersActions'
import Footer from '../components/footer/footer'
import MenuUser from './card/menu-containerUser'
import './css/dashboardadmin.css'
import CommandsModal from './Modals/ModalContainerUser/ModalListofCommandsUser'
import UserModal from './Modals/userModal'
import ShoppingCartModal from './Modals/ModalContainerUser/ModalShoppingCart'
import './css/dashboarduser.css'

export class Menu extends Component {
    state = {
        modalCommand: false,
        modalUser: false,
        ModalShoppingCart: false,
        exp: [],
        order: [{
            userID: 0,
            productsIDs: [],
            date: 'date aujourdhui'
        }],
        tab: [],
        indice: 0,
        total:0
       
    }

    toggleCommands = () => {
        this.setState({
            modalCommand: !this.state.modalCommand,
        });
    }
    toggleUser = () => {
        this.setState({
            modalUser: !this.state.modalUser
        });
    }
    ToggleShoppingCart = () => {
        this.setState({
            ModalShoppingCart: !this.state.ModalShoppingCart
        })
    }

    countTotal = () => {

        return this.state.order[0].productsIDs.map(el =>
            this.props.foods.filter(item => item.id === el.id).map(element => { this.setState({ total: this.state.total + (el.quantite * element.price) }); console.log(el.quantite * element.price) }))
    }

    AddtoCart = (id, quantite) => {
        this.state.tab.push({ id, quantite })
        this.state.order[0].productsIDs.push({ "id": id, "quantite": quantite })
        this.setState({ indice: this.state.indice + 1 })
        return this.countTotal()
    }
componentDidMount(){
    this.props.getAllallOrders()
    console.log(this.props.orders)
}
    render() {
        return (
            <div >
                <ShoppingCartModal total={this.state.total} ToggleShoppingCart={this.ToggleShoppingCart} ModalShoppingCart={this.state.ModalShoppingCart} state={this.state} />
                <CommandsModal total={this.state.total} toggleCommands={this.toggleCommands}  modalCommand={this.state.modalCommand}/>
                <UserModal toggleUser={this.toggleUser} modalUser={this.state.modalUser} userid={this.state.order[0].userID} />
                <div className="p-fixed Header">

                    <a href="#menu" >   <img src="https://virgys.fr/26-thickbox_default/sticker-bienvenue-chez-nous-papillon.jpg" class="animated logo bounce infinite" alt="Restaurant S" id="animated-img1"></img></a>

                </div>

                <div className="sticky-top bg-dark d-flex p-1 col-example  justify-content-between" >
                    <div>
                        <a  class="btn-floating btn-lg btn-white text-dark " onClick={this.toggleCommands}><i class="fas fa-align-justify my-4">	&nbsp;	&nbsp;<small>Mes commandes</small></i></a>
                    </div>
                    <div className='d-flex  userflex'>
            <div>
            <a class="btn-lg btn-white btn-lg text-dark float-right mt-3 " onClick={this.ToggleShoppingCart}><small><i class="fas  fa-shopping-cart">&nbsp;&nbsp;{this.state.indice}</i></small></a>
            </div>
                        <div  >
                            <strong>
                                <a class="btn-floating btn-lg  btn-white text-dark " onClick={this.toggleUser}><i class="far fa-user my-4 " color='danger'></i></a>
                            </strong>

                        </div>

                    </div>

                </div>
                <div>
                  
                </div>
                <div id='menu'>
                    <MenuUser AddtoCart={this.AddtoCart} state={this.state} toggle={this.toggle} />
                </div>
                <Footer />
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    foods: state.foods,
    orders: state.orders

})

const mapDispatchToProps = (dispatch) => ({
    getAllFoods: () => dispatch(getFoodsFromApi()),
    getAllallOrders: () => dispatch(getOrdersFromApi()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);