import { React, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

import Card from "./Card";

const ItemList = (props) => {
  const { incrementAction, decreaseAction, deleteAction, items } = props;
  const [itemData, setItemData] = useState(null);

  const onIncreasePress = (id) => {
    incrementAction(id);
  };

  const onDecreasePress = (id) => {
    decreaseAction(id);
  };

  const onDeletePress = (id) => {
    deleteAction(id);
  };

  useEffect(() => {
    items && setItemData(items);
  }, [items]);

  return (
    <View>
      {itemData &&
        itemData.map((item, index) => {
          return (
            <Card
              item={item}
              key={item.id}
              onIncreasePress={onIncreasePress}
              onDecreasePress={onDecreasePress}
              onDeletePress={onDeletePress}
            ></Card>
          );
        })}
    </View>
  );
};

export default ItemList;
