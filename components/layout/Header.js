import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = () => {
  const [searchText, setsearchText] = useState("");

  //function for search
  const handleSearch = () => {
    console.log(searchText);
    setsearchText("");
  };

  return (
    <View
      style={{
        height: 90,
        paddingTop: 20,
        backgroundColor: "lightgray",
      }}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={searchText}
          onChangeText={(text) => setsearchText(text)}
        />
        <TouchableOpacity style={styles.SearchBtn} onPress={handleSearch}>
          <FontAwesome name="search" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  inputBox: {
    borderWidth: 0.3,
    width: "100%",
    position: "absolute",
    left: 15,
    height: 40,
    color: "#000000",
    backgroundColor: "#ffffff",
    paddingLeft: 12,
    fontSize: 16,
    borderRadius: 5,
  },
  SearchBtn: {
    position: "absolute",
    left: "95%",
  },
  icon: {
    color: "#000000",
    fontSize: 18,
  },
});

export default Header;
