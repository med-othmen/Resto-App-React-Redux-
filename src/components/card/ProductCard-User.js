import React, { Component } from "react";
import { connect } from "react-redux";
import CommandeModal from "../Modals/ModalContainerUser/CommandModal";
import { Card, Icon, Image } from "semantic-ui-react";

class Caard extends Component {
  state = {
    CommandModal: false,
    element: "",
  };
  toggle = (el) => {
    this.setState({
      CommandModal: !this.state.CommandModal,
      element: el,
    });
    console.log(el);
  };
  render() {
    return (
      <div>
        <CommandeModal
          AddtoCart={this.props.AddtoCart}
          toggle={this.toggle}
          CommandModal={this.state.CommandModal}
          element={this.props.item}
          price={this.props.item.price}
        />
        <div>
          <Card>
            <Image src={this.props.item.img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.item.title}</Card.Header>
              <Card.Meta>
                <span className="price">
                  <strong>{this.props.item.price} $</strong>
                </span>
                <Card.Description>
                  <p> {this.props.item.description}</p>
                </Card.Description>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <a onClick={() => this.toggle(this.props.item)}>
                <Icon name="add" />
                Ajouter dans panier
              </a>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(Caard);
