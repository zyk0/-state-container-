import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'; //
import {createStore} from 'redux'; //
import allReducers from './reducers';
import WebPage from "./components/WebPage";

const store = createStore(allReducers);
//
// 

//подписка на store
store.subscribe(() => {
	console.log('subscribe: ', store.getState());
})

//
ReactDOM.render(
	<Provider store={store}>
		<WebPage />
	</Provider>,
	document.getElementById('helic')
);
