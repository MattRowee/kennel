import React, {Component} from "react"

export default class registration extends Component {

    state = {
        name: "",
        breed:"",
        careTaker:"",
        owner:"",
        email:"",
        password:""
}

handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}


render() {
    return (
        <form>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputAnimalName">
                Name
            </label>
            <input onChange={this.handleFieldChange} type="text"
                   id="animalName"
                   placeholder="What's your name?"
                   required="" autoFocus="" />

            <label htmlFor="inputBreed">
                Breed
            </label>
            <input onChange={this.handleFieldChange} type="text"
                   id="breed"
                   placeholder="What kind of creature are you?"
                   required="" autoFocus="" />

            <label htmlFor="inputCaretaker">
                Care Taker
            </label>
            <input onChange={this.handleFieldChange} type="text"
                   id="careTaker"
                   placeholder="Who is your resident care taker?"
                   required="" autoFocus="" />

            <label htmlFor="inputOwner">
                Owner
            </label>
            <input onChange={this.handleFieldChange} type="text"
                   id="owner"
                   placeholder="Who owns ya?"
                   required="" autoFocus="" />

            <label htmlFor="inputEmail">
                Email address
            </label>
            <input onChange={this.handleFieldChange} type="email"
                   id="email"
                   placeholder="Email address"
                   required="" autoFocus="" />
            <label htmlFor="inputPassword">
                Password
            </label>
            <input onChange={this.handleFieldChange} type="password"
                   id="password"
                   placeholder="Password"
                   required="" />
            <button id="login">Login</button>
            <button id="logout">Logout</button>
        </form>
    )
}
}