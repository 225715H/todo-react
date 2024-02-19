import { View, Text, StyleSheet } from 'react-native'

import Button from '../../components/button'

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!!</Text>
      <Button label='signup' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40
  }
})

export default App
