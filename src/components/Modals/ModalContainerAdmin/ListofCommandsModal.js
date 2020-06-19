import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import {
  getOrdersFromApi,
  DeleteORderfromApi,
  EditStatusOfOrderInApi,
} from "../../../actions/OrdersActions";
import { Button, Icon } from "semantic-ui-react";

class CommandeModal extends Component {
  componentDidMount() {
    this.props.getAllallOrders();
  }

  render() {
    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.props.state.modalCommand}
          toggle={this.props.toggleCommands}
          fullHeight
          position="top"
        >
          <MDBModalHeader toggle={this.props.toggleCommands}>
            Listes des commandes
          </MDBModalHeader>
          <MDBModalBody>
            {this.props.orders.map((el) => (
              <div className="order-table-lign">
                <div className="order-table-lign">
                  <div>
                    <tr>
                      <span>Date de commande: </span>
                    </tr>
                    <span>
                      <strong>{el.date}</strong>
                    </span>
                    <div>
                      <strong>{el.time}</strong>
                    </div>

                    {this.props.users
                      .filter((element) => el.userID === element.id)
                      .map((item) => (
                        <div>
                          <tr>
                            <span>
                              <strong>
                                {item.last_name}&nbsp;&nbsp;{item.first_name}
                              </strong>{" "}
                            </span>
                            <tr>
                              {" "}
                              ID de client :<strong> {item.id}</strong>
                            </tr>
                          </tr>
                        </div>
                      ))}
                  </div>
                  <div>
                    <div className=" order-table-lign">
                      {el.productsIDs.map((element) =>
                        this.props.foods
                          .filter((food) => food.id === element.id)
                          .map((item) => (
                            <div className="ml-5 mb-5">
                              <div>
                                <img
                                  className="img-fluid  img-user"
                                  src={item.img}
                                  alt="user"
                                />
                              </div>
                              <span>{item.title}</span>
                              <div>
                                <span>{item.discription}</span>
                              </div>
                              <div>
                                <span>Prix unitaire :{item.price}</span>
                              </div>
                              <div>
                                <span>
                                  Quantité :
                                  <strong>{element.quantite} $</strong>
                                </span>
                              </div>
                              <div>
                                <span>
                                  Total :
                                  <strong>
                                    {element.quantite * item.price} $
                                  </strong>
                                </span>
                              </div>
                            </div>
                          ))
                      )}

                      <hr></hr>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="listProductCard">
                    <div class="ui steps">
                      <div class="completed step">
                        <i class="payment icon light"></i>
                        <div class="content">
                          <div class="title">récu</div>
                        </div>
                      </div>
                      <div class={el.status}>
                        <Icon name="check" size="small" />
                        <div class="content">
                          <div class="title">accepté</div>
                        </div>
                      </div>
                    </div>
                    <Button
                      basic
                      color="green"
                      content="Accepter"
                      onClick={() =>
                        this.props.AcceptOrder(
                          {
                            UserID: el.userID,
                            productsIDs: el.productsIDs,
                            total: el.total,
                            time: el.time,
                            date: el.date,
                            status: "completed step",
                          },
                          el.id
                        )
                      }
                    />
                    <Button
                      className="mt-4"
                      basic
                      color="red"
                      content="Réfuser"
                      onClick={() => this.props.deleteorder(el.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </MDBModalBody>
          <MDBModalFooter>
            <Button
              basic
              color="red"
              content="Fermer"
              onClick={this.props.toggleCommands}
            />
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  orders: state.orders,
  foods: state.foods,
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getAllallOrders: () => dispatch(getOrdersFromApi()),
  deleteorder: (id) => dispatch(DeleteORderfromApi(id)),
  AcceptOrder: (order, id) => dispatch(EditStatusOfOrderInApi(order, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommandeModal);
