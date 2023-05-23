import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const Participante = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image source={require('../img/user1.png')} style={styles.image1}></Image>
                <Text style={styles.nome}>{props.name}</Text>
            </View>
            <TouchableOpacity>
                <Image source={require('../img/close.png')} style={styles.image}></Image>
            </TouchableOpacity>

        </View>
    )
}

export default Participante;

const styles = StyleSheet.create({
    image: {
        width: 10,
        height: 10,
        margin: 5,
        marginRight: 9,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        backgroundColor: '#38383d',
        height: 40,
        borderRadius: 2,
        justifyContent:'space-between',
        margin: 3,

    },
    image1: {
        width: 20,
        height: 20,
        margin: 5,
        marginLeft: 5,
    },
    container1: {  
        flexDirection: 'row',
        alignItems: 'center',
    },
    nome: {
        color: '#b6b3b3',
        marginLeft: 3
    }

});