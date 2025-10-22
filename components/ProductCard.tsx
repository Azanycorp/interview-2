import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

interface Product {
  id: string;
  name: string;
  seller: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
}

const { width } = Dimensions.get("window");
const CARD_MARGIN = 8;
const CARD_WIDTH = (width - 16 * 2 - 16) / 2;


const HeartIcon = ({ color, filled }: { color: string; filled?: boolean }) => (
  <Svg
    fill={filled ? color : "none"}
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke={color}
    height={22}
    width={22}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </Svg>
);

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onBuyNow,
}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [showDescription, setShowDescription] = React.useState(false);

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <HeartIcon color={isFavorite ? "#EF4444" : "#666666"} filled={isFavorite} />
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        <Text style={styles.seller}>{product.seller}</Text>

        <View style={styles.nameRow}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>

        <TouchableOpacity
          style={styles.descriptionButton}
          onPress={() => setShowDescription(!showDescription)}
        >
          <Text style={styles.descriptionText}>Show description</Text>
          <Ionicons
            name={showDescription ? "chevron-up" : "chevron-down"}
            size={14}
            color="#666666"
          />
        </TouchableOpacity>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.cartButton} onPress={onAddToCart}>
            <Ionicons name="cart-outline" size={20} color="#1D4F1E" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.buyButton} onPress={onBuyNow}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
            <Ionicons name="chevron-forward" size={14} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1.5,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  seller: {
    fontSize: 10,
    color: "#64748B",
    marginBottom: 4,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111827",
  },
  price: {
    fontSize: 12,
    fontWeight: "700",
    color: "#111827",
  },
  descriptionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 4,
  },
  descriptionText: {
    fontSize: 10,
    color: "#6B7280",
  },
  actionRow: {
    flexDirection: "row",
    gap: 8,
  },
  cartButton: {
    width: 44,
    height: 44,
    borderWidth: 1.5,
    borderColor: "#1D4F1E",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buyButton: {
    flex: 1,
    height: 44,
    backgroundColor: "#1D4F1E",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  buyButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default ProductCard;
