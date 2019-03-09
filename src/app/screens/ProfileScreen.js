import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Avatar, Container, ToolBar } from "../components";
import EStyleSheet from 'react-native-extended-stylesheet';
import { RegExr } from "../services";

class ProfileScreen extends Component {
    render() {
        const user = {
            fullname: 'sushant suwal',
            email: 'sushantdsuwal@gmail.com'
        }
        return (
            <Container>
                <ToolBar
                    title={"Profile"}
                />
                <View style={styles.avaterWrapper}>
                    <Avatar large rounded title={RegExr.acronym(user.fullname)} />
                    <View style={{ marginHorizontal: 20 }}>
                        <Text h2>{user.fullname}</Text>
                        <Text h2>{user.email}</Text>
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = EStyleSheet.create({
    avaterWrapper: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default ProfileScreen;