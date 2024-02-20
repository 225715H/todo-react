import { TouchableOpacity, Text, StyleSheet, type ViewStyle } from 'react-native'

interface Props {
  style?: ViewStyle
  label: string
  onPress?: () => void
}

const HeaderButton = (props: Props): JSX.Element => {
  const { style, label, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttoninner, style] }>
      <Text style={styles.text} >{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  buttoninner: {
    color: '#000000',
    lineHeight: 32,
    paddingHorizontal: 24,
    paddingVertical: 8,
    position: 'absolute',
    right: 16
  }
})

export default HeaderButton
