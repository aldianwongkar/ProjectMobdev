import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TextGlobal from './Component/TextGlobal';
import Header from './Component/Header';
import Global from './Component/Global';
import TextIndonesia from './Component/TextIndonesia';
import Indonesia from './Component/Indonesia';
const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Header/>
        </View>
        <View style={styles.boxGlob}>
            <TextGlobal/>
            <Global/>
        </View>
        <View style={styles.boxIndo}>
          <TextIndonesia/>
          <Indonesia/>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'white',
      alignItems: 'stretch',
      justifyContent: 'center'
  },
  boxHeader: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxSub: {
      flex: 4,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxSubBody:{
      flex: 4,
      alignItems:'center',
      backgroundColor: 'white'
  },
  boxBody: {
      flex: 11
  }
})

export default App;