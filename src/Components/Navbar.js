import { View, Image, StyleSheet, Text } from "react-native";
import Hamburger from "../assets/Hamburger.png";
import Bag from "../assets/Bag.png";
const Navbar = () => {
  return (
    <View style={styles.navContainer}>
      <View
        style={{
          flexDirection: "row",
          width: "35%",
          justifyContent: "space-between"
        }}
      >
        <Image source={Hamburger} style={styles.hamburger} />
        <Text style={styles.title}>Avenue</Text>
      </View>
      <View>
        <Image source={Bag} style={styles.bagIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    marginBottom: "10px",
    paddingHorizontal: "18px",
    paddingVertical: "10px",
    borderBottom: "1px solid #e2e2e2",
    boxShadow: "5px 10px 18px #cdcace",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  hamburger: {
    height: 30,
    width: 20
  },
  title: {
    fontSize: "22px",
    fontWeight: "700",
    fontStyle: "italic"
  },
  bagIcon: {
    height: 20,
    width: 20
  }
});

export default Navbar;
