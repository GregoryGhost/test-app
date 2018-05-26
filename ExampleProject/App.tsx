/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react'
import { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Alert
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};

export default class App extends Component<Props> {
constructor(props) {
 
    super(props);
 
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    this.state = {
 
      dataSource: ds.cloneWithRows([
           'Привет, Эдик!',
            'Two',
            'Three',
            'Four',
            'Five',
            'Six',
            'Seven',
            'Eight',
            'Nine',
            'Ten',
            'Eleven',
            'Twelve',
            'Two',
            'Three',
            'Four',
            'Five',
            'Six',
            'Seven',
            'Eight',
            'Nine',
            'Ten',
            'Eleven',
            'Twelve'
        ]),
    
    };
 
  }



ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
  

GetListViewItem (rowData) {
   
  Alert.alert(rowData);
 
  }

render() {
    return (
 
<View style={styles.MainContainer}>
  <ListView
 
            dataSource={this.state.dataSource}
 
            renderSeparator= {this.ListViewItemSeparator}
 
            renderRow={
                        (rowData) => <Text style={styles.rowViewContainer} onPress={this.GetListViewItem.bind(this, rowData + rowData.length)}>{rowData + " Размер сообщения: " + rowData.length}</Text>
                      }
 
          />  
</View>
            
    );
  }
  }


const styles = StyleSheet.create({
 
  MainContainer :{
  
    justifyContent: 'center',
    flex:1,
    margin: 10
  },

  rowViewContainer: 
  {

    fontSize: 18,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,

  }
});
