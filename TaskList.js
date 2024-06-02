import React from 'react';
import { FlatList } from 'react-native';
import TaskCard from './TaskCard';

const TaskList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <TaskCard task={item} />}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // specify 2 columns
      ItemSeparatorComponent={() => <View style={{ height: 16, backgroundColor: '#ccc' }} />}
      contentContainerStyle={{ padding: 16, backgroundColor: '#f7f7f7' }}
    />
  );
};

export default TaskList;