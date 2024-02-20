import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const ListFilter = (): JSX.Element => {
  const [selectedTag, setSelectedTag] = useState<string>('')

  const tags: Record<string, string> = {
    1: 'all',
    2: 'incomplete',
    3: 'complete'
  }

  const handleTagPress = (tag: string): void => {
    if (selectedTag === tag) {
      setSelectedTag('')
    } else {
      setSelectedTag(tag)
    }
  }

  return (
    <View >
      <View style={styles.tagsContainer}>
        {Object.keys(tags).map(tagKey => (
          <TouchableOpacity
            key={tagKey}
            style={[styles.tagButton, selectedTag === tagKey ? styles.selectedTagButton : null]}
            onPress={() => { handleTagPress(tagKey) }}>
            <Text style={[styles.tagButtonText, selectedTag === tagKey ? styles.selectedTagButtonText : null]}>
              {tags[tagKey]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 16
  },
  tagButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    borderRadius: 20,
    backgroundColor: '#ddd',
    width: 110
  },
  selectedTagButton: {
    backgroundColor: '#4CAF50'
  },
  tagButtonText: {
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  selectedTagButtonText: {
    color: '#fff'
  }
})

export default ListFilter
