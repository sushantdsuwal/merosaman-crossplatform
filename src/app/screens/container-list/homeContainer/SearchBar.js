import React, { Component } from 'react'
import { View, TextInput } from 'react-native';
import styles from './styles';

export default class SearchBar extends Component {
    state = {}
    render() {
        return (
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <TextInput
                        style={{ flex: 1, padding: 5 }}
                        placeholder="What would you like to buy?"
                    />
                </View>
            </View>
        )
    }
}