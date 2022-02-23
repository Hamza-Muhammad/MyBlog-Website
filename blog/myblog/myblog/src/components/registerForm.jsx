import React from "react";
import Joi from "joi-browser";
import Form from "../commons/form";

class Register extends Form {
  state = { data: { username: "", password: "", email: "" }, errors: {} };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
  };

  doSubmit = () => {
    console.log(this.state.data);
    const datas = this.state.data;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ data: datas }),
    };
    fetch("http://localhost:3001/users/edit", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ data: datas }));
  };

  render() {
    return (
      <div className="container">
        {/* <div><h1>{data}</h1></div> */}
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("email", "Email", "email")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }

  //   componentDidMount() {
  //     // Simple POST request with a JSON body using fetch
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ title: "React POST Request Example" }),
  //     };
  //     fetch("https://reqres.in/api/posts", requestOptions)
  //       .then((response) => response.json())
  //       .then((data) => this.setState({ data }));
  //   }
}

export default Register;
