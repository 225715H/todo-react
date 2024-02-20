import { TouchableOpacity, Text, StyleSheet, type ViewStyle, View } from 'react-native'

interface Props {
  style?: ViewStyle
  label: string
  onPress?: () => void
}

const BackButton = (props: Props): JSX.Element => {
  const { style, label, onPress } = props
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={[styles.buttoninner, style] }>
      <Text style={styles.text} >{label}</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  buttoninner: {
    color: '#000000',
    lineHeight: 32,
    paddingHorizontal: 24,
    paddingVertical: 8
  }
})

export default BackButton
