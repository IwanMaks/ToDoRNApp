import React from "react";
import Svg, {Path, Rect} from "react-native-svg";
import {THEME} from "../../theme/theme";

export const FilterIcon = ({width = 42, height = 42, color = THEME.ascent2_dark}) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 42 42"
            fill="none"
        >
            <Rect
                x="0.7"
                y="0.7"
                width="40.6"
                height="40.6"
                rx="11.3"
                stroke={color}
                stroke-width="1.4"
            />
            <Path
                d="M30 16.4L19.8 16.4M19.8 16.4C19.8 15.0745 18.7255 14 17.4 14C16.0745 14 15 15.0745 15 16.4M19.8 16.4C19.8 17.7255 18.7255 18.8 17.4 18.8C16.0745 18.8 15 17.7255 15 16.4M15 16.4L12 16.4M30 26L27 26M27 26C27 24.6745 25.9255 23.6 24.6 23.6C23.2745 23.6 22.2 24.6745 22.2 26M27 26C27 27.3255 25.9255 28.4 24.6 28.4C23.2745 28.4 22.2 27.3255 22.2 26M22.2 26H12"
                stroke={color}
                stroke-width="1.4"
            />
        </Svg>

    )
}