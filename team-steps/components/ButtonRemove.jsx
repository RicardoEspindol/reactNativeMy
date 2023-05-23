import { TouchableOpacity,Text, StyleSheet } from "react-native";

const Button2 = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>{props.name}</Text>
            </TouchableOpacity>
    )
}

export default Button2;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#a81212',
        width: '85%',
        height: 45,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 3

    },
    textButton:{
        color: '#ffffff',
    }
})
