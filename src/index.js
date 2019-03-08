import * as React       from 'react';
import * as ReactDOM    from 'react-dom';

import {
    createStore, applyMiddleware
}                       from 'redux'
import { Provider }     from 'react-redux'
import thunk            from 'redux-thunk';
import rootReducer      from './reducers';

import api              from './api';
import App              from './components/App';

const appStore          = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)));

ReactDOM.render(
    <Provider store={appStore}>
        <App />
    </Provider>
    , document.getElementById('app'));