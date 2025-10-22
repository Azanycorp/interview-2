
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface LogoProps {
  style?: object;
}

const Logo: React.FC<LogoProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
        <View style={styles.iconContainer}>
            <Svg height="100%" width="100%" viewBox="0 0 100 100">
                <Circle cx="50" cy="50" r="48" stroke="rgba(239, 68, 68, 0.25)" strokeWidth="4" fill="none" />
                <Circle cx="50" cy="50" r="32" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="4" fill="none" />
                <Circle cx="50" cy="50" r="16" stroke="rgba(239, 68, 68, 0.75)" strokeWidth="4" fill="none" />
                <Circle cx="50" cy="50" r="8" fill="#000" />
            </Svg>
        </View>
      <Text style={styles.text}>AZANY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#333',
  },
});

export default Logo;
