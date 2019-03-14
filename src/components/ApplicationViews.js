import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"

import Login from './authentication/login'
import Register from './authentication/registration';

import LocationManager from '../modules/LocationManager'
import LocationList from './location/LocationList'

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

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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
        <Route path="/login" render={props => {
          return <Login {...props} />
        }} />

        <Route path="/registration" component={Register} />
        <Route exact path="/" render={(props) => {

          return <LocationList locations={this.state.locations} />
        }} />
        {/* look at all this new authentication code! */}
        <Route exact path="/animals" render={(props) => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props}
              animals={this.state.animals} />;
          }
          else { return <Redirect to="/login" /> }
        }} />

        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props}
            addAnimal={this.addAnimal}
            employees={this.state.employees} />
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail {...props}
            deleteAnimal={this.deleteAnimal}
            animals={this.state.animals} />
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm
            {...props}
            employees={this.state.employees}
            updateAnimal={this.updateAnimal}
            />
          }}
        />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList {...props}
            employees={this.state.employees} />
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props}
            addEmployee={this.addEmployee}
            employees={this.state.employees} />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail {...props}
            deleteEmployee={this.deleteEmployee}
            employees={this.state.employees} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnerList {...props}
            owners={this.state.owners} />
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props}
            addOwner={this.addOwner}
            owners={this.state.owners}
            animals={this.state.animals}
          />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail {...props}
            deleteOwner={this.deleteOwner}
            owners={this.state.owners} />
        }} />

      </div>
    )
  }


}


export default ApplicationViews