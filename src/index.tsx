import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

i18next.init({
    lng: "es",
    interpolation: {escapeValue: false},
    resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        }
    }
});

ReactDOM.render(
    <Provider store={store}>
       <I18nextProvider i18n={i18next}>
            <App/>
       </I18nextProvider>
    </Provider>, 
    document.getElementById('root')
);