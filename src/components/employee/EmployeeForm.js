import React, { Component } from "react";
import "../animal/Animal.css";

export default class EmployeeForm extends Component {
  // Set initial state when animalForms renders.
  state = {
    employeeName: "",
    favoriteBand: "",
    employeeId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
      console.log("This is evt", evt);
      console.log("This is evt.target.value", evt.target.value);
      console.log("this is evt.target.id", evt.target.id)
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewEmployee = evt => {
    evt.preventDefault();
    if (this.state.favoriteBand === "") {
      window.alert("You're an adult and you should have a favorite band.");
    } else {
      const employee = {
        name: this.state.employeeName,
        favoriteBand: this.state.favoriteBand,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        employeeId: parseInt(this.state.employeeId)
      };

      // Create the animal and redirect user to animal list
      this.props
        .addEmployee(employee)
        .then(() => this.props.history.push("/employees"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="animalForm">
          <div className="form-group">
            <label htmlFor="animalName">Employee name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="employeeName"
              placeholder="Employee name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="favoriteBand">Favorite Band</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="favoriteBand"
              placeholder="The Talking Heads"
            />
          </div>

          <button
            type="submit"
            onClick={this.constructNewEmployee}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
// Using the Form
// Once you've got all these pieces in place, click on the Admit Animal button, fill out the form, and submit it. You should immediately see your new animal in the list.
