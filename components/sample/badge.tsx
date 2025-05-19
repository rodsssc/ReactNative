import {Text,View,StyleSheet} from 'react-native';
import React , {useState} from 'react';


type StatuspProp = {
    status : 'online' | 'offline' | 'busy';
};

StatusProp :String;


const Badge : React.FC<StatuspProp> = ({status}) =>{
    const getBadgeStyle = () =>{
        switch(status){
            case 'online':
                return{backgroundColor:'green'};
            case 'offline' :
                return{backgroundColor:'gray'};
            case 'busy' :
                return{backgroundColor:'red'};
            default :
                return{backgroundColor:'black'};
        }
    }

    

    return(
       <View style={[styles.badge, styles[status]]}>
           
        </View>
       
    )
}

const styles = StyleSheet.create({
    container:{
        
    },

    badge:{
        width:100,
        height:100,
        borderRadius:100
    },
   
    online:{
        backgroundColor:'green'
    },

    offline:{
        backgroundColor:'gray'
    },

    busy:{
        backgroundColor:'red'
    },

    
})

export default Badge;