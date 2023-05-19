import { StyleSheet, View , Text, Image, TouchableOpacity} from 'react-native';

const TeamComp = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../img/audience.png')} style={styles.image}></Image>
            <Text style={styles.text}>Nome da turma</Text>
        </View>
    )
}

export default TeamComp;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: 350,
        height: 60,
        backgroundColor: '#303030',
        margin: 5,
        alignItems: 'center',
                borderRadius: 3


    },
    image:{
        width: 25,
        height: 20,
        marginLeft: 15,
        marginRight: 15
    },
    text:{
        color: '#ffffff',
        fontSize: 14
    }

})
