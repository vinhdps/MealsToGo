import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://lh3.googleusercontent.com/proxy/Xg2tP0RAPMRuiex4KHvr6HK1be-u756QETLJnHm0IJ2nRyEh07wyFZH_fnVgr-CU926y7vIDHP9quc9vo01qFHe7VgpUji_4CTPEFQOcr_-9rGw",
    ],
    address = "Somewhere",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
    paddingBottom: 10,
  },
});
