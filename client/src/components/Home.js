import React, {Component} from 'react';
import LandingImageContainer from './LandingImageContainer';
import BrandStatement from './BrandStatement';
import Portfolio from './Portfolio';
import Footer from './Footer';
import axios from 'axios';

class Home extends Component {
    state = {
        loading: true
    };
    render() {
        axios.get('/api/portfolios/')
            .then(res => {
                this.setState(res.data[1])
            })
            .catch(err => console.log(err));
        return this.state.firstName ? (
            <div>
                <LandingImageContainer name={this.state.firstName + ' ' + this.state.lastName}/>
                <BrandStatement statement={this.state.brandStatement}/>
                <Portfolio />
                <Footer />
            </div>
        ) : (
            <div>
            </div>
        );
    }
}

export default Home;