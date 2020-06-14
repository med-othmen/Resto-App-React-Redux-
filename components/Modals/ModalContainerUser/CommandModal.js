import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


class CommandeModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantite: 1,
            total: this.props.price
        };

    }

    incriment = () => {
        this.setState({
            quantite: this.state.quantite + 1,
            total: this.props.element.price * this.state.quantite
        })
       
    }
    decriment = () => {
        this.setState({
            quantite: this.state.quantite===0 ? 0:this.state.quantite - 1,
            total: this.props.element.price - this.state.quantite
        })
    }
    
    render() {
        return (
            <MDBContainer>

                <MDBModal isOpen={this.props.CommandModal} toggle={this.props.toggle} >

                    <MDBModalHeader toggle={this.props.toggle}>Ajouter au panier</MDBModalHeader>
                    <MDBModalBody>
                        <img className="img-fluid img-user" src={this.props.element.img} alt="user" />
                        <h1>{this.props.element.title} </h1>
                        <p>{this.props.element.description} </p>
                        <p>{this.props.element.price}<strong>$</strong> </p>
                        <div className='d-flex ml-5'>
                            <a type="button" class="btn btn-primary btn-dark" onClick={() => this.decriment()}>-</a>
                            <div className='mt-3 mb-3'> <span><strong>{this.state.quantite}</strong></span></div>
                            <a type="button" class="btn btn-primary  btn-dark" onClick={() => this.incriment()}>+</a>
                        </div>
                        <p><strong >Prix Total :{this.state.total} </strong>$</p>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="danger" onClick={this.props.toggle}>Annuler</MDBBtn>
                        <MDBBtn color="dark"
                            onClick={() => {
                           
                                { this.props.AddtoCart(this.props.element.id, this.state.quantite)}
                             } }
                        >Ajouter</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default CommandeModal
