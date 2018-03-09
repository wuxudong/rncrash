import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Types from './Types'

export default class App extends React.Component {
 constructor() {
    super();

    this.state = {
      data: Array.from(new Array(500), (val, index) => index),     
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Type of first element of data</Text>
        <Types data={this.state.data} style={{height:30, width:100}}/>
        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
