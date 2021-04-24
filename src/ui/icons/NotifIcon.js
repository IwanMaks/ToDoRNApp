import React from "react";
import Svg, {Path} from "react-native-svg";
import {THEME} from "../../theme/theme";

export const NotifIcon = ({width = 17, height = 18, color = THEME.ascent2_dark}) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 17 20"
            fill="none"
        >
            <Path
                d="M0 13.8571H16.7143M1.92857 13.8571V7.42857C1.92857 3.87817 4.80674 1 8.35714 1C11.9075 1 14.7857 3.87817 14.7857 7.42857V13.8571M5.78571 15.7857V16.4286C5.78571 17.8487 6.93698 19 8.35714 19C9.7773 19 10.9286 17.8487 10.9286 16.4286V15.7857"
                stroke={color}
                stroke-width="1.4"
            />
        </Svg>
    )
}