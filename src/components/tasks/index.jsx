import React from 'react';
import { connect } from 'react-redux';

import Task from '../task/index';

function Tasks({ tasks }) {
    return (
        <>
            {tasks.map((task, index) => <Task task={task} key={index} /> )}
        </>
    )
}

export default connect(state => ({ tasks: state.Reducer }))(Tasks);