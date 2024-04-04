import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid bg-light text-center bg-md-dark bg-lg-primary">
        <h1 className="display-4">To-Do List</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <TaskInput />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
          
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;


