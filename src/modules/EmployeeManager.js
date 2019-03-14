const remoteURL = "http://localhost:5002"

export default {
    getEmployee(id) {
        return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
    },
    getAll: () => {
        return fetch("http://localhost:5002/employees").then(employees =>
          employees.json()
        );
      },
      deleteEmployee: id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
          method: "DELETE"
        })
          .then(() => fetch(`http://localhost:5002/employees`))
          .then(e => e.json());
      },
      postEmployee(newEmployee) {
        return fetch(`${remoteURL}/employees`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newEmployee)
        }).then(data => data.json())
      }
    };
