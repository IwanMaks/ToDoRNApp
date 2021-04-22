import React from "react";
import Svg, {Path} from "react-native-svg";

export const AddIcon = ({width = 18, height = 18, color = '#ffffff'}) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 19 18"
            fill="none"
        >
            <Path
                d="M9.09703 0V18M0 9H18.1941"
                stroke={color}
                stroke-width="2"
            />
        </Svg>
    )
}