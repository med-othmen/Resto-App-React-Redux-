import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { connect } from "react-redux";
import { postFoodInApi } from "../../../actions/foodactions";
import { Button } from "semantic-ui-react";
class ModalPage extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.props.state.modaledit}
          toggle={this.props.toggleAdd}
          fullHeight
          position="right"
        >
          <MDBModalHeader toggle={this.props.toggleAdd}>
            Ajouter produit
          </MDBModalHeader>
          <MDBModalBody>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Titre</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => this.setState({ Foodname: e.target.value })}
              />
              <label htmlFor="formGroupExampleInput">Description</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => this.setState({ description: e.target.value })}
              />
              <label htmlFor="formGroupExampleInput">Prix</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => this.setState({ price: e.target.value })}
              />
              <label htmlFor="formGroupExampleInput">URL photo</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => this.setState({ img: e.target.value })}
              />
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <Button
              basic
              color="red"
              content="Fermer"
              onClick={this.props.toggleAdd}
            />
            <Button
              basic
              color="green"
              content="Ajouter"
              onClick={() =>
                this.props.postfood({
                  title: this.state.Foodname,
                  description: this.state.description,
                  price: this.state.price,
                  img: this.state.img,
                })
              }
            />
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postfood: (food) => dispatch(postFoodInApi(food)),
});

export default connect(null, mapDispatchToProps)(ModalPage);
