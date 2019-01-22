import axios from 'axios';

export default {
    getPortfolioData: (user = 'jjge732@gmail.com') => axios.get('/api/portfolios/' + user),
    updatePortfolioData: (user, referenceId) => axios.put('/api/portfolios/' + user, {screenshotLinks: referenceId}),
    postScreenshotLinkData: (user, imageLink, urlLink) => {
        return axios.post('/api/screenshotLinks/', {
            user: user,
            imageLink: imageLink,
            urlLink: urlLink
        });
    },
    postPortfolioData: (firstName, lastName, user, gitHub, linkedIn, brandStatement, screenshot) => {
        return axios.post('/api/portfolios/', {
            firstName: firstName,
            lastName: lastName,
            user: user,
            gitHub: gitHub,
            linkedIn: linkedIn,
            brandStatement: brandStatement,
            // need to check if the create method above will return _id
            screenshotLinks: screenshot
        });
    }
}