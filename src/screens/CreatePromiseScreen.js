import React, {useState} from 'react';
import {View,StyleSheet,Text,Button,TextInput,TouchableOpacity,} from 'react-native';
import DatePicker from 'react-native-date-picker';
import firestore from '@react-native-firebase/firestore';

const LoginScreen = ({ navigation }) => {
  
  const [title, onChangeTitle] = useState('');
  const [amount, onChangeAmount] = useState('');
  const [inputError, setInputError] = useState(false);
const addPromiseToBackend = () => {

  (title.trim() === '' || amount.trim() === '') ?  setInputError(true) :
       firestore().collection('Promises')
       .add({  title,  amount, date})
       .then(() => {  
         console.log('Promise added!');  
         setInputError(false); navigation.navigate('Home')
        })
}

  //Date Picker
  const [date, setDate] = useState(new Date());


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
          required
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Amount"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => onChangeAmount(text)}
          value={amount}
          required
        />
      </View>
      <DatePicker date={date} onDateChange={setDate} />

      <TouchableOpacity style={styles.loginBtn} onPress={addPromiseToBackend}>
        <Text style={styles.loginText}>Create</Text>
      </TouchableOpacity>
      {inputError && (
        <Text style={styles.loginText}>
          Please add valid
          <Text style={{fontWeight: 'bold'}}> Title</Text> and
          <Text style={{fontWeight: 'bold'}}> Amount</Text>
        </Text>
      )}
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
