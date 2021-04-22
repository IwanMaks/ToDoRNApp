import * as Font from 'expo-font'

export async function bootstrap () {
    try {
        await Font.loadAsync({
            'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
            'Rubik-BlackItalic': require('../assets/fonts/Rubik-BlackItalic.ttf'),
            'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
            'Rubik-BoldItalic': require('../assets/fonts/Rubik-BoldItalic.ttf'),
            'Rubik-ExtraBold': require('../assets/fonts/Rubik-ExtraBold.ttf'),
            'Rubik-ExtraBoldItalic': require('../assets/fonts/Rubik-ExtraBoldItalic.ttf'),
            'Rubik-Italic': require('../assets/fonts/Rubik-Italic.ttf'),
            'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
            'Rubik-LightItalic': require('../assets/fonts/Rubik-LightItalic.ttf'),
            'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
            'Rubik-MediumItalic': require('../assets/fonts/Rubik-MediumItalic.ttf'),
            'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
            'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
            'Rubik-SemiBoldItalic': require('../assets/fonts/Rubik-SemiBoldItalic.ttf'),
        })
    } catch (e) {
        console.log(e)
    }

}