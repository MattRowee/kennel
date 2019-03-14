import React, { Component } from "react";
import "../animal/Animal.css";

export default class OwnerForm extends Component {
  // Set initial state when animalForms renders.
  state = {
    ownerName: "",
    animalId: "",
    animal:""
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
  constructNewOwner = evt => {
    evt.preventDefault();
    if (this.state.animal.name === "") {
      window.alert("Without an animal, you are not really an 'owner' are you?");
    } else {
      const owner = {
        name: this.state.ownerName,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        animal: this.state.animal.name,
        animalId: parseInt(this.state.animalId)
      };

      // Create the animal and redirect user to animal list
      this.props
        .addOwner(owner)
        .then(() => this.props.history.push("/owners"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="animalForm">
          <div className="form-group">
            <label htmlFor="ownerName">Owner name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ownerName"
              placeholder="Owner name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="owner">Assign animal</label>
            <select
              defaultValue=""
              name="animal"
              id="animalId"
              onChange={this.handleFieldChange}
              >

          <option value="">Select an aminal</option>
              {this.props.animals.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
              </select>
              </div>
          <button
            type="submit"
            onClick={this.constructNewOwner}
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
