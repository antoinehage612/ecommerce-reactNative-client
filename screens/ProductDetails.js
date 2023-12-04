import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductsData } from "../data/ProductsData";
import Layout from "../components/layout/Layout";

const ProductDetails = ({ route }) => {
  const [pDetails, setPDetails] = useState({});
  const [qty, setQty] = useState(1);
  // get product details
  useEffect(() => {
    //find product detail
    const getProduct = ProductsData.find((p) => {
      return p?._id === params?._id;
    });
    setPDetails(getProduct);
  }, [params?._id]);
  // console.log(route);
  //Handle function for + -
  const handleAddQty = () => {
    if (qty === 10) return alert("you can't add more than 10. ");
    setQty((prev) => prev + 1);
  };
  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };
  const { params } = route;
  return (
    <Layout>
      <Image source={{ uri: pDetails?.imageUrl }} style={Styles.image} />
      <View style={Styles.container}>
        <Text style={Styles.title}>{pDetails?.name}</Text>
        <Text style={Styles.title}> Price: {pDetails?.price}$</Text>
        <Text style={Styles.desc}>{pDetails?.description} </Text>
        <View style={Styles.btnContainer}>
          <TouchableOpacity
            style={Styles.btnCart}
            onPress={() => alert(`${qty} items added to cart`)}
            disabled={pDetails?.quantity <= 0}
          >
            <Text style={Styles.btnCartText}>
              {pDetails?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"}
            </Text>
          </TouchableOpacity>
          <View style={Styles.btnContainer}>
            <TouchableOpacity style={Styles.btnQty} onPress={handleRemoveQty}>
              <Text style={Styles.btnQtyText}>-</Text>
            </TouchableOpacity>
            <Text>{qty}</Text>
            <TouchableOpacity style={Styles.btnQty} onPress={handleAddQty}>
              <Text style={Styles.btnQtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};
const Styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
  },
  desc: {
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 180,
    backgroundColor: "#000000",
    //marginVertical: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  btnCartText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  btnQty: {
    backgroundColor: "lightgray",
    width: 50,
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductDetails;
