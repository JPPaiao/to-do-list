import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore } from 'redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskDetalhes from './components/taskDetalhes';
import { Provider } from 'react-redux';
import rootReducer from './store';
import App from './app/App';
import './index.css';

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<App />} />
                <Route path='detalhes' element={<TaskDetalhes />}>
                    <Route path=':taskTitle' element={<TaskDetalhes />} />
                </Route>
                <Route path='*'
                element={
                    <>
                        <h1>Sem rotas</h1>
                    </>
                }>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
