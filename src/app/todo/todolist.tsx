import { View, ScrollView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { router } from 'expo-router'

import Header from '../../components/header'
import ListItem from '../../components/listitem'
import CircleButton from '../../components/circlebutton'
import HeaderButton from '../../components/headerButton'
import ListFilter from '../../components/listFilter'

const handlePress = (): void => {
  router.push('/todo/create')
}

const TodoList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <ListFilter />
      <ScrollView style={styles.list} >
        <ListItem title='aaa' tag='1'/>
        <ListItem title='aaa' tag='1'/>
        <ListItem title='aaa' tag='1'/>
        <ListItem title='aaa' tag='1'/>
        <ListItem title='aaa' tag='1'/>
        <ListItem title='aaa' tag='1'/>
        <ListItem title='aaa' tag='1'/>
        <ListItem title='aaa' tag='1'/>
      </ScrollView>
      <CircleButton onPress={handlePress} >
        <Feather name="plus" size={40} color="#ffffff" />
      </CircleButton>
      <HeaderButton label='Logout' onPress={() => { router.replace('auth/signup') }} style={{ top: 60 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  list: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 80
  }
})

export default TodoList
