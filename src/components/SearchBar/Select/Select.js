import React from 'react';
import { twitterAccounts } from '../../../data/twitterAccounts';

const yrs = [];

twitterAccounts.map((item) => (
    yrs.push(new Date(item.date).toLocaleString("pl-PL", { year: 'numeric'}))
));

//sort array

function sort(a, b) {
    return b - a;
  }
  yrs.sort(sort);
  
 //remove duplicates 
  const uniq = yrs.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);



class Select extends React.Component {
    renderYrs() {
        return uniq.map(year => {
            let yearValue = year;
            return <option key={yearValue}> {year} </option>;
        });
      }

    constructor(props) {
      super(props);
      this.state = {value: '2019'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Wybrales rok...: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {

        
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Wybierz rok:
            <select value={this.state.value} onChange={this.handleChange}>

           
       {this.renderYrs()}
    
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  

export default Select;