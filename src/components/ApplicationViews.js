import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"

import Login from './authentication/login'

import LocationManager from '../modules/LocationManager'
import LocationList from './location/LocationList'
import LocationForm from './location/LocationForm'
import LocationDetail from './location/LocationDetail'

import OwnerList from './owner/OwnerList'
import OwnerForm from './owner/OwnerForm'
import OwnerManager from '../modules/OwnerManager'
import OwnerDetail from './owner/OwnerDetail'

import AnimalList from './animal/AnimalList'
import AnimalManager from '../modules/AnimalManager'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'

import EmployeeManager from '../modules/EmployeeManager'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm'
import EmployeeDetail from './employee/EmployeeDetail'


class ApplicationViews extends Component {


  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: []
  };

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null  ||localStorage.getItem("credentials") !== null;

  deleteAnimal = id => {
    return AnimalManager.deleteAnimal(id).then(animals =>
      this.setState({
        animals: animals
      })
    );
  };

  addAnimal = animalObject =>
    AnimalManager.postAnimal(animalObject)
      .then(() => AnimalManager.getAll())
      .then(animals =>
        this.setState({
          animals: animals
        })
      );

  updateAnimal = editedAnimalObject => {
    return AnimalManager.put(editedAnimalObject)
      .then(() => AnimalManager.getAll())
      .then(animals => {
        this.setState({
          animals: animals
        })
      });
  };
  registerEmployee = employeeObject =>
    EmployeeManager.postEmployee(employeeObject);

  refreshEmployees = () =>
    EmployeeManager.getAll().then(parsedEmps => {
      this.setState({ employees: parsedEmps });
    });

  deleteEmployee = id => {
    return EmployeeManager.deleteEmployee(id).then(employees =>
      this.setState({
        employees: employees
      })
    );
  };
  addEmployee = employeeObject =>
    EmployeeManager.postEmployee(employeeObject)
      .then(() => EmployeeManager.getAll())
      .then(employees =>
        this.setState({
          employees: employees
        })
      );

  deleteOwner = id => {
    return OwnerManager.deleteOwner(id).then(owners =>
      this.setState({
        owners: owners
      })
    );
  };
  addOwner = ownerObject =>
    OwnerManager.postOwner(ownerObject)
      .then(() => OwnerManager.getAll())
      .then(owners =>
        this.setState({
          owners: owners
        })
      );
      deleteLocation = id => {
        return LocationManager.deleteLocation(id).then(locations =>
          this.setState({
            locations: locations
          })
        );
      };
      addLocation = locationObject =>
        LocationManager.postLocation(locationObject)
          .then(() => LocationManager.getAll())
          .then(locations =>
            this.setState({
              locations: locations
            })
          );



  componentDidMount() {
    const newState = {}

    AnimalManager.getAll()
      .then(animals => (newState.animals = animals))
      .then(OwnerManager.getAll)
      .then(owners => (newState.owners = owners))
      .then(EmployeeManager.getAll)
      .then(employees => (newState.employees = employees))
      .then(LocationManager.getAll)
      .then(locations => (newState.locations = locations))
      .then(() => this.setState(newState));
  }

  render() {

    return (
      <div className="navBeast">
        <Route
          path="/login"
          render={props => {
            return <Login {...props} />
          }} />
 {/* ///////////////////////////////////////////////////////
                            LOCATION ROUTES
        /////////////////////////////////////////////////////// */}
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) {
              return <LocationList locations={this.state.locations} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

<Route
          exact
          path="/locationss"
          render={props => {
            return this.isAuthenticated() ? (
              <LocationList {...props} locations={this.state.locations} />
            ) : (
                <Redirect to="/login" />
              );
          }}
        />

        <Route
          path="/locations/new"
          render={(props) => {
            return this.isAuthenticated() ? (
               <LocationForm {...props}
              addLocation={this.addLocation}/>
            ) : (
              <Redirect to="/login"/>
            )
          }} />
        <Route
          exact path="/locations/:locationId(\d+)"
          render={(props) => {
            return this.isAuthenticated() ? (
              <LocationDetail {...props}
              deleteLocation={this.deleteLocation}
              locations={this.state.locations} />
            ) :(
              <Redirect to="/login"/>
            )
          }} />

        {/* look at all this new authentication code! */}
        {/* <Route
          exact path="/animals"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <AnimalList {...props}
                animals={this.state.animals} />;
            }
            else { return <Redirect to="/login" /> }
          }} /> */}

           {/* ///////////////////////////////////////////////////////
                            ANIMAL ROUTES
        /////////////////////////////////////////////////////// */}
        <Route
          exact
          path="/animals"
          render={props => {
            return this.isAuthenticated() ? (
              <AnimalList {...props} animals={this.state.animals} />
            ) : (
                <Redirect to="/login" />
              );
          }}
        />

        <Route
          exact path="/animals/new"
          render={(props) => {
            return this.isAuthenticated() ? (
               <AnimalForm {...props}
              addAnimal={this.addAnimal}
              employees={this.state.employees} />
            ) : (
              <Redirect to="/login"/>
            )
          }} />
        <Route
          exact path="/animals/:animalId(\d+)"
          render={(props) => {
            return this.isAuthenticated() ? (
              <AnimalDetail {...props}
              deleteAnimal={this.deleteAnimal}
              animals={this.state.animals} />
            ) :(
              <Redirect to="/login"/>
            )
          }} />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={props => {
            return <AnimalEditForm
              {...props}
              employees={this.state.employees}
              updateAnimal={this.updateAnimal}
            />
          }}
        />

         {/* ///////////////////////////////////////////////////////
                            EMPLOYEE ROUTES
        /////////////////////////////////////////////////////// */}
        <Route
          exact path="/employees"
          render={props => {
            return this.isAuthenticated() ? (
              <EmployeeList employees={this.state.employees}
              animals ={this.state.animals}/>
            ) : (
                <Redirect to="/login" />
              );
          }}
        />
        <Route exact path="/employees/new"
          render={(props) => {
            return this.isAuthenticated() ? (
              <EmployeeForm {...props}
              addEmployee={this.addEmployee}
              employees={this.state.employees} />
            ) : (
              <Redirect to="/login" />
            )
          }} />
        <Route exact path="/employees/:employeeId(\d+)"
          render={(props) => {
            return this.isAuthenticated() ? (
              <EmployeeDetail {...props}
              deleteEmployee={this.deleteEmployee}
              employees={this.state.employees} />
            ) : (
                <Redirect to="/login"/>
            )
          }} />


         {/* ///////////////////////////////////////////////////////
                            REGISTER ROUTES
        /////////////////////////////////////////////////////// */}
           <Route
          exact path="/register"
          render={props => {
            return (
              <EmployeeForm
                {...props}
                addEmployee={this.addEmployee}
                registerEmployee={this.registerEmployee}
                refreshEmployees={this.refreshEmployees}
              />
            );
          }}
        />

        {/* ///////////////////////////////////////////////////////
                            OWNER ROUTES
        /////////////////////////////////////////////////////// */}
        <Route
          exact path="/owners"
          render={props => {
            return this.isAuthenticated() ? (
              <OwnerList {...props} owners={this.state.owners} />
            ) : (
                <Redirect to="/login" />
              );
          }}
        />

<Route exact path="/owners/new"
  render={(props) => {
    return this.isAuthenticated() ? (
    <OwnerForm {...props}
      addOwner={this.addOwner}
      owners={this.state.owners}
      animals={this.state.animals}
    />
    ) : (
      <Redirect to="/login" />
    )
  }} />
  <Route exact path="/owners/:ownerId(\d+)"
    render={(props) => {
      return <OwnerDetail {...props}
        deleteOwner={this.deleteOwner}
        owners={this.state.owners} />
    }} />

      </div >
    )
  }
}


export default ApplicationViews