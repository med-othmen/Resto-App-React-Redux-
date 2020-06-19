import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import {
  getOrdersFromApi,
  postOrderInApi,
} from "../../../actions/OrdersActions";
import { Button } from "semantic-ui-react";

class ShoppingCart extends Component {
  componentDidMount() {
    this.props.getAllallOrders();
  }

  render() {
    const x = this.props.sessions.length;
    const session = this.props.sessions.slice(x - 1);
    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.props.ModalShoppingCart}
          toggle={this.props.ToggleShoppingCart}
          fullHeight
          position="top"
        >
          <MDBModalHeader>Listes des commandes</MDBModalHeader>
          {session.map((ses) => (
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
                  {this.props.state.order[0].productsIDs.map((el) =>
                    this.props.foods
                      .filter((item) => item.id === el.id)
                      .map((element) => (
                        <tr>
                          <td>
                            {" "}
                            <p>
                              {" "}
                              <img
                                className="img-fluid img-user"
                                src={element.img}
                                alt="user"
                              />
                            </p>
                          </td>
                          <td>
                            {" "}
                            <p>
                              <span>
                                <strong>{element.title}</strong>
                              </span>
                            </p>
                          </td>
                          <td>
                            <p>
                              <p>
                                <strong>{element.description}</strong>
                              </p>
                            </p>
                          </td>
                          <td>
                            {" "}
                            <p>
                              <span>
                                prix :<strong>{element.price}</strong>
                                &nbsp;&nbsp;$
                              </span>
                            </p>
                          </td>
                          <td>
                            {" "}
                            <span>
                              quantitié :<strong> {el.quantite} </strong>{" "}
                            </span>
                          </td>
                          <td>
                            <span>
                              Total:
                              <strong>
                                {" "}
                                {el.quantite === 0
                                  ? element.price
                                  : el.quantite * element.price}{" "}
                              </strong>{" "}
                            </span>
                          </td>
                        </tr>
                      ))
                  )}
                  <div>
                    <span className="float-right">
                      Total:<strong> {this.props.state.total} </strong> $
                    </span>
                  </div>
                </tbody>
              </table>

              <div className="listProductCard2 float-right">
                <Button
                  basic
                  color="green"
                  content=" Passer une commande"
                  onClick={() => {
                    var today = new Date();
                    var time =
                      today.getHours() +
                      ":" +
                      today.getMinutes() +
                      ":" +
                      today.getSeconds();
                    var date =
                      today.getFullYear() +
                      "-" +
                      (today.getMonth() + 1) +
                      "-" +
                      today.getDate();
                    this.props.AddCommand({
                      userID: ses.userID,
                      productsIDs: this.props.state.order[0].productsIDs,
                      total: this.props.state.total,
                      time: time,
                      date: date,
                      status: "success step",
                    });
                    this.props.ToggleShoppingCart();
                  }}
                />

                <Button
                  basic
                  color="red"
                  content="Annuler"
                  onClick={this.props.ToggleShoppingCart}
                />
              </div>
            </MDBModalBody>
          ))}
        </MDBModal>
      </MDBContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  foods: state.foods,
  sessions: state.sessions,
});

const mapDispatchToProps = (dispatch) => ({
  getAllallOrders: () => dispatch(getOrdersFromApi()),
  AddCommand: (order) => dispatch(postOrderInApi(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
