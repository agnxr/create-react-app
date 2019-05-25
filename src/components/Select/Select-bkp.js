import React from 'react';
import './SearchBar.css';
import { twitterAccounts } from '../../../data/twitterAccounts';

const yrs = [];

twitterAccounts.map((item) => (
    yrs.push(new Date(item.date).toLocaleString("pl-PL", options))
));

class Select extends React.Component {
    renderYrs() {
        return yrs.map(year => {
            let yearValue = year;
            return <option key={yearValue}> {year} </option>;
        });
      }

    render() {

        var options = { year: 'numeric'}

        return (
    <select className="listWrapper__wrapper">
       {this.renderYrs()}
    </select>
)
            }}

export default Select;