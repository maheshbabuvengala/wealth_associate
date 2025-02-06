const districts = [
  { label: "Select District", value: "" }, // Placeholder for selection
  { label: "Srikakulam", value: "Srikakulam", code: "01" },
  { label: "Parvathipuram_Manyam", value: "Parvathipuram Manyam" },
  { label: "Vizianagaram", value: "Vizianagaram" },
  { label: "Visakhapatnam", value: "Visakhapatnam" },
  { label: "Alluri_Sitharama_Raju", value: "Alluri Sitharama Raju" },
  { label: "Anakapalli", value: "Anakapalli" },
  { label: "Kakinada", value: "Kakinada" },
  { label: "Konaseema", value: "Konaseema" },
  { label: "East_Godavari", value: "East Godavari" },
  { label: "West_Godavari", value: "West Godavari" },
  { label: "Eluru", value: "Eluru" },
  { label: "NTR", value: "NTR" },
  { label: "Krishna", value: "Krishna" },
  { label: "Palnadu", value: "Palnadu" },
  { label: "Guntur", value: "Guntur" },
  { label: "Bapatla", value: "Bapatla" },
  { label: "Prakasam", value: "Prakasam" },
  { label: "Nellore", value: "Nellore" },
  { label: "Tirupati", value: "Tirupati" },
  { label: "Annamayya", value: "Annamayya" },
  { label: "Kadapa", value: "Kadapa" },
  { label: "Nandyal", value: "Nandyal" },
  { label: "Kurnool", value: "Kurnool" },
  { label: "Anantapur", value: "Anantapur" },
  { label: "Sri_Sathya_Sai", value: "Sri Sathya Sai" },
  { label: "Chittoor", value: "Chittoor" },
];

