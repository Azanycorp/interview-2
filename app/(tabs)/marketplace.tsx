import React from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { COLORS } from '../../constants/Colors';
import Header from '../../components/Header';
import Section from '../../components/Section';
import CategoryItem from '../../components/CategoryItem';
import ProductCard from '../../components/ProductCard';
import AdsCarousel from '../../components/AdsCarousel';
import HomeAppliances from '../../components/HomeAppliances';
import TopBrands from '../../components/TopBrands';

interface Category {
  id: string;
  label: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  seller: string;
}

const DUMMY_CATEGORIES: Category[] = [
  { id: 'c1', label: 'Groceries' },
  { id: 'c2', label: 'Fashion' },
  { id: 'c3', label: 'Electronics' },
  { id: 'c4', label: 'Home' },
  { id: 'c5', label: 'Beauty' },
];

const DUMMY_PRODUCTS: Product[] = [
  { id: 'p1', name: 'Bananas', price: 1.99, imageUrl: 'https://picsum.photos/seed/p1/200/200', seller: 'Fresh Farm' },
  { id: 'p2', name: 'Strawberries', price: 4.50, imageUrl: 'https://picsum.photos/seed/p2/200/200', seller: 'Berry Best' },
  { id: 'p3', name: 'Garlic', price: 59.99, imageUrl: 'https://picsum.photos/seed/p3/200/200', seller: 'Spice World' },
  { id: 'p4', name: 'Onions', price: 149.99, imageUrl: 'https://picsum.photos/seed/p4/200/200', seller: 'Veggie Delight' },
  { id: 'p5', name: 'Eggs', price: 18.00, imageUrl: 'https://picsum.photos/seed/p5/200/200', seller: 'Farm Fresh' },
  { id: 'p6', name: 'Beetroots', price: 12.50, imageUrl: 'https://picsum.photos/seed/p6/200/200', seller: 'Root Veggies' },
];

const MarketplaceScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView style={styles.container}>
         <AdsCarousel />
        <Section title="Categories" onSeeAll={() => {}}>
            <FlatList
                horizontal
                data={DUMMY_CATEGORIES}
                renderItem={({ item }) => <CategoryItem label={item.label} />}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryList}
            />
        </Section>
        <Section title="Featured Products" onSeeAll={() => {}}>
            <FlatList
                data={DUMMY_PRODUCTS}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.productListWrapper}
                contentContainerStyle={styles.productList}
                scrollEnabled={false}
            />
        </Section>
         <AdsCarousel />
         <Section title="Best Seller" onSeeAll={() => {}}>
            <FlatList
                data={DUMMY_PRODUCTS}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.productListWrapper}
                contentContainerStyle={styles.productList}
                scrollEnabled={false}
            />
        </Section>
        
        {/* Home Appliances Section */}
        <HomeAppliances />
        <TopBrands/>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
  },
  categoryList: {
      paddingHorizontal: 16,
      gap: 16,
  },
  productList: {
      paddingHorizontal: 16,
  },
  productListWrapper: {
      gap: 16,
      marginBottom: 16,
  }
});

export default MarketplaceScreen;