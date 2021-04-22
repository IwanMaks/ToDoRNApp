import React from "react";
import Svg, {Path} from "react-native-svg";
import {THEME} from "../../theme/theme";
import {TouchableOpacity} from "react-native";

export const SearchIcon = ({style = {}, width = 18, height = 18, color = THEME.textSecondary_dark}) => {
    return (
            <Svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
            >
                <Path
                    d="M19.7116 19L14.5133 13.8571M9.31497 16.4286C5.00856 16.4286 1.51752 12.9748 1.51752 8.71429C1.51752 4.4538 5.00856 1 9.31497 1C13.6214 1 17.1124 4.4538 17.1124 8.71429C17.1124 12.9748 13.6214 16.4286 9.31497 16.4286Z"
                    stroke={color}
                    stroke-width="1.4"
                />
            </Svg>
    )
}

