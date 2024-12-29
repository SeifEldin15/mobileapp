import { Image, StyleSheet,TextInput, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import  AntDesign  from "@expo/vector-icons/AntDesign";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { router } from 'expo-router';

const LoginScreen = () => {

    const handleRegister = () => {
        router.push('/Signup');
    };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("D:/Gencare/MyProject/assets/images/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>GenCare</Text>
      </View>
      <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>
      <View style = {styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder="Username" />
      </View>
      <View style = {styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="#9A9A9A" style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder="Password" secureTextEntry/>
      </View>

      <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>

      <View style={styles.signinButtonContainer}>
        <Text style={styles.signIn}>Sign in</Text>
        <LinearGradient
            colors = {["#F97794", "#623AA2"]}
            style={styles.linearGradient}>
            <AntDesign name="arrowright" size={24} color="#FFFFFF" />
        </LinearGradient>
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.footerText}>Don't have an account?{" "} <Text style={{textDecorationLine: "underline"}}>Create</Text>
        </Text>
      </TouchableOpacity>
        <View style={styles.leftVectorContainer}>
        <ImageBackground
          source={require("D:/Gencare/MyProject/assets/images/Vector 2.png")}
          style={styles.leftVectorImage}/>
        </View>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    position: "relative",
  },
  topImageContainer: {},
  topImage: {
    width: "100%",
    height: 130,
  },
  helloContainer: {},
  helloText: {
    textAlign: "center",
    fontSize: 70,
    fontWeight: "500",
    color: "#262626",
  },
  signInText: {
    textAlign: "center",
    fontSize: 18,
    color:"#262626",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 40,
    marginVertical: 20,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    elevation: 10,
    height: 50,
  },
  inputIcon: {
    marginLeft: 15,
    marginRight: 5,
  },
  textInput: {
    flex: 1, 
  },
    forgotPasswordText: {
        textAlign: "right",
        color: "#BEBEBE",
        fontSize: 16,
        marginRight: 40,
        width: "90%",
    },
    signinButtonContainer: {
        flexDirection: "row",
        marginTop: 80,
        justifyContent: "flex-end",
        width: "90%",

    },
    signIn:{
        color: "#262626",
        fontSize: 25,
        fontWeight: "bold",
    },
    linearGradient: {
        width: 56,
        height: 34,
        borderRadius: 17,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    footerText: {
        textAlign: "center",
        color: "#262626",
        fontSize: 18,
        marginTop: 80,
    },
    leftVectorContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    leftVectorImage: {
        width: 250,
        height: 500,
    },

});
