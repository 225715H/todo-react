import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children?: string
  back?: string
}

const Header = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Todo App</Text>
        <Text style={styles.headerRight}>{ children }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#46b',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 8
  },
  headerRight: {
    color: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute',
    right: 16,
    bottom: 16
  }
  // headerleft: {
  //   color: '#ffffff',
  //   position: 'absolute',
  //   left: 16,
  //   bottom: 16
  // }
})

export default Header
