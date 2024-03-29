import React, { Component } from 'react';
import "../animal/Animal.css"



export default class LocationDetail extends Component {
    render() {
        /*
            Using the route parameter, find the location that the
            user clicked on by looking at the `this.props.locations`
            collection that was passed down from ApplicationViews
        */
        const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}

        return (
            <section className="location">
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {location.name}
                        </h4>
                        <h6 className="card-title">{location.address}</h6>
                        <a href="#"
                            onClick={() => this.props.deleteLocation(location.id)
                                .then(() => this.props.history.push("/locations"))}
                            className="card-link">Delete</a>

                    </div>
                </div>
            </section>
        )
    }
}