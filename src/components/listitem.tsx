import { View, Text, StyleSheet } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { useState } from 'react'

interface Props {
  title?: string
  tag?: string
}

const ListItem = (props: Props): JSX.Element => {
  const { title } = props
  const [checked, setChecked] = useState(false)
  const toggleCheckbox = (): void => { setChecked(!checked) }
  return (
    <View style={styles.item}>
      <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="blue"
         />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 8
  },
  title: {
    fontSize: 24,
    fontWeight: 'normal',
    marginBottom: 8,
    justifyContent: 'center'
  }
})

export default ListItem
