import { use, useState } from 'react';
import {Text, View , Button, FlatList, TextInput } from 'react-native';




function Challenge5(){
    const [toggle , setToggle] = useState(false)
    
    
    return(
        <View>
            <Text>{ toggle ? "On" : "Off"}</Text>
            
            <Button title='Switch' onPress={() => setToggle(prev => !prev)} />
        </View>

    );
}

export default Challenge5;