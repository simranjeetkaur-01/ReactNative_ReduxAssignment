import { React, useEffect, useState } from "react";
import Delete from "../assets/Delete.png";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

const Card = (props) => {
  const { item, onIncreasePress, onDecreasePress, onDeletePress } = props;
  return (
    <View style={styles.card} key={item.id}>
      <View style={styles.aboutContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>{`$${item.price}/kg`}</Text>
          <Text style={styles.date}>Tuesday, 7 March</Text>
        </View>
      </View>
      <View style={{ justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "space-between"
          }}
        >
          <TouchableOpacity
            onPress={() => onIncreasePress(item.id)}
            style={styles.increaseButton}
          >
            <Text>+</Text>
          </TouchableOpacity>
          <View style={styles.counter}>{item.count}</View>
          <TouchableOpacity
            onPress={() =>
              item.count === 1
                ? onDeletePress(item.id)
                : onDecreasePress(item.id)
            }
            style={styles.decreaseButton}
          >
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => onDeletePress(item.id)}
          style={{ alignItems: "flex-end" }}
        >
          <View>
            <Image source={Delete} style={styles.deleteIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    border: "1px solid #e2e2e2",
    boxShadow: "5px 10px 18px #cdcace",
    borderRadius: "10px",
    padding: "20px",
    marginHorizontal: "20px",
    marginVertical: "10px"
  },
  aboutContainer: {
    flexDirection: "row"
  },
  imageContainer: {
    paddingHorizontal: "30px",
    paddingVertical: "20px",
    backgroundColor: "#f5e6fd",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 40,
    marginRight: "20px"
  },
  itemImage: {
    height: 35,
    width: 35
  },
  itemName: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "5px"
  },
  counter: {
    width: 30,
    height: 0,
    alignItems: "center",
    fontSize: "20px"
  },
  increaseButton: {
    border: "2px solid black",
    borderRadius: "50%",
    padding: "2px",
    height: 22,
    width: 22,
    justifyContent: "center",
    alignItems: "center"
  },
  decreaseButton: {
    border: "2px solid black",
    borderRadius: "50%",
    padding: "2px",
    height: 22,
    width: 22,
    justifyContent: "center",
    alignItems: "center"
  },
  deleteIcon: {
    height: 18,
    width: 18
  },
  date: {
    marginTop: "20px"
  }
});

export default Card;
