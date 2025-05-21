import { useState } from 'react';
import {Text,View,Button,StyleSheet} from  'react-native';




function Challenge2(){
   
    const [count,SetCount] = useState(0);
    return(
        <>
            <View style={styles.container}>
                <Text>Press button to Increment or Decremeant</Text>

                <View style={styles.outputContainer}>
                    <Text style={styles.count} >Count:{count}</Text>
                </View>
                
                <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button title='+' onPress={ () => {SetCount(count+1)} } />
                    </View>
                    <View style={styles.button} >
                        <Button title='-' onPress={ () => {SetCount(count-1)} } color='red'/>
                    </View>
                </View>
            </View>
        
        </>
    );
}


const styles = StyleSheet.create({
    container:{
        margin:30,
        alignContent:'center',
    },

    outputContainer:{
        width:300,
        height:300,
        borderRadius:300,
        margin:20,
        backgroundColor:'yellow',
        textAlign:'center',

    },

    count:{
        textAlign:'center',
        margin:100
    },

    buttonContainer:{
        margin:50,
        alignItems:'center'
    },

    button:{
        
        margin:-20,
        width:100,
        height:100,
        borderRadius:50
    }
})

export default Challenge2;