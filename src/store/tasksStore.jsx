import { v4 as uuidv4 } from "uuid";

function Reducer(state = [], action) {
    switch (action.type) {
        case "TASK_INIT":
            return (state = action.tasks);
        case "COMPLET_TASK":
            return state.map((task) => {
                if (task.id === action.id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
        case "DELETE_TASK":
            return state.filter((task) => task.id !== action.id);
        case "ADD_TASK":
            return [
                ...state,
                {
                    id: uuidv4(),
                    title: action.title,
                    completed: false,
                },
            ];
        default:
            return state;
    }
}

export default Reducer;
