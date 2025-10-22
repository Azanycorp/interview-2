import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../constants/Colors";

const { width } = Dimensions.get("window");

const SearchIcon = (props: any) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="#9CA3AF"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </Svg>
);

const CartIcon = (props: any) => (
  <Svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="#6B7280"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6-8M7 13l-1.5 6h13M10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </Svg>
);

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Profile Image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200",
        }}
        style={styles.profileImage}
      />

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for anything"
          placeholderTextColor="#B0B0B0"
          style={styles.searchInput}
        />
        <SearchIcon width={20} height={20} />
      </View>

      {/* Cart Icon */}
      <TouchableOpacity style={styles.cartButton}>
        <CartIcon width={22} height={22} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingTop:16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
  cartButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
});

export default Header;
