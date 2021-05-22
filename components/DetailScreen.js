import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const fill = 75;
function DetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.targetDate}>
        <Text style={styles.h1}>Target Date</Text>
        <Text style={styles.h3}>01/01/2021</Text>
      </View>
      <View>
        <AnimatedCircularProgress
          style={styles.ProgressBar}
          rotation={360}
          size={210}
          width={21}
          fill={75}
          tintColor="#FFD700"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#75753d"
        />
      </View>
      <View style={styles.savingsSection}>
        <Text style={styles.savingsNeedsText}>Savings Needs</Text>
        <View style={styles.savingsNeeds}>
          <View>
            <Text style={styles.h2}>Daily</Text>
            <Text style={styles.h3}>$8.00</Text>
          </View>
          <View>
            <Text style={styles.h2}>Weekly</Text>
            <Text style={styles.h3}>$60.00</Text>
          </View>
          <View>
            <Text style={styles.h2}>Monthly</Text>
            <Text style={styles.h3}>$100.00</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313131',
    padding: 21,
  },
  targetDate: {
    marginTop: 12,
    alignItems: 'center',
  },

  ProgressBar: {
    alignSelf: 'center',
    marginTop: 50,
  },
  
  savingsSection: {
    marginTop: 50,
    // backgroundColor: '#999999',
  },
  
  savingsNeedsText: {
    alignSelf: 'center',
    color: '#FFD700',
    fontWeight: "bold",
    fontSize : 20,
  },

  savingsNeeds: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: '#666666',
  },

  h1: {
    color: '#FFD700',
    fontWeight: "bold",
    fontSize : 20,
  },

  h2: {
    color: '#FFFFFF',
    fontWeight: "bold",
    fontSize : 20,
  },

  h3: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 14, 
  },
});
