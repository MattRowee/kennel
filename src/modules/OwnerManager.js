const remoteURL = "http://localhost:5002"

export default {
    getOwner(id) {
        return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
    },
    getAll: () => {
        return fetch("http://localhost:5002/owners").then(owners =>
          owners.json()
        );
      },
      deleteOwner: id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
          method: "DELETE"
        })
          .then(() => fetch(`http://localhost:5002/owners`))
          .then(e => e.json());
      },
      postOwner(newOwner) {
        return fetch(`${remoteURL}/owners`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newOwner)
        }).then(data => data.json())
      }
    };