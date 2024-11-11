import {  Text, View,Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { typography } from '../../styles/typography'

type Props={
    label:string;
    onpress?:()=>void
}

const Button = ({label,onpress}:Props) => {
  return (
    <View style={styles.container}>
    <Pressable android_ripple={{color:"#C1C1C1"}} style={styles.button} onPress={onpress}>
      <Text style={typography.h2}>{label}</Text>
    </Pressable>
    </View>
  )
}

export default Button
