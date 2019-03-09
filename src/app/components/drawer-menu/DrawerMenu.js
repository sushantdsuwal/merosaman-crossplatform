import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import Text from '../text/Text';
import Avatar from '../avatar/Avatar';
import { DrawerItems, NavigationActions } from 'react-navigation';
import { RegExr } from "../../services";
import styles from './styles';


class DrawerMenu extends React.Component {
  showProfile = () => {
    // this.props.navigation.navigate('Profile');
    alert('profile')
  }

  render() {
    // const { user } = this.props.authState;
    const user = {
      fullname: 'sushant suwal',
      email: 'sushantdsuwal@gmail.com'
    }
    return (
      <ScrollView alwaysBounceVertical={false} style={styles.container}>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <TouchableOpacity onPress={this.showProfile} style={styles.profileContainer}>
            <View>
              <Avatar large rounded title={RegExr.acronym(user.fullname)} />
              <Text h1>{user.fullname}</Text>
              <Text h1>{user.email}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.menuContainer}>
            {/* <DrawerItems
              {...this.props}
              items={this.props.items.filter(item => {
                return (item.key != 'Profile');
              })}
            /> */}
          </View>
          <View style={styles.footer}>
            {/* <Text>Help</Text> */}
          </View>
        </SafeAreaView>
      </ScrollView>
    )
  }
}

// const mapStateToProps = state => ({
//   authState: state.authState
// })

export default DrawerMenu;