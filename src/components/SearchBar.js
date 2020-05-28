import React from 'react';



const SearchBar = (props) => {
    const [searchTerm,setSearchTerm] = React.useState('');


    const onFormSubmit = (event) => {
       
        event.preventDefault();
        props.Submit(searchTerm);
    }

    


    return (
        <div className="ui search search-bar">
            <form onSubmit={onFormSubmit} className="ui form">
                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </form>
        </div>


    )


}


export default SearchBar;