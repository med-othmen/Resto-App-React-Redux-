import React from "react";

import "../../css/signin.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUsersFromApi } from "../../../actions/UserACtion";
import { postSessionInApi } from "../../../actions/sessionAction";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: "user",
    };
  }

  verifmail = (e) => {
    this.setState({ email: e.target.value });
  };

  verifpswd = (e) => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const user = this.props.users.filter(
      (el) =>
        el.email === this.state.email && el.password === this.state.password
    );
    if (user.length === 0) alert("Utilisateur nexiste pas");
    user.map((el) =>
      el.post === "root"
        ? ((window.location.pathname = "/Admin"),
          this.props.AddSession({ userID: el.id, time: time }))
        : el.post === "user"
        ? ((window.location.pathname = "/User"),
          this.props.AddSession({ userID: el.id, time: time }))
        : alert("comte nexiste pas")
    );
  };
  componentDidMount = () => {
    this.props.getAllUsers();
  };

  render() {
    return (
      <div className="loginform ">
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Adresse E-mail"
                  onChange={this.verifmail}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Mot de passe"
                  type="password"
                  onChange={this.verifpswd}
                />

                <Button
                  onClick={() => this.login()}
                  color="black"
                  fluid
                  size="small"
                >
                  Connecter
                </Button>
              </Segment>
            </Form>
            <Message>
              Créer un compte ?{" "}
              <Link to="/signup">
                {" "}
                <a href="#">S'inscrire</a>
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getUsersFromApi()),
  AddSession: (session) => dispatch(postSessionInApi(session)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