const constituenciesByDistrict = {
  Srikakulam: [
    { label: "Ichchapuram", value: "Ichchapuram" },
    { label: "Palasa", value: "Palasa" },
    { label: "Tekkali", value: "Tekkali" },
    { label: "Pathapatnam", value: "Pathapatnam" },
    { label: "Srikakulam", value: "Srikakulam" },
    { label: "Amadalavalasa", value: "Amadalavalasa" },
    { label: "Etcherla", value: "Etcherla" },
    { label: "Narasannapeta", value: "Narasannapeta" },
  ],
  "Parvathipuram Manyam": [
    { label: "Palakonda", value: "Palakonda" },
    { label: "Kurupam", value: "Kurupam" },
    { label: "Parvathipuram", value: "Parvathipuram" },
    { label: "Salur", value: "Salur" },
  ],
  Vizianagaram: [
    { label: "Rajam", value: "Rajam" },
    { label: "Bobbili", value: "Bobbili" },
    { label: "Cheepurupalli", value: "Cheepurupalli" },
    { label: "Gajapathinagaram", value: "Gajapathinagaram" },
    { label: "Nellimarla", value: "Nellimarla" },
    { label: "Vizianagaram", value: "Vizianagaram" },
    { label: "Srungavarapukota", value: "Srungavarapukota" },
  ],
  Visakhapatnam: [
    { label: "Bhimili", value: "Bhimili" },
    { label: "Visakhapatnam East", value: "Visakhapatnam East" },
    { label: "Visakhapatnam South", value: "Visakhapatnam South" },
    { label: "Visakhapatnam North", value: "Visakhapatnam North" },
    { label: "Visakhapatnam West", value: "Visakhapatnam West" },
    { label: "Gajuwaka", value: "Gajuwaka" },
  ],
  "Alluri Sitharama Raju": [
    { label: "Araku Valley", value: "Araku Valley" },
    { label: "Paderu", value: "Paderu" },
    { label: "Rampachodavaram", value: "Rampachodavaram" },
  ],
  Anakapalli: [
    { label: "Chodavaram", value: "Chodavaram" },
    { label: "Madugula", value: "Madugula" },
    { label: "Anakapalle", value: "Anakapalle" },
    { label: "Pendurthi", value: "Pendurthi" },
    { label: "Elamanchili", value: "Elamanchili" },
    { label: "Payakaraopet", value: "Payakaraopet" },
    { label: "Narsipatnam", value: "Narsipatnam" },
  ],
  Kakinada: [
    { label: "Tuni", value: "Tuni" },
    { label: "Prathipadu", value: "Prathipadu" },
    { label: "Pithapuram", value: "Pithapuram" },
    { label: "Kakinada Rural", value: "Kakinada Rural" },
    { label: "Peddapuram", value: "Peddapuram" },
    { label: "Kakinada City", value: "Kakinada City" },
    { label: "Jaggampeta", value: "Jaggampeta" },
  ],
  Konaseema: [
    { label: "Ramachandrapuram", value: "Ramachandrapuram" },
    { label: "Mummidivaram", value: "Mummidivaram" },
    { label: "Amalapuram", value: "Amalapuram" },
    { label: "Razole", value: "Razole" },
    { label: "Gannavaram", value: "Gannavaram" },
    { label: "Kothapeta", value: "Kothapeta" },
    { label: "Mandapeta", value: "Mandapeta" },
  ],
  "East Godavari": [
    { label: "Rajanagaram", value: "Rajanagaram" },
    { label: "Rajahmundry City", value: "Rajahmundry City" },
    { label: "Rajahmundry Rural", value: "Rajahmundry Rural" },
    { label: "Kovvur", value: "Kovvur" },
    { label: "Nidadavole", value: "Nidadavole" },
    { label: "Achanta", value: "Achanta" },
    { label: "Palakollu", value: "Palakollu" },
    { label: "Narasapuram", value: "Narasapuram" },
    { label: "Bhimavaram", value: "Bhimavaram" },
    { label: "Undi", value: "Undi" },
    { label: "Tanuku", value: "Tanuku" },
    { label: "Tadepalligudem", value: "Tadepalligudem" },
    { label: "Gopalapuram", value: "Gopalapuram" },
  ],
  "West Godavari": [
    { label: "Unguturu", value: "Unguturu" },
    { label: "Denduluru", value: "Denduluru" },
    { label: "Eluru", value: "Eluru" },
    { label: "Polavaram", value: "Polavaram" },
    { label: "Chintalapudi", value: "Chintalapudi" },
    { label: "Tiruvuru", value: "Tiruvuru" },
    { label: "Nuzvid", value: "Nuzvid" },
    { label: "Kaikalur", value: "Kaikalur" },
  ],
  Krishna: [
    { label: "Gannavaram", value: "Gannavaram" },
    { label: "Gudivada", value: "Gudivada" },
    { label: "Pedana", value: "Pedana" },
    { label: "Machilipatnam", value: "Machilipatnam" },
    { label: "Avanigadda", value: "Avanigadda" },
    { label: "Pamarru", value: "Pamarru" },
    { label: "Penamaluru", value: "Penamaluru" },
  ],
  NTR: [
    { label: "Vijayawada West", value: "Vijayawada West" },
    { label: "Vijayawada Central", value: "Vijayawada Central" },
    { label: "Vijayawada East", value: "Vijayawada East" },
    { label: "Mylavaram", value: "Mylavaram" },
    { label: "Nandigama", value: "Nandigama" },
    { label: "Jaggayyapeta", value: "Jaggayyapeta" },
  ],
  Palnadu: [
    { label: "Pedakurapadu", value: "Pedakurapadu" },
    { label: "Tadikonda", value: "Tadikonda" },
    { label: "Mangalagiri", value: "Mangalagiri" },
    { label: "Ponnuru", value: "Ponnuru" },
    { label: "Vemuru", value: "Vemuru" },
    { label: "Repalle", value: "Repalle" },
    { label: "Tenali", value: "Tenali" },
    { label: "Bapatla", value: "Bapatla" },
    { label: "Prathipadu", value: "Prathipadu" },
    { label: "Guntur West", value: "Guntur West" },
    { label: "Guntur East", value: "Guntur East" },
    { label: "Chilakaluripet", value: "Chilakaluripet" },
    { label: "Narasaraopet", value: "Narasaraopet" },
    { label: "Sattenapalle", value: "Sattenapalle" },
    { label: "Vinukonda", value: "Vinukonda" },
    { label: "Gurajala", value: "Gurajala" },
    { label: "Macherla", value: "Macherla" },
  ],
  Guntur: [
    { label: "Yerragondapalem", value: "Yerragondapalem" },
    { label: "Darsi", value: "Darsi" },
    { label: "Parchur", value: "Parchur" },
    { label: "Addanki", value: "Addanki" },
    { label: "Chirala", value: "Chirala" },
    { label: "Santhanuthalapadu", value: "Santhanuthalapadu" },
    { label: "Ongole", value: "Ongole" },
    { label: "Kandukur", value: "Kandukur" },
    { label: "Kondapi", value: "Kondapi" },
    { label: "Markapuram", value: "Markapuram" },
    { label: "Giddalur", value: "Giddalur" },
    { label: "Kanigiri", value: "Kanigiri" },
  ],
  Bapatla: [
    { label: "Kavali", value: "Kavali" },
    { label: "Atmakur", value: "Atmakur" },
    { label: "Kovur", value: "Kovur" },
    { label: "Nellore City", value: "Nellore City" },
    { label: "Nellore Rural", value: "Nellore Rural" },
    { label: "Sarvepalli", value: "Sarvepalli" },
    { label: "Gudur", value: "Gudur" },
    { label: "Sullurpeta", value: "Sullurpeta" },
    { label: "Venkatagiri", value: "Venkatagiri" },
    { label: "Udayagiri", value: "Udayagiri" },
  ],
  Prakasam: [
    { label: "Badvel", value: "Badvel" },
    { label: "Rajampet", value: "Rajampet" },
    { label: "Kadapa", value: "Kadapa" },
    { label: "Kodur", value: "Kodur" },
    { label: "Rayachoti", value: "Rayachoti" },
    { label: "Pulivendla", value: "Pulivendla" },
    { label: "Kamalapuram", value: "Kamalapuram" },
    { label: "Jammalamadugu", value: "Jammalamadugu" },
    { label: "Proddatur", value: "Proddatur" },
    { label: "Mydukur", value: "Mydukur" },
  ],
  Nellore: [
    { label: "Allagadda", value: "Allagadda" },
    { label: "Srisailam", value: "Srisailam" },
    { label: "Nandikotkur", value: "Nandikotkur" },
    { label: "Kurnool", value: "Kurnool" },
    { label: "Panyam", value: "Panyam" },
    { label: "Nandyal", value: "Nandyal" },
    { label: "Banaganapalle", value: "Banaganapalle" },
    { label: "Dhone", value: "Dhone" },
    { label: "Pattikonda", value: "Pattikonda" },
    { label: "Kodumur", value: "Kodumur" },
    { label: "Yemmiganur", value: "Yemmiganur" },
    { label: "Mantralayam", value: "Mantralayam" },
    { label: "Adoni", value: "Adoni" },
    { label: "Alur", value: "Alur" },
  ],
  Tirupati: [
    { label: "Rayadurg", value: "Rayadurg" },
    { label: "Uravakonda", value: "Uravakonda" },
    { label: "Guntakal", value: "Guntakal" },
    { label: "Tadipatri", value: "Tadipatri" },
    { label: "Singanamala", value: "Singanamala" },
    { label: "Anantapur Urban", value: "Anantapur Urban" },
    { label: "Kalyandurg", value: "Kalyandurg" },
    { label: "Raptadu", value: "Raptadu" },
    { label: "Madakasira", value: "Madakasira" },
    { label: "Hindupur", value: "Hindupur" },
    { label: "Penukonda", value: "Penukonda" },
    { label: "Puttaparthi", value: "Puttaparthi" },
    { label: "Dharmavaram", value: "Dharmavaram" },
    { label: "Kadiri", value: "Kadiri" },
  ],
  Annamayya: [
    { label: "Thamballapalle", value: "Thamballapalle" },
    { label: "Pileru", value: "Pileru" },
    { label: "Madanapalle", value: "Madanapalle" },
    { label: "Punganur", value: "Punganur" },
    { label: "Chandragiri", value: "Chandragiri" },
    { label: "Tirupati", value: "Tirupati" },
    { label: "Srikalahasti", value: "Srikalahasti" },
    { label: "Sathyavedu", value: "Sathyavedu" },
    { label: "Nagari", value: "Nagari" },
    { label: "Gangadhara Nellore", value: "Gangadhara Nellore" },
    { label: "Chittoor", value: "Chittoor" },
    { label: "Puthalapattu", value: "Puthalapattu" },
    { label: "Palamaner", value: "Palamaner" },
    { label: "Kuppam", value: "Kuppam" },
  ],
  Nandyal: [
    { label: "Nandyal", value: "Nandyal" },
    { label: "Allagadda", value: "Allagadda" },
    { label: "Srisailam", value: "Srisailam" },
    { label: "Nandikotkur", value: "Nandikotkur" },
    { label: "Panyam", value: "Panyam" },
    { label: "Banaganapalle", value: "Banaganapalle" },
    { label: "Dhone", value: "Dhone" },
  ],
  Kadapa: [
    { label: "Badvel", value: "Badvel" },
    { label: "Kadapa", value: "Kadapa" },
    { label: "Kodur", value: "Kodur" },
    { label: "Rayachoti", value: "Rayachoti" },
    { label: "Pulivendla", value: "Pulivendla" },
    { label: "Kamalapuram", value: "Kamalapuram" },
    { label: "Jammalamadugu", value: "Jammalamadugu" },
    { label: "Proddatur", value: "Proddatur" },
    { label: "Mydukur", value: "Mydukur" },
  ],
  Kurnool: [
    { label: "Nandyal", value: "Nandyal" },
    { label: "Allagadda", value: "Allagadda" },
    { label: "Srisailam", value: "Srisailam" },
    { label: "Nandikotkur", value: "Nandikotkur" },
    { label: "Panyam", value: "Panyam" },
    { label: "Banaganapalle", value: "Banaganapalle" },
    { label: "Dhone", value: "Dhone" },
    { label: "Kurnool", value: "Kurnool" },
    { label: "Pattikonda", value: "Pattikonda" },
    { label: "Kodumur", value: "Kodumur" },
    { label: "Yemmiganur", value: "Yemmiganur" },
    { label: "Mantralayam", value: "Mantralayam" },
    { label: "Adoni", value: "Adoni" },
    { label: "Alur", value: "Alur" },
  ],
  Anantapur: [
    { label: "Rayadurg", value: "Rayadurg" },
    { label: "Uravakonda", value: "Uravakonda" },
    { label: "Guntakal", value: "Guntakal" },
    { label: "Tadipatri", value: "Tadipatri" },
    { label: "Singanamala", value: "Singanamala" },
    { label: "Anantapur Urban", value: "Anantapur Urban" },
    { label: "Kalyandurg", value: "Kalyandurg" },
    { label: "Raptadu", value: "Raptadu" },
    { label: "Sri Sathya Sai", value: "Sri Sathya Sai" },
    { label: "Madakasira", value: "Madakasira" },
    { label: "Hindupur", value: "Hindupur" },
    { label: "Penukonda", value: "Penukonda" },
    { label: "Puttaparthi", value: "Puttaparthi" },
    { label: "Dharmavaram", value: "Dharmavaram" },
    { label: "Kadiri", value: "Kadiri" },
  ],
  Chittoor: [
    { label: "Thamballapalle", value: "Thamballapalle" },
    { label: "Pileru", value: "Pileru" },
    { label: "Madanapalle", value: "Madanapalle" },
    { label: "Punganur", value: "Punganur" },
    { label: "Chandragiri", value: "Chandragiri" },
    { label: "Tirupati", value: "Tirupati" },
    { label: "Srikalahasti", value: "Srikalahasti" },
    { label: "Sathyavedu", value: "Sathyavedu" },
    { label: "Nagari", value: "Nagari" },
    { label: "Gangadhara Nellore", value: "Gangadhara Nellore" },
    { label: "Chittoor", value: "Chittoor" },
    { label: "Puthalapattu", value: "Puthalapattu" },
    { label: "Palamaner", value: "Palamaner" },
    { label: "Kuppam", value: "Kuppam" },
  ],
  "Sri Sathya Sai": [
    { label: "Madakasira", value: "Madakasira" },
    { label: "Hindupur", value: "Hindupur" },
    { label: "Penukonda", value: "Penukonda" },
    { label: "Puttaparthi", value: "Puttaparthi" },
    { label: "Dharmavaram", value: "Dharmavaram" },
    { label: "Kadiri", value: "Kadiri" },
    { label: "Thamballapalle", value: "Thamballapalle" },
  ],
};

import React from "react";
import { View, StyleSheet } from "react-native";
import StackNavigator from "./StackNavigator";

export default function App() {
  return <StackNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9FAFB",
  },
});
