import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    listWrapper: {
        backgroundColor: '$primaryColor',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '$listPadding',
        alignItems: 'center',
    },
    icon: {
        color: '#fff'
    }
})
export default styles;