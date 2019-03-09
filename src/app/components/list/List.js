import React from 'react'
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import Text from "../text/Text";
// import Icon from '../icon/Icon';
import styles from './styles';

const List = (props) => {
    const { label, onPress, icon } = props;
    return (
        <TouchableOpacity activeOpacity={0.2} onPress={onPress}>
            <View style={styles.listWrapper}>
                <Text h1>{label}</Text>
                {/* <Icon type='MaterialIcons'
                    name={icon ? icon : "expand-more"}
                    size={24}
                    style={styles.icon}
                /> */}
            </View>
        </TouchableOpacity>
    )
};

List.propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
    icon: PropTypes.string
}

export default List;