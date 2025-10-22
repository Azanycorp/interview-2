import React, { useRef, useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

const { width } = Dimensions.get("window");

const DUMMY_ADS = [
  { id: "a1", image: "https://picsum.photos/seed/ad1/800/300" },
  { id: "a2", image: "https://picsum.photos/seed/ad2/800/300" },
  { id: "a3", image: "https://picsum.photos/seed/ad3/800/300" },
];


const AdsCarousel = () => {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % DUMMY_ADS.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollX / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={DUMMY_ADS}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.image} />
        )}
        onScroll={handleScroll}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {DUMMY_ADS.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: activeIndex === index ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  image: {
    width,
    height: width * 0.45,
    resizeMode: "cover",
    borderRadius: 16,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1D4F1E",
    marginHorizontal: 4,
  },
});

export default AdsCarousel;
