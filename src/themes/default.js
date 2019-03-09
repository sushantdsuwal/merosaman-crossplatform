import { Platform } from 'react-native';

const defaultTheme = {
    $primaryColor: '#435a68',
    $secondaryColor: '#4baaa2',
    $accentColor: '#F7DB4F',

    $item: '#4baaa2',

    $textOnPrimaryColor: '#fff',
    $textColor: '#222',
    $inverseTextColor: '#fff',
    $baseBackgroundColor: '#2c3137',

    $dividerColor: '#e1e8ee',
    $dividerVerticalMargin: 8,

    //Toolbar
    $AppBarHeightIOS: 44,
    $AppBarHeightAndroid: 52,
    $AppBarColor: '$primaryColor',

    //BottomBar
    $AppBottomBarIOS: 44,
    $AppBottomBarAndroid: 52,
    $BottomBarBackgroundColor: '#fff',

    $spinnerColor: '#000',
    $spinnerSize: 'large',

    //Modal
    $modalBackgroundColor: '#fff',

    //card
    $cardTitleColor: '#43484d',
    $cardBackgroundColor: '#fff',
    $cardBorderColor: '$dividerColor',
    $cardPadding: 15,
    $cardMargin: 15,
    $cardFeaturedTitleFontSize: 18,
    $cardFeaturedSubtitleFontSize: 13,
    $cardBorderWidth: 1,
    $cardFeaturedTitleBottomMargin: 8,
    $cardFeaturedTitleColor: '#fff',
    $cardFeaturedTitleFontWeight: '800',
    $cardFeaturedSubtitleColor: '#fff',
    $cardFeaturedSubtitleFontWeight: '400',
    $cardDividerBottomMargin: 15,
    $cardTitleFontSize: 15,
    $cardTitleFontWeight: '600',
    $cardTitleBottomMargin: 15,
    $imageCardTitleTopMargin: 15,

    //avatar
    $avatarSize: 34,
    $mediumAvatarSize: 50,
    $largeAvatarSize: 75,
    $xlargeAvatarSize: 150,
    $avatarForegroundColor: '#fff',
    $avatarContainerPadding: 10,

    //form input
    $errorColor: '#f00',
    $validationFontSize: 12,
    $labelFontSize: 12,
    $labelColor: '#666',
    $inputIosBorderBottomColor: '#bdc6cf',

    //font
    $h1FontSize: 15,
    $h2FontSize: 13,
    $h3FontSize: 11,
    $h4FontSize: 9,

    ...Platform.select({
        ios: {
            $h1FontFaily: 'Laila-Bold',
            $h2FontFaily: 'Laila-Medium',
            $h3FontFaily: 'Laila-Light',
            $h4FontFaily: 'Laila-Medium',
        },
        android: {
            $h1FontFaily: 'Laila-Bold',
            $h2FontFaily: 'Laila-Medium',
            $h3FontFaily: 'Laila-Light',
            $h4FontFaily: 'Laila-Medium',
        },
        default: {
            $h1FontFaily: 'Laila-Bold',
            $h2FontFaily: 'Laila-Medium',
            $h3FontFaily: 'Laila-Light',
            $h4FontFaily: 'Laila-Medium',
        }
    }),

    $fontColor: '#FFF',

    $fontSizeButton: 16,
    $fontSizeSmallButton: 14,
    $buttonContainerMargin: 16,
    $buttonPadding: 19,
    $smallButtonPadding: 12,
    $buttonIconColor: '#fff',

    $iconFontSize: 27,
    $iconColor: '#000',

    $containerPadding: 16,
    $titleFontSize: 20,
    $listPadding: 14,
}

export default defaultTheme;