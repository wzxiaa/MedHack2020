import React, { useState } from "react";
import {
  Alert,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  CalendarList,
  WeekCalendar,
  Agenda,
  changeSelectedDateFromCalendar,
  selectedDateOfTheWeek,
} from "react-native-calendars";

const timeArr = ["12:00 pm","5:00 pm","Before bed","8:00 am","Right after waking up"]
const nameArr = ["Henry","Mike","Juli","Emily","Tom"];
const noteArr = ["Make sure two pills every time",
                 "The resident is currently under stress, encouragement is well needed",
                 "The resident has been through fluctuation of heart beat rate"];
const medArr = ["Lasix", "Synthroid", "Ativan", "Seroquel", "Coumadin", "Lisinopril"];

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const CalenderScreen = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Medicine Taking Details",
              resident: nameArr[Math.floor(Math.random() * nameArr.length)],
              med: medArr[Math.floor(Math.random() * medArr.length)],
              time:  timeArr[Math.floor(Math.random() * timeArr.length)],
              note: noteArr[Math.floor(Math.random() * noteArr.length)],
              height: 140,
            });
          }

          //TODO: query database of the selected date
          //for each item of the selected date, sort by time
          //then add to item array
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
        <Text>Resident name: {item.resident}</Text>
        <Text>Medicine: {item.med}</Text>
        <Text>Time: {item.time}</Text>
        <Text>Note: {item.note}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems.bind(this)}
        renderItem={renderItem.bind(this)}
        renderEmptyDate={renderEmptyDate.bind(this)}
        selected={"2017-05-16"}
      />
    </View>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
