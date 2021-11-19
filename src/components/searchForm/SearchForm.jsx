import React from 'react';
import useSelect from '../../hooks/useSelect';
import './SearchForm.css';

const SearchForm = ({ updateCategory }) => {
    const OPTIONS = [
        { value: "general", label: "General" },
        { value: "business", label: "Business" },
        { value: "entertainment", label: "Entertainment" },
        { value: "health", label: "Health" },
        { value: "science", label: "Science" },
        { value: "sports", label: "Sports" },
        { value: "technology", label: "Technology" }
    ];

    // Custom hooks
    const [ category, SelectNews ] = useSelect("general", OPTIONS);

    // On submit send category to the App.js
    const searchNew = e => {
        e.preventDefault();

        updateCategory(category);
    }

    return (  
        <div className="container">
            <div className="search">
                <form
                    onSubmit={searchNew}
                >
                    
                    <h2 className="searchTitle">Search by category</h2>
                    <div className="searchSelect">
                    <SelectNews />
                    <input 
                            type="submit"
                            className="btn" 
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchForm;
