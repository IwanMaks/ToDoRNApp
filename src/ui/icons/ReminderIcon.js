import React from "react";
import Svg, {Path} from "react-native-svg";
import {THEME} from "../../theme/theme";

export const ReminderIcon = ({width = 18, height = 18, color = THEME.ascent2_dark}) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
        >
            <Path
                d="M1 4.85714L4.85714 1M15.1429 1L19 4.85714M10 6.78571V11.2857H13.2143M10 3.57143C5.73952 3.57143 2.28571 7.02523 2.28571 11.2857C2.28571 15.5462 5.73952 19 10 19C14.2605 19 17.7143 15.5462 17.7143 11.2857C17.7143 7.02523 14.2605 3.57143 10 3.57143Z"
                stroke={color}
                stroke-width="1.4"
            />
        </Svg>
    )
}