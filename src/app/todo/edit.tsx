import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import { Feather } from '@expo/vector-icons'

import { router } from 'expo-router'

import Header from '../../components/header'
import CircleButton from '../../components/circlebutton'
import HeaderButton from '../../components/headerButton'

const handlePress = (): void => {
  // 保存
  router.back()
}

const Edit = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value={'買い物\nリスト'} />
      </View>
      <CircleButton onPress={handlePress} >
        <Feather name="check" size={40} color="#ffffff" />
      </CircleButton>
      <HeaderButton label='back' onPress={() => { router.back() }} style={{ left: 16, top: 60 }} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 32
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: 'top'
  }
})

export default Edit
