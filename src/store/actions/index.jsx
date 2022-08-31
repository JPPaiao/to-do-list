export const TASK_INIT = tasks => ({
    type: 'TASK_INIT',
    tasks,
})

export const ADD_TASK = title => ({
    type: 'ADD_TASK',
    title,
})

export const DEL_TASK = id => ({
    type: 'DELETE_TASK',
    id,
})

export const COMPLET_TASK = id => ({
    type: 'COMPLET_TASK',
    id,
})
