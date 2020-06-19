import React, { Component } from "react";
import { connect } from "react-redux";
import { getFoodsFromApi } from "../actions/foodactions";
import { getOrdersFromApi } from "../actions/OrdersActions";
import { getSessionsFromApi } from "../actions/sessionAction";
import Footer from "../components/footer/footer";
import MenuUser from "./card/menu-containerUser";
import "./css/dashboardadmin.css";
import CommandsModal from "./Modals/ModalContainerUser/ModalListofCommandsUser";
import UserModal from "./Modals/userModal";
import ShoppingCartModal from "./Modals/ModalContainerUser/ModalShoppingCart";
import { Icon, Menu } from "semantic-ui-react";
import "./css/dashboarduser.css";

export class Menus extends Component {
  state = {
    modalCommand: false,
    modalUser: false,
    ModalShoppingCart: false,
    exp: [],
    order: [
      {
        userID: 0,
        productsIDs: [],
        date: "date aujourdhui",
      },
    ],
    tab: [],
    indice: 0,
    total: 0,
  };

  toggleCommands = () => {
    this.setState({
      modalCommand: !this.state.modalCommand,
    });
  };
  toggleUser = () => {
    this.setState({
      modalUser: !this.state.modalUser,
    });
  };
  ToggleShoppingCart = () => {
    this.setState({
      ModalShoppingCart: !this.state.ModalShoppingCart,
    });
  };

  countTotal = () => {
    return this.state.order[0].productsIDs.map((el) =>
      this.props.foods
        .filter((item) => item.id === el.id)
        .map((element) => {
          this.setState({
            total: this.state.total + el.quantite * element.price,
          });
          console.log(el.quantite * element.price);
        })
    );
  };

  AddtoCart = (id, quantite) => {
    this.state.tab.push({ id, quantite });
    this.state.order[0].productsIDs.push({ id: id, quantite: quantite });
    this.setState({ indice: this.state.indice + 1 });
    return this.countTotal();
  };
  componentDidMount() {
    this.props.getallSessions();
    this.props.getAllallOrders();
  }
  render() {
    return (
      <div>
        <Menu fixed="top" className="ui inverted menu black">
          <a
            onClick={() => {
              window.location.reload();
            }}
            class="active item navabr"
          >
            Menu
          </a>

          <a onClick={this.toggleCommands} class=" item navabr">
            Mes commandes
          </a>

          <a onClick={this.ToggleShoppingCart} class="item">
            <a>
              {" "}
              <Icon name="shopping basket" size="big" /> {this.state.indice}
            </a>
          </a>

          <div class="right menu">
            <div class="item">
              <a onClick={this.toggleUser}>
                <Icon name="user outline" size="big" />
              </a>
            </div>
          </div>
        </Menu>

        <ShoppingCartModal
          total={this.state.total}
          ToggleShoppingCart={this.ToggleShoppingCart}
          ModalShoppingCart={this.state.ModalShoppingCart}
          state={this.state}
        />
        <CommandsModal
          total={this.state.total}
          toggleCommands={this.toggleCommands}
          modalCommand={this.state.modalCommand}
        />
        <UserModal
          toggleUser={this.toggleUser}
          modalUser={this.state.modalUser}
          userid={this.state.order[0].userID}
        />

        <div id="menu">
          <MenuUser
            AddtoCart={this.AddtoCart}
            state={this.state}
            toggle={this.toggle}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foods: state.foods,
  orders: state.orders,
  sessions: state.sessions,
});

const mapDispatchToProps = (dispatch) => ({
  getAllFoods: () => dispatch(getFoodsFromApi()),
  getAllallOrders: () => dispatch(getOrdersFromApi()),
  getallSessions: () => dispatch(getSessionsFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menus);

/*
 <Menu standard fixed="top" class="ui inverted  ">
          <a class="active item navabr">Menu</a>
          <Link to="/user">
            {" "}
            <a onClick={this.toggleCommands} class=" item navabr">
              Mes commandes
            </a>
          </Link>

          <a onClick={this.ToggleShoppingCart} class="item">
            <a>
              {" "}
              <Icon name="shopping basket" size="big" /> {this.state.indice}
            </a>
          </a>

          <div class="right menu">
            <div class="item">
              <a onClick={this.toggleUser}>
                <Icon name="user outline" size="big" />
              </a>
            </div>
          </div>
        </Menu>

        */
