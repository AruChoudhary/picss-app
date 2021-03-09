import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{

    state = {images: []}; // empty array of response.data.result

    // onSearchSubmit(term){
    //     //This will make a request to unsplash api.
    //     //promise is an object which will notify us when some amount of work i.e., network request is completed!
    //     //(root url of api to access it/search/photos, object that allows us to configure request)
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query: term},
    //         headers: {
    //             Authorization: 'Client-ID RgGdXQNDj3mxQc7eBxc9eJj98M_9TsJr8Ti_Tghs7Yc'
    //         }
    //     }).then((response)=>{
    //         console.log(response.data.results);
    //     });

    //     //console.log(term);
    // }

    //-------------------OR------------------

    onSearchSubmit = async (term) => {
        //This will make a request to unsplash api.
        //promise is an object which will notify us when some amount of work i.e., network request is completed!
        //(root url of api to access it/search/photos, object that allows us to configure request)
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
            //put inside axios.create
            // headers: {
            //     Authorization: 'Client-ID RgGdXQNDj3mxQc7eBxc9eJj98M_9TsJr8Ti_Tghs7Yc'
            // }
        });

        //this will allow our component to rerender
        this.setState({images : response.data.results});
        //console.log(response.data.results);
    }


    render() {
        return (
            <div className="ui container" style={{marginTop : '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;