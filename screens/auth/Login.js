import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Form/InputBox";

const Login = ({ navigation }) => {
  const loginImage =
    "https://www.certifiedfinancialguardian.com/images/blog-wp-login.png";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login function
  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please Add Email or Password");
    }
    alert("Logged-in Successfully");
    navigation.navigate("home");
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} style={styles.image} />
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
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text>
          Don't Have an Account ? {""}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("register")}
          >
            Register !
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

export default Login;
