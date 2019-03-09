//web start point
import React, { Component } from 'react'
import { View } from 'react-native';
import MainApp from './app/App'

class App extends Component {
    render() {
        return (
            <View style={{ height: '100vh', backgroundColor: 'red' }}>
                <MainApp />
            </View>
        )
    }
}

export default App;
