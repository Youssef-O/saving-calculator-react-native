import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';


// function HomeScreen({navigation}) {
  
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [show, setShow] = useState(false);

//   const showDatepicker = () => {
//     setShow(true);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Item Name"
//         placeholderTextColor="#A9A9A9"
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Item Cost"
//         placeholderTextColor="#A9A9A9"
//         style={styles.input}
//         keyboardType="numeric"
//       />
//       <TextInput
//         placeholder="Amount Saved"
//         placeholderTextColor="#A9A9A9"
//         style={styles.input}
//         keyboardType="numeric"
//       />
//       <TouchableOpacity
//         style={styles.dateButton}
//         onPress={showDatepicker}
//       > 
//         <Image style={styles.dateButtonIcon} source={require('./assets/date-range.png')}/>
//         <Text style={styles.text}>Target Date</Text>
//       </TouchableOpacity>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode='date'
//           is24Hour={true}
//           display="default"
//         />
//       )}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Detail')}
//       >
//         <Text style={styles.text}>Calculate</Text>
//       </TouchableOpacity>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const fill = 75;
// function DetailScreen() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.targetDate}>
//         <Text style={styles.h1}>Target Date</Text>
//         <Text style={styles.h3}>01/01/2021</Text>
//       </View>
//       <View>
//         <AnimatedCircularProgress
//           style={styles.ProgressBar}
//           rotation={360}
//           size={210}
//           width={21}
//           fill={75}
//           tintColor="#FFD700"
//           onAnimationComplete={() => console.log('onAnimationComplete')}
//           backgroundColor="#75753d"
//         />
//       </View>
//       <View style={styles.savingsSection}>
//         <Text style={styles.savingsNeedsText}>Savings Needs</Text>
//         <View style={styles.savingsNeeds}>
//           <View>
//             <Text style={styles.h2}>Daily</Text>
//             <Text style={styles.h3}>$8.00</Text>
//           </View>
//           <View>
//             <Text style={styles.h2}>Weekly</Text>
//             <Text style={styles.h3}>$60.00</Text>
//           </View>
//           <View>
//             <Text style={styles.h2}>Monthly</Text>
//             <Text style={styles.h3}>$100.00</Text>
//           </View>
//         </View>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions= {{
          headerStyle: {backgroundColor: '#313131'},
          headerTintColor: '#FFFFFF',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Savings Calculator',
          }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} options={{title: 'Item Name'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   // First screen styling
//   container: {
//     flex: 1,
//     backgroundColor: '#313131',
//     padding: 21,
//   },

//   input: {
//     height: 55,
//     alignSelf: 'stretch',
//     marginTop: 25,
//     backgroundColor: '#282828',
//     paddingLeft: 16,
//     fontSize: 16,
//     color: '#FFFFFF',
//   },

//   text: {
//     textTransform: 'uppercase',
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },

//   dateButton: {
//     flexDirection: 'row',
//     marginTop: 25,
//     padding: 15,
//     alignSelf: 'stretch',
//     alignItems: 'flex-start',
//     width: 158,
//     backgroundColor: '#282828',
//   },

//   dateButtonIcon: {
//     marginRight: 12,
//   },

//   button: {
//     alignItems: "center",
//     alignSelf: 'stretch',
//     backgroundColor: '#FFD700',
//     padding: 10,
//     marginTop: 25,
//   },
  
//   // Second screen styling
//   targetDate: {
//     marginTop: 12,
//     alignItems: 'center',
//   },

//   ProgressBar: {
//     alignSelf: 'center',
//     marginTop: 50,
//   },
  
//   savingsSection: {
//     marginTop: 50,
//     // backgroundColor: '#999999',
//   },
  
//   savingsNeedsText: {
//     alignSelf: 'center',
//     color: '#FFD700',
//     fontWeight: "bold",
//     fontSize : 20,
//   },

//   savingsNeeds: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//     paddingLeft: 20,
//     paddingRight: 20,
//     // backgroundColor: '#666666',
//   },

//   h1: {
//     color: '#FFD700',
//     fontWeight: "bold",
//     fontSize : 20,
//   },

//   h2: {
//     color: '#FFFFFF',
//     fontWeight: "bold",
//     fontSize : 20,
//   },

//   h3: {
//     color: "#FFFFFF",
//     fontSize: 20,
//     marginTop: 14, 
//   },
// });
