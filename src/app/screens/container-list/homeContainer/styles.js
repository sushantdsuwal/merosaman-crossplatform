import { Platform } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
    searchBarContainer: {
        backgroundColor: '$AppBarColor',
        marginBottom: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 1,
                // height: '$AppBarHeightIOS'
            },
            android: {
                // height: '$AppBarHeightAndroid',
                elevation: 1,
            },
        }),
    },
    searchBar: {
        marginVertical: 10,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        height: 40,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginHorizontal: 10
    },

    //LIST CONTAINER
    listContainer: {
        marginVertical: 10,
        borderRadius: 10,
        borderColor: '$primaryColor',
    },
    itemWrapper: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
})

export default styles;