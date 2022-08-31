import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import AddTasks from '../components/addTasks';
import { TASK_INIT } from '../store/actions';
import Header from '../components/header';
import Tasks from '../components/tasks';
import './App.css';

function App({ tasks, dispatch }) {
    const [api, setApi] = useState([]);

    useEffect(() => {
        const fetchTesks = async () => {
            const { data } = await Axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10")
            setApi(data)
        }
        fetchTesks();

        if (tasks.length === 0) {
            dispatch(TASK_INIT(api))
        }
    }, [api])

    return (
        <div className='container'>
            <Header />
            <AddTasks  />
            <div className='app'>
                <Tasks />
            </div>
        </div>
    );
};

export default connect(state => ({ tasks: state.Reducer }))(App);
