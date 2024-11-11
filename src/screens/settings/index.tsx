import { Text} from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/globalStyles'
import { SafeAreaView } from 'react-native-safe-area-context'



const Settings = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>Settings</Text>
    </SafeAreaView>
  )
}

export default Settings
