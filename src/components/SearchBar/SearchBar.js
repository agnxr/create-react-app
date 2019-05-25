import React from 'react';
import './SearchBar.css';
import Select from './Select/Select';
import { twitterAccounts } from '../../data/twitterAccounts';

//nie na sztywno
const sortByOptions = {
    'Wszystkie': []
};

twitterAccounts.map((item) => (
    sortByOptions[item.category] = item.category
));


class SearchBar extends React.Component {

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}> {sortByOption} </li>;
        });
      }

      
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

    this.handleTermChange  = this.handleTermChange.bind(this);
    this.handleLocationChange  = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    }
    

    //returns the current CSS class for a sorting option -> visual feedback
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } 
        
        return '';
    };

    //set the state of sorting option --> communicate to API

    hadnleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption});
    }

    handleTermChange(event){
        this.setState({term: event.target.value});
    }

    handleLocationChange(event){
        this.setState({ location: event.target.value});
    }

    handleSearch(event){
        if (event.key === 'Enter' || event.type === 'click') {
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
            event.preventDefault(); //prevent the default action of clicking a link from triggering at the end of the method.
        } 
    }
    

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.hadnleSortByChange.bind(this,sortByOptionValue)}>{sortByOption}</li>
        });
      }

    render(){
        return (
            <div className="SearchBar">
     


<Select />  


                <div className="SearchBar-fields">


    
                    <input type="text" onKeyPress={this.handleSearch} onChange={this.handleTermChange} placeholder="Podaj nazwę, datę lub numer raportu..."/>
                    <input onKeyPress={this.handleSearch} onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-sort-options">
                    <p>Sort by:</p>
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-submit">
                    <a href="#list" onClick={this.handleSearch}>Wyszukaj</a>
                </div>
            </div>
        );
    }

}

export default SearchBar;