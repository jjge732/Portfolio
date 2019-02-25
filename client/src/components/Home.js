import React, {Component} from 'react';
import LandingImageContainer from './LandingImageContainer';
import BrandStatement from './BrandStatement';
import Portfolio from './Portfolio';
// import CreatePortfolioButton from './CreatePortfolioButton';
import Footer from './Footer';
import API from './utils/API';

class Home extends Component {
    state = {};
    componentDidMount() {
        API.getPortfolioData(this.props.match.params.user)
            .then(res => this.setState(res.data[0]))
            .catch(err => console.log(err));
    }
    render() {
        return this.state.firstName ? (
            <div>
                <LandingImageContainer name={this.state.firstName + ' ' + this.state.lastName}/>
                <BrandStatement statement={this.state.brandStatement} />
                <Portfolio screenshotLinks={this.state.screenshotLinks} />
                {/* <CreatePortfolioButton /> */}
                <Footer gitHub={this.state.gitHub} linkedIn={this.state.linkedIn}/>
            </div>
        ) : (
            <div/>
        );
    }
}

export default Home;