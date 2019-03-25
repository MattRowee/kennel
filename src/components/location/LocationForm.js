import React, { Component } from "react";
import "../animal/Animal.css";
import LocationManager from "../../modules/LocationManager";

export default class LocationForm extends Component {
  // Set initial state when animalForms renders.
  state = {
    name: "",
    address: ""

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
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.address === "") {
          window.alert("Please establish an address");
        } else {
          const location = {
            name: this.state.name,
            address: this.state.address,
          };

          // Create the animal and redirect user to animal list
          this.props
            .addLocation(location)
            .then(() => this.props.history.push("/locations"));
        }
      };

      render() {
        return (
          <React.Fragment>
            <form className="locationForm">
              <div className="form-group">
                <label htmlFor="locationName">Location name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="locationName"
                  placeholder="Location name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="address"
                  placeholder="Address"
                />
              </div>

              <button
                type="submit"
                onClick={this.constructNewAnimal}
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
