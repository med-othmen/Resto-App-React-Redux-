import React, { Component } from 'react';
import { connect } from 'react-redux'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { getOrdersFromApi } from '../../../actions/OrdersActions'


class CommandeModal extends Component {
  componentDidMount() {
    this.props.getAllallOrders()
  }

  /*
  {this.props.foods.filter(item => el.productsIDs.filter(element => element === item.id)).map(el =>
                        <div className="listProductCard">
                          <div><span>ID produit :<strong>{el.id}</strong></span></div>
                          <div> <img className="img-fluid img-user" src={el.img} alt="user" /></div>
                          <div><span><strong>{el.title}</strong></span></div>
                          <div><span>Qté :<strong>{el.id}</strong></span></div>
                          <hr></hr>
                        </div>
                        
                      )}
                      */


  render() {
    return (
      <MDBContainer>

        <MDBModal isOpen={this.props.state.modalCommand} toggle={this.props.toggleCommands} fullHeight position="top">
          <MDBModalHeader toggle={this.props.toggleCommands}>Listes des commandes</MDBModalHeader>
          <MDBModalBody>

            {

              this.props.orders.map(el => <div className="order-table-lign">
                <div className="order-table-lign">
                  <hr></hr>
                  <div>
                    <tr><span>Date de commande: </span></tr>
                    <span><strong>{el.date}</strong></span>
                    {this.props.users.filter(element => el.userID === element.id).map(item =>
                      <tr>
                        <span><strong>{item.last_name}&nbsp;&nbsp;{item.first_name}</strong> </span>
                        <tr>  ID de client :<strong> {item.id}</strong></tr>
                      </tr>
                    )}

                  </div>
                  <div>

                    <div className=" order-table-lign">
                      {el.productsIDs.map(element =>
                        this.props.foods.filter(el => el.id === element.id).map(item =>
                          <div  className="ml-5 mb-5">
                            <div >
                            <img className="img-fluid  img-user" src={item.img} alt="user" />
                            </div>
                            <span>{item.title}</span>
                            <div>
                            <span>{item.discription}</span>
                            </div>
                            <div>
                            <span>Prix unitaire :{item.price}</span>
                            </div>
                            <div>
                            <span>Quantité :<strong>{element.quantite} $</strong></span>
                            </div>
                            <div>
                            <span>Total :<strong>{element.quantite*item.price} $</strong></span>
                            </div>
                          </div>
                        )







                      )}
                      <hr></hr>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="listProductCard">
                    <MDBBtn color="success">Accepter</MDBBtn>
                    <MDBBtn color="danger">Réfuser</MDBBtn>
                  </div>
                </div>

              </div>)
            }

          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="danger" onClick={this.props.toggleCommands}>Close</MDBBtn>

          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
  foods: state.foods,
  users: state.users

})

const mapDispatchToProps = (dispatch) => ({

  getAllallOrders: () => dispatch(getOrdersFromApi())

});

export default connect(mapStateToProps, mapDispatchToProps)(CommandeModal);
