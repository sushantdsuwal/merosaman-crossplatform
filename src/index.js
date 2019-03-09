import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import createStore from './app/store/store';
import bootstrap from './bootstrap';
import { defaultTheme } from './themes';
import App from './App'

const { persistor, store } = createStore();
const onBeforeLift = () => { };
bootstrap(defaultTheme); //Theme

ReactDOM.render(
    <Router>
        <Provider store={store} >
            <PersistGate
                loading={null}
                reac
                onBeforeLift={onBeforeLift}
                persistor={persistor}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <App />
                </SafeAreaView>
            </PersistGate>
        </Provider>
    </Router>,
    document.getElementById('root')
);
