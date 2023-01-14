import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Square from "./components/Square";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Square text="A" />
        <Square text="B" />
        <Square text="C" />
      </View>
      <View style={styles.row}>
        <Square text="D" />
        <Square text="E" />
        <Square text="F" />
      </View>
      <View style={styles.row}>
        <Square text="G" />
        <Square text="H" />
        <Square text="I" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5762B7",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
});