import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import SearchBar from '../src/components/SearchBar/SearchBar';

class App extends React.Component {
    render() {
        return (
            <div>
            <h1>Rapoty</h1>
            <div>
            <SearchBar />
            <ListWrapper />
        </div>
        </div>
        );
    }
}

export default App;
