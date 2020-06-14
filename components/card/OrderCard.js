import React, { Component } from 'react';
import { MDBBtn} from 'mdbreact';
import { connect } from 'react-redux';
import {DeletefromAPI} from '../../actions/foodactions'
import Rotate from 'react-reveal/Rotate';

class OrderCard extends Component {

    render() {
        return (
            <div className="item">


            <img className="Item-img" src={this.props.item.img} alt="e"></img>
            <Rotate>
                <p><h3>{this.props.item.title}</h3>{this.props.item.description}</p>

                <div className='Item-buttom'>
                    <MDBBtn color="red" onClick={() => this.props.DeleteFood(this.props.item.id)}>
                        Supprimer
            </MDBBtn>
                    <MDBBtn color="dark" onClick={() => this.props.toggle(this.props.item)} >Modifier</MDBBtn>

                </div>
            </Rotate>
        </div>
        )
           
}

}


const mapDispatchToProps = (dispatch) => ({
    
    DeleteFood: (food) => dispatch(DeletefromAPI(food)),

});

export default connect(null, mapDispatchToProps)(OrderCard);
