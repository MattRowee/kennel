const remoteURL = "http://localhost:5002"
    export default {
        getAll: () => {
          return fetch("http://localhost:5002/locations").then(employees =>
            employees.json()
          );
        },
        deleteLocation: id => {
          return fetch(`${remoteURL}/locations/${id}`, {
            method: "DELETE"
          })
            .then(() => fetch(`${remoteURL}/locations`))
            .then(e => e.json());
        },
        postLocations(newLocation) {
          return fetch(`${remoteURL}/locations`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newLocation)
          }).then(data => data.json())

        }

      };



