import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


function HomeScreen({navigation}) {
  
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
  
    const showDatepicker = () => {
      setShow(true);
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Item Name"
          placeholderTextColor="#A9A9A9"
          style={styles.input}
        />
        <TextInput
          placeholder="Item Cost"
          placeholderTextColor="#A9A9A9"
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Amount Saved"
          placeholderTextColor="#A9A9A9"
          style={styles.input}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.dateButton}
          onPress={showDatepicker}
        > 
          <Image style={styles.dateButtonIcon} source={require('../assets/date-range.png')}/>
          <Text style={styles.text}>Target Date</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode='date'
            is24Hour={true}
            display="default"
          />
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Detail')}
        >
          <Text style={styles.text}>Calculate</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313131',
        padding: 21,
      },
    
      input: {
        height: 55,
        alignSelf: 'stretch',
        marginTop: 25,
        backgroundColor: '#282828',
        paddingLeft: 16,
        fontSize: 16,
        color: '#FFFFFF',
      },
    
      text: {
        textTransform: 'uppercase',
        color: '#FFFFFF',
        fontWeight: 'bold',
      },
    
      dateButton: {
        flexDirection: 'row',
        marginTop: 25,
        padding: 15,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        width: 158,
        backgroundColor: '#282828',
      },
    
      dateButtonIcon: {
        marginRight: 12,
      },
    
      button: {
        alignItems: "center",
        alignSelf: 'stretch',
        backgroundColor: '#FFD700',
        padding: 10,
        marginTop: 25,
      },
  });

  export default HomeScreen;
