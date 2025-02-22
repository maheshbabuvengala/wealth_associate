import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");
const isWeb = Platform.OS === "web";

const actionButtons = [
  { title: "Post a Property", subtext: "(Free)", icon: "home" },
  { title: "Request a Property", icon: "home-search" },
  { title: "Add a Club Member", icon: "account-plus" },
  { title: "Request Expert", icon: "account-check" },
];

const coreClients = [
  {
    name: "Harischandra Townships",
    logo: require("../assets/Logo Final 1.png"),
  },
];

const coreProjects = [
  { name: "Bay Town", logo: require("../assets/Main-Logo (1) 1.png") },
  { name: "Icon", logo: require("../assets/Meenakshi-Icon-Blac (2) 1.png") },
  {
    name: "Surya Avenue",
    logo: require("../assets/Surya Avenue Logo[1] 1.png"),
  },
  { name: "The Park Vue", logo: require("../assets/Logo 1.png") },
];

const properties = new Array(4).fill({
  title: "Individual House for Sale",
  propertyType: "Independent House",
  location: "Vijayawada",
  budget: "₹ 5,00,000",
  image: require("../assets/SW_FleetHouse_44_JackHobhouse 1.png"),
});

const Agent_Right = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        {actionButtons.map((btn, index) => (
          <TouchableOpacity key={index} style={styles.actionButton}>
            <View style={styles.iconCircle}>
              <Icon
                name={btn.icon}
                size={Platform.OS === "web" ? 40 : 30}
                color="#E91E63"
              />
            </View>
            <Text style={styles.actionText}>{btn.title}</Text>
            {btn.subtext && <Text style={styles.subtext}>{btn.subtext}</Text>}
          </TouchableOpacity>
        ))}
      </View>

      {/* Core Clients */}
      <Text style={styles.sectionTitle}>Core Clients</Text>
      <View style={styles.cardContainer}>
        {coreClients.map((client, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={client.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        ))}
      </View>

      {/* Core Projects */}
      <Text style={styles.sectionTitle}>Core Projects</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.projectScroll}
      >
        {coreProjects.map((project, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={project.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        ))}
      </ScrollView>

      {/* Properties */}
      <View style={styles.propertiesHeader}>
        <Text style={styles.sectionTitle}>Properties</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="Select Filter" value="" />
        </Picker>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.propertyScroll}
      >
        {properties.map((property, index) => (
          <View key={index} style={styles.propertyCard}>
            <Image source={property.image} style={styles.propertyImage} />
            <View style={styles.approvedBadge}>
              <Text style={styles.badgeText}>Approved</Text>
            </View>
            <Text style={styles.propertyTitle}>{property.title}</Text>
            <Text style={styles.propertyInfo}>
              Property Type: {property.propertyType}
            </Text>
            <Text style={styles.propertyInfo}>
              Location: {property.location}
            </Text>
            <Text style={styles.propertyBudget}>Budget: {property.budget}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Version Info */}
      <Text style={styles.version}>Version : 1.0.0.2025</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },

  // Action Buttons
  actionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  actionButton: {
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 10,
    width: isWeb ? 100 : 80,
  },
  iconCircle: {
    width: isWeb ? 80 : 60,
    height: isWeb ? 80 : 60,
    borderRadius: isWeb ? 40 : 30,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  actionText: {
    fontSize: isWeb ? 14 : 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtext: { fontSize: 12, color: "red", textAlign: "center" },

  // Section Titles
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginTop: Platform.OS === "web" ? "auto" : 40,
  },

  // Core Clients & Projects
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: isWeb ? 200 : 150, // Fixed width for horizontal scrolling
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 10, // Add margin between cards
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  logo: { width: "80%", height: "80%" },

  // Core Projects Scroll
  projectScroll: { marginVertical: 10 },

  // Properties
  propertiesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  picker: {
    width: 150,
    height: Platform.OS === "web" ? 40 : 50,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "web" ? "auto" : 30,
    borderWidth: Platform.OS === "android" ? 1 : 0, // Add border for Android
    borderColor: "black",
    borderRadius: Platform.OS === "android" ? 5 : 0, // Add border radius for Android
  },
  propertyScroll: { marginVertical: 10 },
  propertyCard: {
    width: isWeb ? 250 : 180,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  propertyImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  approvedBadge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "green",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
  badgeText: { color: "#fff", fontSize: 12 },
  propertyTitle: { fontSize: 14, fontWeight: "bold", margin: 5 },
  propertyInfo: { fontSize: 12, marginLeft: 5 },
  propertyBudget: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
    color: "green",
  },

  // Version Info
  version: {
    textAlign: "center",
    fontSize: 12,
    marginVertical: 10,
    color: "gray",
  },
});

export default Agent_Right;
