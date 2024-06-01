import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function GoalItem(props) {
  return (
    <View style={styles.listsStructure}>
      <Pressable style={({ pressed }) => [{ color: pressed ? "red" : "#D9C5B2" }]}
>
        <View>
          <FontAwesome.Button
            name="circle-o"
            onPress={props.onDelete.bind(this, props.id)}
            size={25}
            color={ pressed ? "red" : "#D9C5B2" }
            backgroundColor={"transparent"}
          />
        </View>
      </Pressable>
      <View style={styles.listgoals}>
        <View></View>
        <Text style={styles.goalText}> {props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listgoals: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 7,
    margin: 10,
  },
  goalText: {
    paddingLeft: 2,
    padding: 5,
    color: "#F3F3F4",
  },
  listsStructure: {
    flex: 1,
    flexDirection: "row",
  },
  doneButton: {
    backgroundColor: "transparent",
  },
});
