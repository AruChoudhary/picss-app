import React from 'react';


class SearchBar extends React.Component {

    state = {term : ''}; //every time user input, we'll update our state

    // //This method should be called any time the user changes text inside input.
    // //onChange is very important property name which we are using as props in render(). We CANNOT CHANGE it.
    // //We do not want to call this every time the component is rendered. Hence, while calling we do not use ()
    // //callback function - we can name it anything

    // onInputChange(event) {

    //     //We can also directly use it inside render() using arrow functions if only there is one line of code.
    //     console.log(event.target.value); //print whatever is typed in input on console
    // }


    onFormSubmit = (event) => {
        event.preventDefault(); //will stop the browser from trying to submit the form automatically and in the process refresh the page.
        //console.log(this.state.term); //present value of input
        this.props.onSubmit(this.state.term); //providing reference to the prop created in app.js
    }


    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term:e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;