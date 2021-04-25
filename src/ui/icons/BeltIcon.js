import React from "react";
import Svg, {Path} from "react-native-svg";
import {THEME} from "../../theme/theme";
import {View} from "react-native";

export const BeltIcon = ({width = 18, height = 18, color = THEME.textSecondary_dark, style = {}}) => {
    return (
        <View style={{...style}}>
            <Svg
                width={width}
                height={height}
                viewBox="0 0 15 18"
                fill="none"
            >
                <Path
                    d="M0 12.4286H14.8571M1.71429 12.4286V6.71429C1.71429 3.55837 4.27266 1 7.42857 1C10.5845 1 13.1429 3.55837 13.1429 6.71429V12.4286M5.14286 14.1429V14.7143C5.14286 15.9767 6.16621 17 7.42857 17C8.69094 17 9.71429 15.9767 9.71429 14.7143V14.1429"
                    stroke="#9A9AB6"
                    stroke-width="1.4"
                />
            </Svg>
        </View>
    )
}