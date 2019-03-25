import React, { Component } from 'react';
import "./Animal.css"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */

        // this finds the corresponding animal (to the card you clicked on)
        // and pops up the corresponging detail card
        const animal = this.props.animals.find(a => a.id ===
            parseInt(this.props.match.params.animalId)) || {}



        return (
            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={dog} className="icon--dog" />
                            {animal.name}
                        </h4>
                        <h6 className="card-title">{animal.breed}</h6>

                        {/* an anchor tag which calls the delete function
                        then pushes the user to the animals route as a reset */}

                        <a href="#"
                            onClick={() => this.props.deleteAnimal(animal.id)
                                .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</a>

                            {/* This button has a click event that pushes
                            the user to the edit route */}
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/animals/${animal.id}/edit`);
                            }}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}