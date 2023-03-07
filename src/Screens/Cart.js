import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import ItemList from "../Components/ItemList";
import Amount from "../Components/Amount";
import {
  incrementAction,
  decreaseAction,
  deleteAction,
  removeItem
} from "../Screens/Services/Cart/action";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";

const Cart = (props) => {
  const { incrementAction, decreaseAction, items, deleteAction } = props;

  return (
    <View>
      <Navbar />
      <ItemList
        items={items}
        incrementAction={incrementAction}
        decreaseAction={decreaseAction}
        deleteAction={deleteAction}
        removeItem={removeItem}
      ></ItemList>
      <Amount items={items} />
    </View>
  );
};

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: (id) => dispatch(incrementAction(id)),
  decreaseAction: (id) => dispatch(decreaseAction(id)),
  deleteAction: (id) => dispatch(deleteAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
