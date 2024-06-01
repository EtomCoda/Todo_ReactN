import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState("");
  const [listgoals, setListgoals] = useState([]);

  const inputGoalsHandler = (text) => {
    setGoals(text);
  };

  const addGoalsHandler = () => {
    setListgoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goals, id: Math.random().toString() },
    ]);
    setGoals(" ");
  };

   const  deleteGoalHandler = (id) => {
    setListgoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
      });
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder="Your goals"
          onChangeText={inputGoalsHandler}
          value={goals}
        />
        <Button
          title="Add Goal"
          onPress={addGoalsHandler}
          color={"#cccccc"}
        ></Button>

        
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={listgoals}
          renderItem={(itemData) => {
            return (
              
              <GoalItem id={itemData.item.id} text={itemData.item.text } onDelete={deleteGoalHandler}  />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#34312D",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textinput: {
    borderRadius: 6,
    backgroundColor: "beige",
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70 %",
    marginRight: 8,
    padding: 5,
  },
  goalsContainer: {
    flex: 5,
  },
});
