import React, { Component } from 'react';
import { connect } from 'react-redux'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { getOrdersFromApi, postOrderInApi } from '../../../actions/OrdersActions'


class ShoppingCart extends Component {

    componentDidMount() {
        this.props.getAllallOrders()

    }



    render() {
        return (
            <MDBContainer>

                <MDBModal isOpen={this.props.ModalShoppingCart} toggle={this.props.ToggleShoppingCart} fullHeight position="top">

                    <MDBModalHeader >Listes des commandes</MDBModalHeader>
                    <MDBModalBody>
                        <table class="table">
                            <thead class="black white-text">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Titre</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Prix</th>
                                    <th class="text-center">Quantité</th>
                                    <th class="text-center">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.state.order[0].productsIDs.map(el =>
                                    this.props.foods.filter(item => item.id === el.id).map(element =>

                                        <tr>
                                            <td>  <p> <img className="img-fluid img-user" src={element.img} alt="user" /></p></td>
                                            <td> <p><span><strong>{element.title}</strong></span></p></td>
                                            <td><p><p><strong>{element.description}</strong></p></p></td>
                                            <td> <p><span>prix :<strong>{element.price}</strong>&nbsp;&nbsp;$</span></p></td>
                                            <td> <span>quantitié :<strong> {el.quantite} </strong> </span></td>
                                            <td><span>Total:<strong> {el.quantite === 0 ? element.price : el.quantite * element.price}  </strong> </span></td>

                                        </tr>
                                    ))}
                            </tbody>

                        </table>
                        <span className='float-right'>Total:<strong> {this.props.state.total} </strong> $</span>
                        <div className="listProductCard2">
                            <MDBBtn color="success"
                                onClick={() => {
                                    this.props.AddCommand({
                                        "userID": this.props.state.order[0].userID,
                                        "productsIDs": this.props.state.order[0].productsIDs,
                                        "date": this.props.state.order[0].date,
                                        "total": this.props.state.total,

                                    });
                                    this.props.ToggleShoppingCart()
                                }}
                            >Passer une commande</MDBBtn>
                            <MDBBtn color="danger" onClick={this.props.ToggleShoppingCart}>Annuler</MDBBtn>
                        </div>
                    </MDBModalBody>

                    <MDBModalFooter>
                        <MDBBtn color="danger" onClick={this.props.ToggleShoppingCart}>Close</MDBBtn>

                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}
const mapStateToProps = (state) => ({
    foods: state.foods

})

const mapDispatchToProps = (dispatch) => ({

    getAllallOrders: () => dispatch(getOrdersFromApi()),
    AddCommand: (order) => dispatch(postOrderInApi(order))

});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
