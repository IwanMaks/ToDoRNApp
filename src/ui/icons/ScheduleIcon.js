import React from "react";
import Svg, {Path} from "react-native-svg";

export const ScheduleIcon = ({width = 18, height = 18, color = '#ffffff'}) => {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 20 19"
            fill="none"
        >
            <Path
                d="M4.64298 0V6.2069M14.6811 0V6.2069M4.0156 9.31034H7.77989M15.3085 9.31034H11.5442M4.0156 13.0345H7.77989M11.5442 13.0345H15.3085M2.13346 3.10345H17.1906C17.8836 3.10345 18.4454 3.65923 18.4454 4.34483V16.7586C18.4454 17.4442 17.8836 18 17.1906 18H2.13346C1.44047 18 0.878693 17.4442 0.878693 16.7586V4.34483C0.878693 3.65923 1.44047 3.10345 2.13346 3.10345Z"
                stroke={color}
                stroke-width="1.4"
            />
        </Svg>
    )
}