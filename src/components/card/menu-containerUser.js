import React from "react";
import { connect } from "react-redux";
import CardMenu from "./ProductCard-User";
import { getFoodsFromApi } from "../../actions/foodactions";

class Card_Container extends React.Component {
  componentDidMount() {
    this.props.getAllFoods();
  }

  render() {
    return (
      <div>
        <div className="Menu bg">
          <div className="main">
            {this.props.foods.map((el) => (
              <CardMenu
                AddtoCart={this.props.AddtoCart}
                toggle={this.props.toggle}
                item={el}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foods: state.foods,
});
const mapDispatchToProps = (dispatch) => ({
  getAllFoods: () => dispatch(getFoodsFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card_Container);
