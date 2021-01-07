import * as React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Contacts from "expo-contacts";


export default function App() {
  const [contactId, setContactId] = React.useState(null);

  const addContact = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    const contact = {
      [Contacts.Fields.FirstName]: "Bird",
      [Contacts.Fields.LastName]: "Man",
      [Contacts.Fields.Company]: "Young Money",
    };
    const newContactId = await Contacts.addContactAsync(contact);
    setContactId(newContactId);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{contactId}</Text>
      <Button onPress={addContact} title="Add contact" />
      {contactId ? <Button onPress={() => Contacts.presentFormAsync(contactId)} title="Edit contact" /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
