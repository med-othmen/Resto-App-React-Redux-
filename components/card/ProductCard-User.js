import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import Rotate from 'react-reveal/Rotate';
import CommandeModal from '../Modals/ModalContainerUser/CommandModal'
class Card extends Component {
    state = {
        CommandModal: false,
        element: ""
    }
    toggle = (el) => {
        this.setState({
            CommandModal: !this.state.CommandModal,
            element: el
        })
        console.log(el)
        
    }
    render() {
        return (
            <div className="item">
                <CommandeModal AddtoCart={this.props.AddtoCart} toggle={this.toggle} CommandModal={this.state.CommandModal} element={this.state.element} price={this.props.item.price} />
                <img className="Item-img" src={this.props.item.img} alt="e"></img>
                <Rotate>
                    <p><h3>{this.props.item.title}</h3>{this.props.item.description}</p>

                    <div className='Item-buttom'>
                        <span><strong>{this.props.item.price}</strong> $</span>
                        <MDBBtn color="dark" onClick={() => this.toggle(this.props.item)} ><i class="fas  fa-shopping-cart">&nbsp;&nbsp;&nbsp;Ajouter dans panier</i></MDBBtn>

                    </div>
                </Rotate>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({


});

export default connect(null, mapDispatchToProps)(Card);
