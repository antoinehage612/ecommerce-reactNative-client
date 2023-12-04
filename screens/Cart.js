import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { CartData } from "../data/CartData";
import PriceTable from "../components/cart/PriceTable";
import Layout from "../components/layout/Layout";
import CartItem from "../components/cart/CartItem";
import { useNavigation } from "@react-navigation/native";

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(CartData);
  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItems?.length > 0
          ? ` You Have ${cartItems?.length} Item Left in Your Cart`
          : "OOPS Your Cart Is EMPTY !"}
      </Text>
      {cartItems?.length > 0 && (
        <>
          <ScrollView>
            {cartItems?.map((item) => (
              <CartItem item={item} key={item._id} />
            ))}
          </ScrollView>
          <View>
            <PriceTable title={"Price"} price={900} />
            <PriceTable title={"Tax"} price={1} />
            <PriceTable title={"Shipping"} price={1} />
            <View style={styles.grandTotal}>
              <PriceTable title={"Grand Total"} price={902} />
            </View>
            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={() => navigation.navigate("checkout")}
            >
              <Text style={styles.btnCheckoutText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "green",
    marginTop: 10,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#ffffff",
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btnCheckout: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#000000",
    width: "90%",
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btnCheckoutText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Cart;
