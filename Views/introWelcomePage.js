import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  title: {
    fontSize: 24,
    color: "white",
  },
  text: {
    fontSize: 22,
    color: "white",
  },
});
const slides = [
  {
    key: 1,
    title: "Welcome to Nguvu",
    text: "Description.\nSay something cool",
    image: require("../assets/splash-banckgound-circle.png"), ///nguvu assests/splash-banckgound-circle.png"),
    description: "Looking for online tarding, Best place for Crypto coins",
    backgroundColor: "#4287f5",
  },
  {
    key: 2,
    title: "We have the best selling experience",
    text: "Other cool stuff",
    image: require("../assets/rocket.png"),
    description: "The fastest and the coolest way to trade",
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Crypto Coins",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/trophy.png"),
    description: "Looking for online trading, Best place for Crypto coins",
    backgroundColor: "#22bcb5",
  },
];

const WelcomeSlides = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView
        style={{
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "center",
          // resizeMode: "contain",
          height: "100%",
          width: "100%",
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={{ width: "100%", height: "70%" }} />
        <Text style={styles.text}>{item.description}</Text>
      </SafeAreaView>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign
          name="rightcircle"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  const _renderPreviousButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign
          name="leftcircle"
          size={24}
          color="rgba(255, 255, 255, .9)"
        />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <AntDesign
          name="check"
          color="rgba(255, 255, 255, .9)"
          size={24}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      showPrevButton="true"
      renderPrevButton={_renderPreviousButton}
      contentContainerStyle={{
        resizeMode: "contain",
      }}
    />
  );
};

export default WelcomeSlides;
