import { View, Text } from "react-native";
import React from "react";
import Layout from "../../components/layout/Layout";

const Notifications = () => {
  return (
    <Layout>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text>Oops! You don't have any notifications yet..</Text>
      </View>
    </Layout>
  );
};

export default Notifications;
