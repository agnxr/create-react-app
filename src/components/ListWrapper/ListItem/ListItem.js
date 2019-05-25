import React from 'react';
import './ListItem.css';
import { twitterAccounts } from '../../../data/twitterAccounts';

/*
·       Pojedynczy raport, w zależności od liczby plików, które są przy nim, może mieć:

o   link do pobrania pliku,

o   domyślnie zwinięty akordeon otwierający listę plików do pobrania,

o   nic.

files to tablica z obiektami, czyli mierzymy dlygosc tablicy [{},{},{}] lub [{}] lub []
 if item.files.length === 1 {
                pokaz 1 raport

                          "files": [
            {
              "filename": "excepteur",
              "filesize": 691
            }
          ]
            }
            if item.files.length > 1 {
                pokaz akordeon z lista plikow do pobrania

                          "files": [
            {
              "filename": "elit",
              "filesize": 729
            },
            {
              "filename": "dolor",
              "filesize": 959
            },
            {
              "filename": "dolor",
              "filesize": 217
            }
          ]


            } 
            else {
                         "files": []
            }
*/

//przeiteruj po wlasciwosci item.files
/*
twitterAccounts.map((item) => (
    Object.keys(item.filename).length > 1 
));

twitterAccounts.map((item) => (
    <ListItem
        date={new Date(item.date).toLocaleString("pl-PL", options)}
        hour={new Date(item.date).toLocaleString("in-EN", options2)}

        filesize={item.files.filesize}
        category={item.category}
        title={item.title}
        description={item.description}
    />
))
*/

/*
    twitterAccounts.map(item => {
        if(Object.keys(item.files).length === 1 ) {
            //link do pobrania pliku
            return  <a href="#" className="listItem__button">Równo 1</a>
        } else if (Object.keys(item.files).length > 1 ) {
            //domyślnie zwinięty akordeon otwierający listę plików do pobrania,
            return  <a href="#" className="listItem__button">Więcej niz 1</a>
        } else {
            //nic
            return  <a href="#" className="listItem__button">zero...</a> 
        }
        
    });
  
*/
class ListItem extends React.Component {

    render() {
return (
    <li className="listItem__wrapper">
        <div>
            <p>
                {this.props.date}
            </p>
            <p>
                {this.props.hour}
            </p>
            <p>
                {this.props.category}
            </p>
        </div>
        <div>
            <h2 className="listItem__name">
            {this.props.title}
            </h2>
            <p className="listItem__description">
            {this.props.description}
            </p>
            {  this.props.links}
        </div>


    </li>
)
    }
}
export default ListItem;