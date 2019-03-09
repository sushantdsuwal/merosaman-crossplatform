import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Platform,
  LayoutAnimation,
  UIManager
} from 'react-native';
import { connect } from 'react-redux';
import { Container, List, ItemCard } from "../components";
import { SearchBar, ListContainer } from "./container-list/homeContainer";
import EStyleSheet from 'react-native-extended-stylesheet';
import dummyProduct from '../data/dummyProduct';
import { toggleSelection } from "../store/actions/listAction";

class ListScreen extends Component {
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  onPressListItem = (Id, ProductId) => {
    this.props.toggleSelection({ Id, ProductId })
  }

  _renderListBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const { ListBox } = this.props.ListState;
    return (
      ListBox.map(value => dummyProduct.map(item => {
        return (
          value.Id == item.id && value.ProductId == item.ProductId &&
          <ItemCard
            onPress={() => this.onPressListItem(item.id, item.ProductId)}
            key={item.ProductId}
            image={require('../assets/images/logo.png')}
            label={item.Name}
          />
        )
      }))
    )
  }

  render() {
    return (
      <Container>
        <SearchBar />
        <ScrollView>

          <View style={styles.listWrapper}>
            <View style={{ margin: 2 }} />
            <View style={styles.listBoxWrapper}>
              {this._renderListBox()}
            </View>
            <View style={{ margin: 2 }} />

            <List label="Recently Used" />
            <ListContainer />
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  listWrapper: {
    paddingHorizontal: '$containerPadding',
  },
  listBoxWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

const mapStateToProps = (state) => {
  return {
    ListState: state.ListState
  }
}

const mapDispatchToProps = {
  toggleSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
