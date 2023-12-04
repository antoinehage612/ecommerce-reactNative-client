import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Form/InputBox";

const Register = ({ navigation }) => {
  const loginImage =
    "https://www.certifiedfinancialguardian.com/images/blog-wp-login.png";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");

  //login function
  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please provide all fields");
    }
    alert("Registration Successfull");
    navigation.navigate("login");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
      <InputBox
        placeholder={"Enter Your Name"}
        value={name}
        setValue={setName}
        autoComplete={"name"}
      />
      <InputBox
        placeholder={"Enter Your Email"}
        value={email}
        setValue={setEmail}
        autoComplete={"email"}
      />
      <InputBox
        placeholder={"Enter Your Password"}
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <InputBox
        placeholder={"Enter Your address"}
        value={address}
        setValue={setAddress}
        autoComplete={"address-line1"}
      />
      <InputBox
        placeholder={"Enter Your City"}
        value={city}
        setValue={setCity}
        autoComplete={"country"}
      />
      <InputBox
        placeholder={"Enter Your Contact Number"}
        value={contact}
        setValue={setContact}
        autoComplete={"tel"}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Already a user ? {""}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("login")}
          >
            login !
          </Text>
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});

export default Register;
