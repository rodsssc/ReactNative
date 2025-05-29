import { useReducer, useState } from "react";
import { Text, View, Button, TextInput } from 'react-native';

// Define state and action types
type State = {
    todo: string[];
};

type Action = {
    type: "ADD_TODO" | "Delete";
    payload: string;
};

const initialState: State = {
    todo: []
};

const reducer = (state: State, action: Action): State => {
    if (action.type === "ADD_TODO") {
        return {
            ...state,
            todo: [...state.todo, action.payload]
        };
    } else if (action.type === "Delete") {
        return {
            ...state,
            todo: state.todo.filter(item => item !== action.payload)
        };
    }
    return state;
    

   
};

export default function Challenge7() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState<string>("");

    return (
        <View style={{ padding: 20, marginTop: 50 }}>
            <TextInput
                placeholder="Enter"
                value={input}
                onChangeText={setInput}
                style={{
                    borderWidth: 1,
                    borderColor: '#aaa',
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 5
                }}
            />
            <Button
                title='Add'
                onPress={() => {
                    if (input.trim()) {
                        dispatch({ type: "ADD_TODO", payload: input.trim() });
                        setInput("");
                    }
                }}
            />
            <View style={{ marginTop: 20 }}>
                {state.todo.length == 0&& <Text>No Task</Text>}

                { state.todo.map((item, index) => (
                    <Text key={index}>• {item} - <Button title="delete" onPress={() => {
                        dispatch({type:"Delete",payload:item})
                    }} /> </Text>
                ))}
                
            </View>
        </View>
    );
}
