import Joi from "joi-browser";
import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = { data: {}, errors: {} };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    const items = error.details.map(
      (item) => (errors[item.path[0]] = item.message)
    );
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit()
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    const errors = { ...this.state.errors };
    const error = this.validateProperty(input);
    if (error) errors[input.name] = error;
    else delete errors[input.name];
    this.setState({ data, errors });
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        onChange={this.handleChange}
        value={data[name]}
        name={name}
        label={label}
        type={type}
        error={errors[name]}
      ></Input>
    );
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className="btn btn-primary m-2">
        {" "}
        {label}{" "}
      </button>
    );
  };
}

export default Form;
