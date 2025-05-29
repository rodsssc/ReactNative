import { Text , View ,Button} from "react-native";
import { useState,useEffect } from "react";

function Challenge6 (){

    const [count , setCount] = useState(0)
   

    useEffect(() => {
        alert({name})
    },[count])
    return(
        <View>
            <Text>{count}</Text>

            <Button title="Increment" onPress={() => setCount(count +1)} />
        </View>
    );
}

export default Challenge6;