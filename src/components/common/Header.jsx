import { View, Text } from 'react-native';
import React from 'react';
import { COLOURS } from '../../constants';

const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Pistachio-snooze</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: COLOURS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
};

export default Header;
