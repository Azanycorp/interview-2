import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { COLORS } from '../constants/Colors';

interface CategoryItemProps {
  label: string;
}


const TagIcon = () => (
    <Svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={COLORS.primary} height={28} width={28}>
        <Path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <Path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </Svg>
);

const CategoryItem: React.FC<CategoryItemProps> = ({ label }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <TagIcon />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 80,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: COLORS.text,
    textAlign: 'center',
  },
});

export default CategoryItem;