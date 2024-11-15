import * as React from "react"
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"

type IllustrationProps = {
    color:string;
}
const ConnectIllustration = ({color}:IllustrationProps) => (
  <Svg
    width={157}
    height={157}
    fill="none"
  >
    <G filter="url(#a)">
      <Circle cx={78.5} cy={74.5} r={50.5} fill="#001A4D" />
    </G>
    <Circle cx={79} cy={74} r={50} fill="url(#b)" />
    <G fill="#fff" clipPath="url(#c)">
      <Path d="M79 75.667A1.667 1.667 0 0 0 80.667 74V57.333a1.667 1.667 0 0 0-3.334 0V74A1.666 1.666 0 0 0 79 75.667Z" />
      <Path d="M86.65 59.183a1.67 1.67 0 0 0-1.533 2.967 13.334 13.334 0 1 1-12.234 0 1.669 1.669 0 1 0-1.533-2.967 16.667 16.667 0 1 0 15.3 0Z" />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={29}
        x2={142}
        y1={24}
        y2={133}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color} />
        <Stop offset={1} stopColor="#6398FF" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="c">
        <Path fill="#fff" d="M59 54h40v40H59z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ConnectIllustration

