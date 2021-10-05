import React from 'react';
import {Text, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export function FontSize(size, containerWidth, containerHeight, kr, en, sp) {

    if ((containerWidth < (size*kr*1+sp*0.2+en*0.65)) || (containerHeight < (size*1.1))) {
        if (size > 5) {
            size = size - 1
        }
    }
    return size;
}

export function FontFamily(size) {
    if (Platform.OS === 'ios') {
        return {fontFamily: 'NotoSansKR-Medium', fontSize: size};
    } else {
        return {fontFamily: 'NotoSansKR-Medium', bottom: size*0.9, fontSize: size};
    }
}

export function FontContainerHeight(size) {
    if (Platform.OS === 'ios') {
        return size*1.2
    } else {
        return size*1.1
    }
}

// export function FontSize(size, containerWidth, kr, en, sp) {
//     // size에 맞게 작동하고 만약 containerWidth가 kr*1+sp*0.2+en*0.65 이하이면 size - 1
    
//     if (containerWidth < (kr*1+sp*0.2+en*0.65)) {
//         size = size - 1
//     }

//     const a = 30
//     console.log(AA({}))
//     return Math.round(a);
// }