import { View, Text, StyleSheet, TextInput } from 'react-native'
import { router } from 'expo-router'
import { useState } from 'react'

import Button from '../../components/button'
import Header from '../../components/header'
import HeaderButton from '../../components/headerButton'
import BackButton from '../../components/backButton'

const handlePress = (): void => {
  router.push('/todo/todolist')
}

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Header />
      <BackButton label='home' onPress={() => { router.back() }} style={{ top: 60 }} />
      <HeaderButton label='Login' onPress={() => { router.replace('auth/login') }} style={{ top: 60 }} />
      <View style={styles.inner}>
        <Text style={styles.title}>Signup</Text>
        <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => { setEmail(text) }}
        placeholder='Email'
        textContentType='emailAddress'
        keyboardType='email-address'
        autoCapitalize='none'
        />
        <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => { setPassword(text) }}
        placeholder='Email'
        textContentType='emailAddress'
        keyboardType='email-address'
        autoCapitalize='none'
        />
        <Button label='signup' onPress={handlePress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8'
  },
  inner: {
    width: '70%',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    lineHeight: 40,
    marginBottom: 24
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 8
  }
})

export default Signup
