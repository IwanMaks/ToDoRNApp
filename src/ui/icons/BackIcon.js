import React from "react";
import Svg, {Path} from "react-native-svg";

export const BackIcon = ({width = 9, height = 18, color = '#ffffff'}) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 13 22"
            fill="none"
        >
            <Path
                d="M11.6923 20L2 11L11.6923 2"
                stroke={color}
                stroke-width="1.8"
                stroke-linecap="square"
            />
        </Svg>
    )
}