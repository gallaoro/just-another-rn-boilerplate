import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './StatusBarStyles'


export default MTStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);