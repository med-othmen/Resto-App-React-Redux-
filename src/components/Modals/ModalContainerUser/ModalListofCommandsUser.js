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
} from "../../../actions/OrdersActions";
import { Icon, Button } from "semantic-ui-react";

class ModalListofCommandsUser extends Component {
  state = {
    Total: this.props.orders.total,
    status: "completed step",
  };
  componentDidMount() {
    this.props.getAllallOrders();
    this.setState({ Total: this.props.orders.modalCommand });
    console.log(this.props.orders);
  }

  render() {
    const x = this.props.sessions.length;
    const session = this.props.sessions.slice(x - 1);

    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.props.modalCommand}
          toggle={this.props.toggleCommands}
          fullHeight
          position="top"
        >
          <MDBModalHeader toggle={this.props.toggleCommands}>
            Listes des commandes
          </MDBModalHeader>
          <MDBModalBody>
            {session.map((ses) =>
              this.props.orders
                .filter((or) => or.userID === ses.userID)
                .map((or) => (
                  <div className="order-table-lign">
                    <div className="order-table-lign">
                      <hr></hr>
                      <div>
                        <tr>
                          <span>Date de commande: </span>
                        </tr>

                        <span>
                          <strong>{or.date}</strong>
                        </span>
                        {this.props.users
                          .filter((element) => or.userID === element.id)
                          .map((item) => (
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
                          ))}
                      </div>
                      <div>
                        <div className=" order-table-lign listofitem">
                          {or.productsIDs.map((element) =>
                            this.props.foods
                              .filter((el) => el.id === element.id)
                              .map((item) => (
                                <div className="ml-5 mb-5">
                                  <div small>
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
                        </div>
                      </div>
                      <hr></hr>
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
                          <div class={or.status}>
                            <Icon name="check" size="small" />
                            <div class="content">
                              <div class="title">accepté</div>
                            </div>
                          </div>
                        </div>

                        <Button
                          basic
                          color="red"
                          content="Effacer"
                          onClick={() => this.props.deleteorder(or.id)}
                        />
                      </div>
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
  sessions: state.sessions,
});

const mapDispatchToProps = (dispatch) => ({
  getAllallOrders: () => dispatch(getOrdersFromApi()),
  deleteorder: (id) => dispatch(DeleteORderfromApi(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalListofCommandsUser);
