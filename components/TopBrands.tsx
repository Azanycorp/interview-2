import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/Colors';

interface Brand {
  id: string;
  name: string;
  logoUrl: string;
}

const BRANDS_DATA: Brand[] = [
  {
    id: 'b1',
    name: 'Nike',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
  },
  {
    id: 'b2',
    name: 'Netflix',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  },
  {
    id: 'b3',
    name: 'Apple',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  },
  {
    id: 'b4',
    name: 'Adidas',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
  },
  {
    id: 'b5',
    name: 'Amazon',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
];

interface BrandCardProps {
  item: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.logoContainer}>
        <Image 
          source={{ uri: item.logoUrl }} 
          style={styles.logo} 
          resizeMode="contain"
        />
      </View>
      <Text style={styles.brandName}>{item.name}</Text>
    </View>
  );
};

const TopBrands: React.FC = () => {
  const flatListRef = useRef<FlatList>(null);

  const scrollLeft = () => {
    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  const scrollRight = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Brands</Text>
        <View style={styles.navigation}>
          <TouchableOpacity style={styles.navButton} onPress={scrollLeft}>
            <Text style={styles.navIcon}>‹</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={scrollRight}>
            <Text style={styles.navIcon}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        ref={flatListRef}
        horizontal
        data={BRANDS_DATA}
        renderItem={({ item }) => <BrandCard item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    backgroundColor: '#E8F0E8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  navigation: {
    flexDirection: 'row',
    gap: 12,
  },
  navButton: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#2D5F3F',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D5F3F',
    marginTop: -4,
  },
  listContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  logoContainer: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  brandName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'left',
  },
});

export default TopBrands;