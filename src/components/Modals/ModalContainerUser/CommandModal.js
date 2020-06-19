import React, { Component } from "react";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { Button } from "semantic-ui-react";

class CommandeModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantite: 1,
      total: this.props.element.price,
    };
  }

  incriment = () => {
    this.setState({
      quantite: this.state.quantite++ + 1,
      total: this.props.element.price * this.state.quantite,
    });
  };
  decriment = () => {
    this.setState({
      quantite: this.state.quantite === 0 ? 0 : this.state.quantite - 1,
      total: this.props.element.price - this.state.quantite,
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.CommandModal} toggle={this.props.toggle}>
          <MDBModalHeader toggle={this.props.toggle}>
            Ajouter au panier
          </MDBModalHeader>

          <MDBModalBody>
            <img
              className="img-fluid img-user"
              src={this.props.element.img}
              alt="user"
            />
            <h1>{this.props.element.title} </h1>
            <p>{this.props.element.description} </p>
            <p>
              {this.props.element.price}
              <strong>$</strong>{" "}
            </p>
            <div className="d-flex ml-5 buttonsquantity">
              <div>
                <Button.Group>
                  <Button color="black" onClick={() => this.decriment()}>
                    -
                  </Button>

                  <Button color="white">{this.state.quantite}</Button>
                  <Button onClick={() => this.incriment()} negative>
                    +
                  </Button>
                </Button.Group>
              </div>
            </div>
            <p>
              <strong>Prix Total :{this.state.total} </strong>$
            </p>
          </MDBModalBody>
          <MDBModalFooter>
            <Button
              onClick={this.props.toggle}
              basic
              color="black"
              content="Annuler"
            />

            <Button
              onClick={() => {
                this.props.AddtoCart(
                  this.props.element.id,
                  this.state.quantite
                );
                this.props.toggle();
              }}
              basic
              color="red"
              content="Ajouter"
            />
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default CommandeModal;
