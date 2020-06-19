import React from "react";
import "./../../css/signup.css";
import { postUserInApi } from "../../../actions/UserACtion";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class signun extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  verifmail = (e) => {
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (filter.test(e.target.value)) {
      e.target.style.border = "3px solid green";
    } else {
      e.target.style.border = "3px solid red";
    }
  };

  verifpswd = (e) => {
    let filter = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; // at least one number, one lowercase and one uppercase letter
    // at least six characters

    if (filter.test(e.target.value)) {
      e.target.style.border = "3px solid green";
    } else {
      e.target.style.border = "3px solid red";
    }
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
                  placeholder="Nom"
                  onChange={(e) =>
                    this.setState({ first_name: e.target.value })
                  }
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Prénom"
                  onChange={(e) => this.setState({ last_name: e.target.value })}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Adresse e-mail"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Mot de passe"
                  type="password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="URL image"
                  onChange={(e) => this.setState({ img: e.target.value })}
                />

                <Button
                  onClick={() => {
                    this.props.addUser({
                      first_name: this.state.first_name,
                      last_name: this.state.last_name,
                      img: this.state.img,
                      email: this.state.email,
                      password: this.state.password,
                      post: "user",
                    });
                  }}
                  color="black"
                  fluid
                  size="small"
                >
                  Créer mon compte
                </Button>
              </Segment>
            </Form>
            <Message>
              Se connecter ?{" "}
              <Link to="/signin">
                {" "}
                <a href="#">Connection</a>
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (food) => dispatch(postUserInApi(food)),
});

export default connect(null, mapDispatchToProps)(signun);
