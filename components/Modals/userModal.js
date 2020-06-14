import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';
import { connect } from 'react-redux';
import { getUsersFromApi } from '../../actions/UserACtion'

class ModalPage extends Component {
  componentDidMount() {
    this.props.getAllallusers();
  }

  deconnect=()=>{
    window.location.pathname = '/signin'
  }


  render() {
    return (
      <MDBContainer>

        <MDBModal isOpen={this.props.modalUser} toggle={this.props.toggleUser} side position="top-right">

          <MDBModalBody>

            {this.props.users.filter(el => el.id === this.props.userID).map(el =>
              <div className="d-flex">
                <div> <img className="img-fluid" src={el.img} alt="user" />
                </div>
                <div>
                  <h3>{el.first_name}  <span>{el.last_name}  </span> </h3>

                  <p>{el.email} </p>
            <span>{el.email}</span>
                </div>
              </div>)
            }

          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="dark" onClick={this.props.toggleUser}>Fermer</MDBBtn>
            <MDBBtn color="danger" onClick={()=>this.deconnect()}>Sé déconnecter</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,

})

const mapDispatchToProps = (dispatch) => ({

  getAllallusers: () => dispatch(getUsersFromApi())

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);

