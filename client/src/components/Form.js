import React, {Component} from 'react';
import API from './utils/API';

class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        user: '',
        gitHub: '',
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
            API.postScreenshotLinkData(this.state.user.trim(), this.state.imageLink.trim(), this.state.urlLink.trim())
                .then(screenshot => {
                    console.log(screenshot);
                    API.updatePortfolioData(this.state.user, screenshot.data._id)
                        .then(data => {
                            console.log(data)
                            window.location.replace('/' + this.state.user);
                        })
                        .catch(err => console.log(err));
                }).catch(err => console.log(err));
        } else if (
            !this.state.firstName ||
            !this.state.lastName ||
            !this.state.user ||
            !this.state.brandStatement ||
            !this.state.urlLink ||
            !this.state.imageLink
        ) {
            alert('Please complete the entire form');
        } else {
            API.postScreenshotLinkData(
                this.state.user, this.state.imageLink, this.state.urlLink
            ).then(screenshot => {
                API.postPortfolioData(
                    this.state.firstName.replace(/[^a-z]/ig, ''),
                    this.state.lastName.replace(/[^a-z]/ig, ''),
                    this.state.user.trim(),
                    this.state.gitHub.trim(),
                    this.state.linkedIn.trim(),
                    this.state.brandStatement.replace(/[^a-z.!]/ig, ' '),
                    // need to check if the create method above will return _id
                    screenshot.data._id
                ).then(() => {
                    window.location.replace('/' + this.state.user);
                    this.setState({
                        firstName: '',
                        lastName: '',
                        user: '',
                        gitHub: '',
                        linkedIn: '',
                        brandStatement: '',
                        urlLink: '',
                        imageLink: ''
                    });
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }
    };
    render() {
        return this.state.newUser ? (
            <div id='form'>
                <h5>
                    Thanks for signing up{this.state.firstName && this.state.lastName ? ' ' + this.state.firstName + ' ' + this.state.lastName + '!': '!'}
                </h5>
                <form>
                    <h5>
                        What is your first name?
                    </h5>
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="John"
                    />
                    <h5>
                        What is your last name?
                    </h5>
                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Eastwood"
                    />
                    <h5>
                        What is your e-mail address?
                    </h5>
                    <input
                        value={this.state.user}
                        name="user"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="jjge732@gmail.com"
                    />
                    <h5>
                        Please provide a link to your GitHub profile page
                    </h5>
                    <input
                        value={this.state.gitHub}
                        name="gitHub"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="https://github.com/jjge732"
                    />
                    <h5>
                        Please provide a link to your LinkedIn profile page
                    </h5>
                    <input
                        value={this.state.linkedIn}
                        name="linkedIn"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="https://www.linkedin.com/in/john-eastwood-40b207173/"
                    />
                    <h5>
                        What is your Brand Statement?
                    </h5>
                    <textarea
                        id="brandStatement"
                        value={this.state.brandStatement}
                        name="brandStatement"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Enthusiastic Full Stack Web Developer with a background in biochemistry and a passion for interactive, user-friendly web design. Superb at collaborating ideas with colleagues so everyone’s opinion is heard while ensuring projects are completed on time. Inventive problem-solver and tireless worker at any task. 

                        I have experience with Node.js, React, vanilla JavaScript, jQuery, CSS, and HTML through study at Northwestern’s Coding Bootcamp as well as independent practice. Strengths include general coding logic, API integration, and adaptability to any new task. Currently learning Python and better ways to write code. Always enthusiastic to learn new ways of accomplishing objectives. My coding and interpersonal skills will undoubtedly help any team design and output amazing products in a timely manner."
                    />
                    <h5>
                        Please provide a link to one of your projects
                    </h5>
                    <input
                        value={this.state.urlLink}
                        name="urlLink"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="https://ancient-wave-72500.herokuapp.com/"
                    />
                    <h5>
                        Please provide a link to an image to represent your project
                    </h5>
                    <input
                        value={this.state.imageLink}
                        name="imageLink"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="https://images.pexels.com/photos/"
                    />
                <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                <button onClick={this.updateUser}>Already have an account?</button>
            </div>
        ) : (
            <div id="form">
                <form>
                    <h5>
                        What is your e-mail address?
                    </h5>
                    <input
                        value={this.state.user}
                        name="user"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="jjge732@gmail.com"
                    />
                    <h5>
                        Please provide a link to one of your projects
                    </h5>
                    <input
                        value={this.state.urlLink}
                        name="urlLink"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="https://ancient-wave-72500.herokuapp.com/"
                    />
                    <h5>
                        Please provide a link to an image to represent your project
                    </h5>
                    <input
                        value={this.state.imageLink}
                        name="imageLink"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="https://images.pexels.com/photos/"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                <button onClick={this.updateUser}>Don't have an account?</button>
            </div>
        );
      }
}

export default Form;
