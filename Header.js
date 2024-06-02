import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={{ padding: 16, backgroundColor: '#333' }}>
      <Text style={{ fontSize: 24, color: '#fff' }}>Task App</Text>
    </View>
  );
};

export default Header;