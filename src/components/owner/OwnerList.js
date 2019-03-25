import React, { Component } from 'react';
import "../animal/Animal.css"
import { Link } from "react-router-dom";
import ResourceCard from "../generics/ResourceCard"

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