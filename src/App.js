import React from 'react';
import './App.css';
import reports from './data/reports';
// z braku laku istniających userów definiuję po prostu jako stałą
// w prawdziwej aplikacji pochodziliby z API i/lub byli w Reduksowym storze 
//const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];
let users = []; //{...}, {...}, {...}

reports.map((item) => (
    users.push(item)
));

console.log(users);

class App extends React.Component {
  constructor() {
    super();    
    
    this.state = {
      //filteredUsers: allUsers
      filteredUsers: users,

    };
  }

  filterUsers(e) {
    const text = e.currentTarget.value; //wpisana wartosc
    const filteredUsers = this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    })
  }
  
  getFilteredUsersForText(text) {
    
    //po tytule lub opisie
 return reports.filter(x => x.title.toLowerCase().includes(text.toLowerCase()) || x.description.toLowerCase().includes(text.toLowerCase()))
//po opisie
//return reports.filter(x => x.description.toLowerCase().includes(text.toLowerCase()))
   // return reports.filter(x => x.title.toLowerCase().includes(text.toLowerCase())) 

  // return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }
  
  render () {
    return (
      <div>
        
        <input onInput={this.filterUsers.bind(this)} />
        <UsersList users={this.state.filteredUsers} />
        
      </div>
    );
  }
};

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

const UsersList = ({ users }) => {
  if (users.length > 0) {
    return (
      <ul>
        {users.map(item => 
            <ListItem key={item}
            category={item.category}
            title={item.title}
            description={item.description}/>
        )}
        
      </ul>
    );
  }

  return (
    <p>No results!</p>
  );
};

export default App;
