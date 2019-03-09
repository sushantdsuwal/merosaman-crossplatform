import React, { Component } from 'react'
import {
    View,
    Platform,
    LayoutAnimation,
    UIManager
} from 'react-native';
import { List, Divider, Text, ItemCard } from "../../../components";
import { connect } from "react-redux";
import styles from './styles';
import { toggleList, toggleSelection } from "../../../store/actions/listAction";
import dummyProduct from '../../../data/dummyProduct';
import dummyProductList from '../../../data/dummyProductList';

class ListContainer extends Component {
    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    toggleList = (id) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const { open, activeId } = this.props.toggle;
        if (open == true) {
            if (activeId == id) {
                this.props.toggleList({ open: false, activeId: id })
            } else {
                this.props.toggleList({ open: true, activeId: id })
            }
        } else {
            this.props.toggleList({ open: true, activeId: id })
        }
    }

    _renderProductList = () => {
        const { open, activeId } = this.props.toggle;
        return dummyProductList.map((item) => {
            return (
                <View key={item.id}>
                    <List
                        onPress={() => this.toggleList(item.id)}
                        label={item.Name}
                    // icon={item.id == activeId && open ? "expand-less" : "expand-more"}
                    />
                    <Divider />
                    <View style={styles.itemWrapper}>
                        {activeId === item.id && open && (this._renderProduct(item.id))}
                    </View>
                </View>
            )
        })
    }

    onPressListItem = (Id, ProductId) => {
        this.props.toggleSelection({ Id, ProductId })
    }

    _renderProduct = (Id) => {
        return dummyProduct.map((item, key) => {
            if (Id == item.id) {
                return (
                    <ItemCard
                        onPress={() => this.onPressListItem(Id, item.ProductId)}
                        key={item.ProductId}
                        image={require('../../../assets/images/logo.png')}
                        label={item.Name}
                    />
                );
            }
        });
    };

    render() {
        console.log(JSON.stringify(this.props.toggle.ListBox))
        return (
            <View style={styles.listContainer}>
                {this._renderProductList()}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toggle: state.ListState,
    }
}

const mapDispatchToProps = {
    toggleList,
    toggleSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);