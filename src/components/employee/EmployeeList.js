import React, { Component } from 'react';
import "../animal/Animal.css"
import { Link } from "react-router-dom";
import Employee from "./employee.png"

export default class EmployeeList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animalButton">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/employees/new")
            }
            }>
            Admit Employee
                                </button>
        </div>
        <section className="animals">
          {this.props.employees.map(employee => (
            <div key={employee.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <img src={Employee} className="icon--dog" />
                  {employee.name}
                  <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                </h5>
              </div>
            </div>
          ))}
        </section>
      </React.Fragment>
    );
  }
}

