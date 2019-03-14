
import React, {Component} from 'react';

export default class Locations extends Component {
    render() {
        return (
          <article>
            <h1>Locations</h1>
            {this.props.locations.map(location => {
              return <div key={location.id}>
              {location.name}
              <p>{location.address}</p>
              </div>
            })}
          </article>
        );
      }
    }



