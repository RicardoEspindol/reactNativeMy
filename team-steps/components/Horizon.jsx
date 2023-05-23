import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Horizon = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default Horizon;

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        margin: 2,
        },
    text: {
        fontSize: 13,
        color: 'white',
        textAlign: 'center'
    },  

});