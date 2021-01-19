import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import firestore from '@react-native-firebase/firestore';
const LoginScreen = ({ navigation }) => {
  const [title, onChangeTitle] = React.useState('');
  const [amount, onChangeAmount] = React.useState('');

const addPromiseToBackend = () => {
       firestore().collection('Promises').add({  title,  amount}).then(() => {  console.log('Promise added!');});
}

  //Date Picker
  const [date, setDate] = React.useState(new Date());
  const [show, setShow] = React.useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>New Promise</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Title"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => onChangeTitle(text)}
          value={title}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Amount"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => onChangeAmount(text)}
          value={amount}
        />
      </View>
       <DateTimePicker
        style={{width: 320, backgroundColor: 'white'}}
        testID="dateTimePicker"
        value={date}
        mode="date"
        display="default"
        onChange={onChange}
        textColor="black"
      />

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={addPromiseToBackend}>
        <Text style={styles.loginText}>Create</Text>
      </TouchableOpacity>
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
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginText: {
    color: 'white',
    fontSize: 15,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  signBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});
LoginScreen.navigationOptions = (
  {
    /*navigation*/
  }
) => {
  return {
    headerShown: false,
  };
};
export default LoginScreen;
