import PropTypes from 'prop-types';
import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from '../icon/Icon'
import Text from '../text/Text';
import styles from './styles';

const ToolBar = props => {
    const {
        menu,
        title,
        onPressMenu,
        onPressSearch,
        onPressBookmark,
        onPressCart,
        containerStyle,
        navIcon,
        ...attributes
    } = props;
    const activeOpacity = 0.2;
    return (
        <View
            {...attributes}
            style={[
                styles.container,
                containerStyle && containerStyle,
            ]}
        >

            {menu ?
                <View style={[styles.iconWrapper]}>
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()} activeOpacity={activeOpacity}>
                        <Icon name="ios-menu" size={26} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                :
                <View style={[styles.iconWrapper]}></View>
            }

            <View style={[styles.textContainer]}>
                <Text h1>
                    {title}
                </Text>
            </View>

            <View style={[styles.iconWrapper]}>
                <TouchableOpacity onPress={onPressBookmark} activeOpacity={activeOpacity}>
                    <Icon name="ios-person-add" size={26} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={[styles.iconWrapper]}>
                <TouchableOpacity onPress={onPressBookmark} activeOpacity={activeOpacity}>
                    <Icon name="ios-sunny" size={26} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <View style={[styles.iconWrapper]}>
                <TouchableOpacity onPress={onPressCart} activeOpacity={activeOpacity}>
                    <Icon name="ios-more" size={26} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

ToolBar.propTypes = {
    containerStyle: PropTypes.any,
    menu: PropTypes.bool,
    title: PropTypes.string,
    navIcon: PropTypes.bool,
    onPressMenu: PropTypes.func,
    onPressSearch: PropTypes.func,
    onPressBookmark: PropTypes.func,
    onPressCart: PropTypes.func
};

export default withNavigation(ToolBar);