import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import { DeletefromAPI } from "../../actions/foodactions";
import Rotate from "react-reveal/Rotate";
import { Button, Card, Image } from "semantic-ui-react";

class Cards extends Component {
  render() {
    return (
      <div className="item">
        <Card>
          <Card.Content>
            <Image floated="right" src={this.props.item.img} />
            <Card.Header>{this.props.item.title}</Card.Header>
            <Card.Meta>{this.props.item.price} $</Card.Meta>
            <Card.Description>
              <p> {this.props.item.description}</p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                onClick={() => this.props.toggle(this.props.item)}
                basic
                color="green"
              >
                Modifier
              </Button>
              <Button
                onClick={() => this.props.DeleteFood(this.props.item.id)}
                basic
                color="red"
              >
                Supprimer
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  DeleteFood: (food) => dispatch(DeletefromAPI(food)),
});

export default connect(null, mapDispatchToProps)(Cards);

/* <img className="Item-img" src={this.props.item.img} alt="e"></img>
            <Rotate>
               <h3>{this.props.item.title}</h3>
        <div><span>{this.props.item.price} $</span></div>
                <div className='Item-buttom'>
                    <MDBBtn color="red" onClick={() => this.props.DeleteFood(this.props.item.id)}>
                        Supprimer
                     </MDBBtn>
                    <MDBBtn color="dark" onClick={() => this.props.toggle(this.props.item)} >Modifier</MDBBtn>
                </div>
            </Rotate>
            */
