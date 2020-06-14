import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { connect } from 'react-redux';
import { editInApi } from '../../../actions/foodactions'

class ModalPage extends Component {
  constructor(props) {
    super(props);

    this.state = {

      id: this.props.element.id,
      title: this.props.element.title,
      description: this.props.element.description,
      img: this.props.element.img,
      price:this.props.element.price
    }
  }

  render() {
    return (
      <MDBContainer>

        <MDBModal isOpen={this.props.modal} toggle={this.toggle} >

          <MDBModalHeader toggle={this.props.toggle}>Modification Article</MDBModalHeader>
          <MDBModalBody>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Titre produit</label>
              <input
                placeholder="nouveau titre"
                type="text"
                className="form-control"
                defaultValue={this.props.element.title}
                onChange={
                  (e) => this.setState({ title: e.target.value })

                }
              />
              <label htmlFor="formGroupExampleInput">Description</label>
              <input
                placeholder='nouvelle description'
                type="text"
                defaultValue={this.props.element.description}
                className="form-control"
                onChange={(e) => e.target.value === '' ? this.setState({ description: this.props.element.img }) : this.setState({ description: e.target.value })}
              />
              <label htmlFor="formGroupExampleInput">Prix</label>
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.element.price}
                onChange={(e) => e.target.value === '' ? this.setState({ price: this.props.element.price }) : this.setState({ price: e.target.value })}
              />
              <label htmlFor="formGroupExampleInput">URL photo</label>
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.element.img}

                onChange={(e) => e.target.value === '' ? this.setState({ img: this.props.element.img }) : this.setState({ img: e.target.value })}
              />
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="danger" onClick={this.props.toggle}>Fermer</MDBBtn>
            <MDBBtn color="dark" onClick={() => {
              this.props.EditFood({
                id: this.state.id,
                title: this.state.title,
                description: this.state.description,
                img: this.state.img,
                price: this.state.price
              }, this.props.element.id); alert(this.props.element.title)
            }
            }
            >Enregistrer</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  EditFood: (el, id) => dispatch(editInApi(el, id))
}
)
export default connect(null, mapDispatchToProps)(ModalPage);
