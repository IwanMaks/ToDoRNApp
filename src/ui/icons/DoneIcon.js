import React from "react";
import Svg, {Path} from "react-native-svg";
import {View} from "react-native";

export const DoneIcon = ({width = 14, height = 11, color = '#fff', style = {}}) => {
    return (
        <View style={{...style}}>
            <Svg
                width={width}
                height={height}
                viewBox="0 0 14 11"
                fill="none"
            >
                <Path d="M1 5.28571L6.14286 9.57143L13 1" stroke="white" stroke-width="1.6"
                />

            </Svg>
        </View>
    )
}