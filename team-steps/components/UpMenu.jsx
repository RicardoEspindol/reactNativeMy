import { TouchableOpacity, Image, View, StyleSheet } from "react-native";

const UpMenu = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require("../img/left-chevron.png")} style={styles.image1}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require("../img/moura.png")} style={styles.image2}/>
            </TouchableOpacity>
        </View>
    )
}

export default UpMenu;

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image1:{
        width: 42,
        height: 40,
    },
    image2:{
        width: 54,
        height: 40,
        marginRight: 20
    },
})