import { CgClose, CgInfo } from "react-icons/cg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import { COMPLET_TASK, DEL_TASK } from "../../store/actions";
import "./style.css";

function Task({ task, dispatch }) {
    const removeTask = (id) => {
        dispatch(DEL_TASK(id));
    };

    const taskComplet = (id) => {
        dispatch(COMPLET_TASK(id));
    };

    return (
        <div
            className="tasks-cont"
            onClick={() => taskComplet(task.id)}
            style={task.completed ? { borderLeft: "6px solid #82ff45" } : {}}
        >
            <div className="task-title">{task.title}</div>
            <div className="cont-buts">
                <div className="buttons-container">
                    <Link to={`/detalhes/${task.title}`} key={task.title}>
                        <button className="detalhes-task">
                            <CgInfo />
                        </button>
                    </Link>
                </div>
                <div
                    className="buttons-container"
                    onClick={() => removeTask(task.id)}
                >
                    <button className="remove-task">
                        <CgClose />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default connect((state) => ({ state: state.Reducer }))(Task);
