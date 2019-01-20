import React, {Component} from 'react';
import API from './utils/API';

class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        user: '',
        github: '',
        linkedIn: '',
        brandStatement: '',
        urlLink: '',
        imageLink: '',
        newUser: true
      };

    updateUser = () => this.setState({newUser: this.state.newUser ? false: true});
    
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
    
    handleFormSubmit = event => {
        event.preventDefault();
        if (
            !this.state.newUser &&
            this.state.user &&
            this.state.urlLink &&
            this.state.imageLink
        ) {
            API.postScreenshotLinkData(this.state.user, this.state.imageLink, this.state.urlLink)
                .then(screenshot => {
                    console.log(screenshot);
                    API.updatePortfolioData(this.state.user)
                }).catch(err => console.log(err));
        } else if (
            !this.state.firstName ||
            !this.state.lastName ||
            !this.state.user ||
            !this.state.github ||
            !this.state.linkedIn ||
            !this.state.brandStatement ||
            !this.state.urlLink ||
            !this.state.imageLink
        ) {
            alert('Please complete the entire form');
        } else {
            API.postScreenshotLinkData(
                this.state.user, this.state.imageLink, this.state.urlLink
            ).then(screenshot => {
                console.log(screenshot);
                API.postPortfolioData(
                    this.state.firstName,
                    this.state.lastName,
                    this.state.user,
                    this.state.gitHub,
                    this.state.linkedIn,
                    this.state.brandStatement,
                    // need to check if the create method above will return _id
                    screenshot
                ).then(portfolio => console.log(portfolio)).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }
    
        this.setState({
            firstName: '',
            lastName: '',
            user: '',
            github: '',
            linkedIn: '',
            brandStatement: '',
            urlLink: '',
            imageLink: ''
        });
      };
    
    render() {
        return this.state.newUser ? (
            <div>
                <p>
                    {this.state.firstName + ' ' + this.state.lastName}
                </p>
                <form className="form">
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        value={this.state.user}
                        name="user"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        value={this.state.github}
                        name="github"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="GitHub account"
                    />
                    <input
                        value={this.state.linkedIn}
                        name="linkedIn"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="URL to linkedIn Profile"
                    />
                    <input
                        value={this.state.brandStatement}
                        name="brandStatement"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Brand Statement"
                    />
                    <input
                        value={this.state.urlLink}
                        name="urlLink"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Link to a Web App"
                    />
                    <input
                        value={this.state.imageLink}
                        name="imageLink"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Link to an Image of Web App"
                    />
                <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                <button onClick={this.updateUser}>Already have an account?</button>
            </div>
        ) : (
            <div>
                <form className="form">
                    <input
                        value={this.state.user}
                        name="user"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        value={this.state.urlLink}
                        name="urlLink"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Link to a Web App"
                    />
                    <input
                        value={this.state.imageLink}
                        name="imageLink"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Link to an Image of Web App"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                <button onClick={this.updateUser}>Don't have an account?</button>
            </div>
        );
      }
}

export default Form;
