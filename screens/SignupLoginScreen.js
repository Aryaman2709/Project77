import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class SignupLoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

   userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return alert("Login Successful")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return alert(errorMessage)
        })
    }

    userSignup = (emailId, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=>{
            return alert("User added successfully")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage =error.message;
            return alert(errorMessage)
        })
    }

  render() {
    return (
      <View style={styles.container}>
      <View>
      <Text style={styles.title}>Barter</Text>
      </View>
        <View>
          <TextInput
            style={styles.loginBox}
            placeholder="Email ID"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({ emailId: text });
            }}
            value={this.state.emailId}></TextInput>
          <TextInput
            style={styles.loginBox}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
            value={this.state.password}>
          </TextInput>
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignup(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EADBB4',
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: '#EB9365',
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    color: '#EB9365',
    fontWeight: 200,
    fontSize: 20,
  },
  title:{
    fontSize: 65,
    fontWeight: 300,
    paddingBottom: 30,
    color: 'black',
  }
});
