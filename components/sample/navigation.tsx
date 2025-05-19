import {View,Text,StyleSheet,useColorScheme} from 'react-native';
import React, { JSX } from 'react';

export default function Navigation() : JSX.Element{
    const isDarkMood = useColorScheme() === 'dark';
    return(
    
        <View style={styles.container}>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Contact</Text>
            <Text>Settings</Text>
        </View> 
    
    
);


}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'pink',
        
    }
})