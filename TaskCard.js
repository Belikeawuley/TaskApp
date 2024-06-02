import React from 'react';
import { View, Text, Image } from 'react-native';

const TaskCard = ({ task }) => {
  return (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{task.title}</Text>
      <Text style={{ fontSize: 14, color: '#666' }}>{task.description}</Text>
      <Image source={{ uri: task.icon }} style={{ width: 24, height: 24, marginRight: 8 }} />
    </View>
  );
};

export default TaskCard;