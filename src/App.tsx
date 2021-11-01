import React from 'react';
import UserList from './components/UserList';
import Todolist from './components/Todolist';

const App = () => {
    return (
        <div>
            <UserList/>
            <hr/>
            <Todolist/>
        </div>
    );
};

export default App;