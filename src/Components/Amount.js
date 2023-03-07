import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
const Amount = (props) => {
  const { items } = props;

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    if (items) {
      let total = 0;
      items.forEach((item) => {
        let itemPrice = item.price * item.count;
        total = total + itemPrice;
      });
      setSubTotal(total.toFixed(2));
    }
  }, [items]);

  return (
    <View style={styles.amountContainer}>
      <View style={styles.charges}>
        <Text styles={styles.title}>Delivery Charges</Text>
        <Text>12</Text>
      </View>
      <View style={[styles.charges, styles.subTotal]}>
        <Text styles={styles.title}>Sub Total</Text>
        <Text>{subTotal}</Text>
      </View>
      <View style={styles.charges}>
        <Text styles={styles.title}>Total</Text>
        <Text>{subTotal + 12}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  amountContainer: {
    border: "1px solid #e2e2e2",
    boxShadow: "5px 10px 18px #cdcace",
    borderRadius: "10px",
    padding: "20px",
    marginHorizontal: "20px",
    marginVertical: "10px"
  },
  charges: {
    flex: 1,
    flexDirection: "row",
    marginBottom: "25px",
    justifyContent: "space-between"
  },
  subTotal: {
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 1,
    paddingBottom: "20px"
  },
  title: {
    fontWeight: "700"
  }
});
export default Amount;
