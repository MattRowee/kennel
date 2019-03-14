import React, { Component } from 'react';
import "../animal/Animal.css"
import { Link } from "react-router-dom";
import Owner from "./hal_9000.png"

export default class OwnerList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animalButton">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/owners/new")
            }
            }>
            Admit Owner
                                      </button>
        </div>
        <section className="owners">
          {this.props.owners.map(owner => (
            <div key={owner.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <img src={Owner} className="icon--dog" />
                  {owner.name}
                  <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                </h5>
              </div>
            </div>
          ))}
        </section>
      </React.Fragment>
    );
  }
}