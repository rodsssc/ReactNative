import {View,Text,Image,Button,StyleSheet} from 'react-native';


function Challenge3(){
    const price = 100000
    return(
        <View style={styles.container}>
            <View style={styles.price}>
                <Text style={styles.priceText}>${price}</Text>
            </View>

            <View >
                <Image source={require('../assets/image/car.png')} />
            </View>

            <View>
                <Text>Here are the Description</Text>
            </View>

            <View>
                <Button title="Add cart" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
   {
    container:{
        
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        margin:30,
       
        borderBlockColor:'black',
    },

    price:{
        alignItems:'center',
        backgroundColor:'black',
        color:'white',
        width:80,
        height:40,
        borderRadius:9,
        margin:7
    },

    priceText:{

        color:'white',
    }



   }
);
        
export default Challenge3;