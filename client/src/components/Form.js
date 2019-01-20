import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    state = {
        breed: "",
      };
    
      handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
    
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.breed) {
          alert("Fill out your first and last name please!");
        } else {
            alert(`Hello ${this.state.breed}`);
            axios.post('/api/screenshotLinks', {
                user: this.state.user,
                imageLink: this.state.imageLink,
                urlLink: this.state.urlLink
            }).then(screenshot => {
                axios.post('/api/portfolios/', {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    user: this.state.user,
                    gitHub: this.state.gitHub,
                    linkedIn: this.state.linkedIn,
                    brandStatement: this.state.brandStatement,
                    // need to check if the create method above will return _id
                    screenshotLinks: screenshot
                }).then(portfolio => console.log(portfolio)).catch(err => console.log(err));
            }).catch(err => console.log(err));
            }
    
        labrador.getBreedImages(this.state.breed).then(breed => this.setState({breedImage: breed.data.message[Math.floor(Math.random() * 99)]}));
        this.setState({
          breed: "",
        });
      };
    
      render() {
        return (
          <div>
            <p>
                {this.state.breed}
            </p>
            <img src={this.state.breedImage}/>
            <form className="form">
              <input
                value={this.state.breed}
                name="breed"
                onChange={this.handleInputChange}
                type="text"
                placeholder="First Name"
              />
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        );
      }
}

export default Form;

class Form extends Component {
  // Setting the component's initial state
  
}