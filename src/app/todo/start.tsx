import { View, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import Button from '../../components/button'
import Header from '../../components/header'

const handlePress = (): void => {
  router.push('/auth/signup')
}

const App = (): JSX.Element => {
  return (
  <View style={styles.container}>
    <Header />
    <View style={styles.inner}>
      <Text style={styles.title}>Welcome!!</Text>
      <Button onPress={handlePress} label='signup' />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center'
  },
  inner: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App
