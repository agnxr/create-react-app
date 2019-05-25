import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';


class ListWrapper extends React.Component {


    //nie moze byc pobrany tylko 1 accordion tylko accordion od konkretnego
    showAccordion(){
        const acc = document.querySelector(".accordion");
    acc.classList.toggle("active");
    
    const panel = document.querySelector(".panel");
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
 
}


    render() {

        var options = { day: 'numeric', month: 'numeric', year: 'numeric'}
        var options2 = { hour: 'numeric', minute: 'numeric'}
        return (
    <ul className="listWrapper__wrapper">
        {twitterAccounts.map((item) => (
        
            <ListItem
                date={new Date(item.date).toLocaleString("pl-PL", options)}
                hour={new Date(item.date).toLocaleString("in-EN", options2)}

                filesize={item.files.filesize}
                category={item.category}
                title={item.title}
                description={item.description}
                links={

  Object.keys(item.files).length > 1 ? 
  <div>
        <a href="#" className="listItem__button">Zobacz raport</a>
        <div>
  <a onClick={this.showAccordion} className="accordion listItem__button">Pliki do pobrania ({Object.keys(item.files).length })</a> 
  <div className="panel">
{
item.files.map((link) => (

    <a href="#" className="listItem__button">{link.filename} ({link.filesize} kB) </a> 

))
}
</div>

  </div>
  </div>
  : 
  Object.keys(item.files).length === 1 ?
  <div>
        <a href="#" className="listItem__button">Zobacz raport</a>
        <a href="#" className="listItem__button">Pobierz raport.pdf ({
    item.files[0].filesize} kB)</a>
  </div>
  : 
  <a href="#" className="listItem__button">Zobacz raport</a>
                        
                        
                
                }
            />
        ))
        }
    </ul>
)
            }}
export default ListWrapper;