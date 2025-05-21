import {View,Text} from 'react-native';
import React from 'react';
type Props={
    name : String,
    
    handle : String,
    subject: String
    age : number,

}
function Challenge1({name,age,handle,subject}: Props){
    return(
        <View>
            <Text>My name is , {name}</Text>
            <Text>Im , {age} years old </Text>
            <Text>Here is my Handle , {handle}</Text>
            <Text>I love {subject} Subject</Text>
        </View>
    );
}

export default Challenge1;