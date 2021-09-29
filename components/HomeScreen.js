import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


function HomeScreen({navigation}) {
  
    const [itemName, setItemName] = useState('');
    const [itemCost, setItemCost] = useState('');
    const [amountSaved, setAmountSaved] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const {DateTime} = require("luxon");

    useEffect(() => {
      setShow(false);
    })
    
    const showDatepicker = () => {
        setShow(true);
        console.log("Date Picker State: " + show);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const calculateSavingsGoals = () => {

        const totalAmountToSave = itemCost - amountSaved;

        const currentDate = new Date();

        const durationInMilliseconds = date - currentDate;
        const durationInDays = durationInMilliseconds/(8.64e+7);
        const durationInWeeks = durationInDays/7;
        const durationInMonths = durationInWeeks/4.345;

        const dailySavingGoal = (totalAmountToSave/durationInDays).toFixed(2);
        const weeklySavingGoal = (totalAmountToSave/durationInWeeks).toFixed(2);
        const monthlySavingGoal = (totalAmountToSave/durationInMonths).toFixed(2);

        const progressInPercentage = (amountSaved * 100) / itemCost;

        console.log('Progress in percentage:');
        console.log(progressInPercentage);
        
        navigation.navigate('Detail', {
            itemName: itemName,
            targetDate: DateTime.fromJSDate(date).toFormat('dd/MM/yyyy'),
            progressInPercentage: progressInPercentage,
            dailySavingGoal: dailySavingGoal,
            weeklySavingGoal: weeklySavingGoal,
            monthlySavingGoal: monthlySavingGoal,
        });
    } 
  
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Item Name"
          placeholderTextColor="#A9A9A9"
          style={styles.input}
          onChangeText={(itemName) => setItemName(itemName)}
          value={itemName}
        />
        <TextInput
          placeholder="Item Cost"
          placeholderTextColor="#A9A9A9"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(itemCost) => setItemCost(itemCost)}
          value={itemCost}
        />
        <TextInput
          placeholder="Amount Saved"
          placeholderTextColor="#A9A9A9"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(amountSaved) => setAmountSaved(amountSaved)}
          value={amountSaved}
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
            minimumDate={new Date()}
            value={date}
            mode='date'
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={calculateSavingsGoals}
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
