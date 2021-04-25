import React from "react";
import Svg, {Path} from "react-native-svg";
import {View} from "react-native";

export const ClockIcon = ({width = 14, height = 14, color = '#fff', style = {}}) => {
    return (
        <View style={{...style}}>
            <Svg
                width={width}
                height={height}
                viewBox="0 0 14 14"
                fill="none"
            >
                <Path d="M7 7H6.3C6.3 7.18565 6.37375 7.3637 6.50503 7.49497L7 7ZM7 12.3C4.07289 12.3 1.7 9.92711 1.7 7H0.3C0.3 10.7003 3.29969 13.7 7 13.7V12.3ZM12.3 7C12.3 9.92711 9.92711 12.3 7 12.3V13.7C10.7003 13.7 13.7 10.7003 13.7 7H12.3ZM7 1.7C9.92711 1.7 12.3 4.07289 12.3 7H13.7C13.7 3.29969 10.7003 0.3 7 0.3V1.7ZM7 0.3C3.29969 0.3 0.3 3.29969 0.3 7H1.7C1.7 4.07289 4.07289 1.7 7 1.7V0.3ZM6.3 3.14286V7H7.7V3.14286H6.3ZM6.50503 7.49497L9.07645 10.0664L10.0664 9.07645L7.49497 6.50503L6.50503 7.49497Z" fill="white"
                />

            </Svg>
        </View>
    )
}