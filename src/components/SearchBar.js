import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) =>{
    const [term, setTerm] = useState('');

    const onInputChange = (e) =>{
        setTerm(e.target.value);
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search videos</label>
                    <input 
                        type="text" 
                        value={term} 
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;


//CLASS BASED COMPONENT
/*
class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (e) =>{
        this.setState({ term: e.target.value });
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

*/