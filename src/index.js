import ReactDOM from 'react-dom/client';
import React from 'react';
import App from 'src/App';
import { Provider } from "react-redux";
import { store } from "src/redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);