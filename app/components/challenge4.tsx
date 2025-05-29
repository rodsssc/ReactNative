import { Text, View, Button, Image, StyleSheet, TouchableOpacity ,ScrollView} from 'react-native';

type ProductProps = {
    name: string;
    price: number;
    button: string;
    description: string;
    image: number;
};

const Challenge4 = ({ name, price, button, description, image }: ProductProps) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} resizeMode="cover" />

            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>${price.toFixed(2)}</Text>
                <Text style={styles.description}>{description}</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{button}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        margin: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    infoContainer: {
        padding: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    price: {
        fontSize: 18,
        color: '#1e90ff',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Challenge4;
