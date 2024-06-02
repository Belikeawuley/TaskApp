import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CategoryButton = ({ category, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 8, borderRadius: 4, backgroundColor: '#f7f7f7' }}>
        <Text style={{ fontSize: 14, color: '#333' }}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryButton;