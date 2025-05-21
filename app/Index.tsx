import {Text,View} from 'react-native';
import Button from './components/button';
import Challenge1 from './components/challenge1'
import Challenge2 from './components/challenge2'


const Index = () =>{
    return(
        <>
        <View>
            <Text>Home Page</Text>
        </View>

        <Challenge2 />
        
        </>
    );
}

export default Index;