import React from "react";
import { View, StyleSheet, Text, Button,TextInput,TouchableOpacity } from "react-native";

const SignupScreen = ({ navigation }) => {

  const [email, onChangeEmail] = React.useState('');
  const [username, onChangeUsername] = React.useState('');
  const [secondPassword, onChangeSecondPassword] = React.useState('');
  const [password, onChangePassword] = React.useState('');password

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Signup</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => onChangeUsername(text)}
          value={username}
          secureTextEntry
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => onChangePassword(text)}
          value={password}
          secureTextEntry
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => onChangeSecondPassword(text)}
          value={secondPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.signBtn}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.login}>Do you have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}> Login.</Text>
        </TouchableOpacity>
      </View>
      {/* <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="Go to Account"
        onPress={() => navigation.navigate('Account')}
      />
      <Button
        title="Go to Main Flow"
        onPress={() => navigation.navigate('mainFlow')}
     />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 5,
    justifyContent: 'center',
    padding: 20,
  },
  login: {
    color: 'white',
    fontSize: 13,
  },
  loginLink: {
    color: 'white',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  loginText: {
    color: 'white',
    fontSize: 15,
  },
  signBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop:20
  },
});
SignupScreen.navigationOptions = ({ /*navigation*/ }) => {
    return {
        headerShown: false
    }
}
export default SignupScreen;
