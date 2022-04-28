import { Button } from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View
      style={{
        backgroundColor: "#4287f5",
        fontFamily: "monospace",
        // resizeMode: "contain",
        height: "100%",
        width: "100%",
      }}
    >
      <SafeAreaView
        style={{
          backgroundColor: "#fff",
          marginTop: 70,
          width: "50%",
          height: "20%",
          borderTopRightRadius: 90,
          borderBottomRightRadius: 90,
        }}
      >
        <Image
          source={require("../assets/icon.png")}
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: 90,
            borderBottomRightRadius: 90,
          }}
        />
      </SafeAreaView>
      <Text
        style={{
          color: "#fff",
          fontSize: 50,
          marginTop: 30,
          marginLeft: 50,
          fontWeight: "bold",
        }}
      >
        NGUVU
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          marginTop: 10,
          marginLeft: 50,
          fontWeight: "bold",
        }}
      >
        Collect your NGUVU Coins
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          marginTop: 40,
          marginLeft: 50,
          marginBottom: 50,
          fontWeight: "bold",
        }}
      >
        How NGUVU helps?
        {"\n"}
        {"\n"}
        <Text
          style={{
            color: "lightgreen",
            fontSize: 10,
            paddingTop: 100,
          }}
        >
          {"\u2B24"}{" "}
          <Text style={{ color: "#fff", fontSize: 15 }}>
            NGUVU will help you to buy/sell your bit coins
          </Text>
        </Text>
        {"\n"}
        {"\n"}
        <Text
          style={{
            color: "lightgreen",
            fontSize: 10,
            paddingTop: 100,
          }}
        >
          {"\u2B24"}{" "}
          <Text style={{ color: "#fff", fontSize: 15 }}>
            NGUVU will help you to set the price tracker
          </Text>
        </Text>
        {"\n"}
        {"\n"}
        <Text
          style={{
            color: "lightgreen",
            fontSize: 10,
            paddingTop: 100,
          }}
        >
          {"\u2B24"}{" "}
          <Text style={{ color: "#fff", fontSize: 15 }}>
            NGUVU is faster ,smarter and sweet
          </Text>
        </Text>
      </Text>

      <Text style={{ color: "#fff", marginLeft: 50 }}>
        Enter you Mobile Number :{"\n"}
        <TouchableOpacity style={{ height: 40 }}>
          <TextInput
            onChangeText={onChangeNumber}
            value={number}
            placeholder="12345678"
            keyboardType="numeric"
            style={{
              borderWidth: 1,
              borderColor: "black",
              height: 40,
              margin: 12,
              width: 200,
              padding: 10,
              backgroundColor: "#fff",
            }}
          />
          <Button
            style={{
              backgroundColor: "lightgreen",
              borderBottomRightRadius: 40,
              borderTopRightRadius: 40,
            }}
          >
            <AntDesign name="arrowright" size={24} color="black" />
          </Button>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default Login;
