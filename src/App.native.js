import React, { Component } from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import createStore from './app/store/store';
import bootstrap from './bootstrap';
import { defaultTheme } from './themes';
import MainApp from './app/App';
import EStyleSheet from 'react-native-extended-stylesheet'

const { persistor, store } = createStore();
const onBeforeLift = () => { };
bootstrap(defaultTheme); //Theme

class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <PersistGate
                    loading={null}
                    reac
                    onBeforeLift={onBeforeLift}
                    persistor={persistor}
                >
                    <SafeAreaView style={{ flex: 1 }}>
                        <StatusBar
                            backgroundColor={"#FFF"}
                            barStyle="light-content"
                            backgroundColor={EStyleSheet.value('$AppBarColor')}
                        />
                        <MainApp />
                    </SafeAreaView>
                </PersistGate>
            </Provider>
        )
    }
}

export default App;
