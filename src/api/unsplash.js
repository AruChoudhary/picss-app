import axios from 'axios';

//allows us to create a customized copy of ot that is cistomized just towards making request to some particular urls with ust these headers!
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID RgGdXQNDj3mxQc7eBxc9eJj98M_9TsJr8Ti_Tghs7Yc'
    }
});