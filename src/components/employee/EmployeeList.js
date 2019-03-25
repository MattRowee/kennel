import React, { Component } from 'react';
import "../animal/Animal.css"
import ResourceCard from "../generics/ResourceCard"

export default class EmployeeList extends Component {
  render() {
    return (
    <React.Fragment>
      <div className="employeeButton">
        <button type="button"
          className="btn btn-success"
          onClick={() => {
            this.props.history.push("/employees/new")
          }
          }>
          Admit Employee
                  </button>
      </div>

      <article>
        <h1>Employees</h1>
        {/* loops through employees and returns a resource card with employees and then maps a matching animal resource card */}
        {this.props.employees.map(singleEmployee => {
          return (
            <div key={singleEmployee.id}>
            <ResourceCard resource={singleEmployee} route="employees" />
            <section>
            {this.props.animals
                  .filter(animal => animal.employeeId === singleEmployee.id)
                  .map(matchingAnimal => {
                    return <ResourceCard key={matchingAnimal.id} resource={matchingAnimal} route="animals" />
                })}
                </section>
                </div>
          )
        })}
     </article>
    </React.Fragment>
    )}}


  // export default class EmployeeList extends Component {
  //   render() {
  //     return (
  //       <React.Fragment>
  //         <div className="employeeButton">
  //           <button type="button"
  //             className="btn btn-success"
  //             onClick={() => {
  //               this.props.history.push("/employees/new")
  //             }
  //             }>
  //             Admit Employee
  //                     </button>
  //         </div>
  //         <section className="employees">
  //             {this.props.employees.map(singleEmployee => (
  //               <ResourceCard key= {singleEmployee.id} resource={singleEmployee} route="employees"/>
  //               <div>
  //                 {this.props.animals
  //                 .filter(animal => animal.employeeId === singleEmployee.id)
  //                 .map(matchingAnimal => {
  //                   return <ResourceCard key={matchingAnimal.id} resource={matchingAnimal} route="animals" />
  //                 })}
  //                 </div>

  //           </section>

  //         </React.Fragment>
  //         )}}
