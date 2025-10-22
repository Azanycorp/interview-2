import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { COLORS } from '../constants/Colors';

interface ApplianceItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
}

const APPLIANCES_DATA: ApplianceItem[] = [
  {
    id: 'a1',
    name: 'Potatoes',
    price: 19999,
    originalPrice: 1999910,
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80',
  },
  {
    id: 'a2',
    name: 'Cashew',
    price: 19999,
    originalPrice: 1999910,
    imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80',
  },
  {
    id: 'a3',
    name: 'Cinnamon',
    price: 19999,
    originalPrice: 1999910,
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a0b3b83e7a3f?w=400&q=80',
  },
];

interface ApplianceCardProps {
  item: ApplianceItem;
}
const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = (width - 16 * 2 - 16);
const ApplianceCard: React.FC<ApplianceCardProps> = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.price.toLocaleString()}</Text>
        <Text style={styles.originalPrice}>${item.originalPrice.toLocaleString()}</Text>
      </View>
    </View>
  );
};

const HomeAppliances: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home Appliances Under $30</Text>
        
      </View>
      
      <FlatList
        horizontal
        data={APPLIANCES_DATA}
        renderItem={({ item }) => <ApplianceCard item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
      
      <TouchableOpacity style={styles.seeMoreButton}>
        <Text style={styles.seeMoreText}>See more</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    paddingVertical: 32,
    marginVertical: 16,
    borderRadius: 8,

    width:CONTAINER_WIDTH,
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    paddingHorizontal:16,
    fontWeight: 'semibold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'semibold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 24,
    gap: 16,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    padding: 10,
    
    width: 124,
  },
  imageContainer: {
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 16,
    height: 80,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 12,
    fontWeight: 'medium',
    color: '#000000',
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  price: {
    fontSize: 12,
    fontWeight: 'medium',
    color: '#2D5F3F',
  },
  originalPrice: {
    fontSize: 10,
    color: '#9E9E9E',
    textDecorationLine: 'line-through',
  },
  seeMoreButton: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 8,
  },
  seeMoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D5F3F',
  },
});

export default HomeAppliances;