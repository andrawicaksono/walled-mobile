import React from "react";
import {
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

const TermsAndConditions = ({ isVisible, onPressButton }) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <View style={styles.scrollContainer}>
                <Text style={styles.modalText}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                  iure, id, modi ab cumque officiis obcaecati voluptas
                  reiciendis consequuntur ipsum enim neque dolor? Saepe
                  reprehenderit similique odit soluta rerum! Repudiandae
                  praesentium tenetur consectetur voluptate nihil enim
                  recusandae magnam? Culpa, iure, tempora ipsa amet quos,
                  impedit assumenda laboriosam quaerat laborum eveniet earum!
                  Ipsam expedita blanditiis amet iure praesentium quo non minima
                  natus deleniti vel dicta, accusamus corrupti quae eos dolor
                  incidunt dignissimos ratione voluptatum quia. Ipsam quibusdam
                  minima praesentium consequatur id nisi unde, tempora
                  repudiandae perferendis. Ullam, cum, quaerat consequatur
                  dignissimos ex incidunt temporibus omnis numquam sit ducimus
                  qui minima natus pariatur repellendus deserunt veritatis nam
                  blanditiis possimus cupiditate dolores. Neque, modi dolores?
                  Repellat optio facere architecto reprehenderit maxime eaque,
                  laboriosam assumenda dolores modi odit fugiat similique labore
                  fuga accusamus necessitatibus dolorum nam dolor. Explicabo id
                  maiores accusantium nostrum illum quae expedita incidunt, rem
                  suscipit nam, ea nihil doloribus impedit, eligendi facilis
                  dolorum error? Voluptate quis eligendi similique ipsam
                  officiis placeat iste nisi adipisci ipsum vel, non cum vero
                  tempore corporis, architecto molestiae unde recusandae
                  expedita ducimus natus doloribus minima! Adipisci eius quaerat
                  ipsum vel eaque aperiam molestiae excepturi commodi ratione
                  dicta, earum doloribus qui necessitatibus ipsam laborum
                  exercitationem magni odit.
                </Text>
                <TouchableOpacity style={styles.button} onPress={onPressButton}>
                  <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    maxHeight: 500,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "justify",
  },
  button: {
    backgroundColor: "#088A85",
    borderRadius: 6,
    alignItems: "center",
    padding: 12,
    width: "90%",
    color: "#fff",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollContainer: {
    alignItems: "center",
  },
});

export default TermsAndConditions;
