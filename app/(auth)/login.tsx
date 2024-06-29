import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function Login() {
  return (
    <SafeAreaView style={{
      backgroundColor: 'white',
      flex: 1,
    }}>
      <Text>Login</Text>
      <Link href="/explore">
          <Text>Go to home screen!</Text>
        </Link>
    </SafeAreaView>
  )
}