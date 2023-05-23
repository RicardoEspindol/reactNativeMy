import { StyleSheet, View , Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import ButtonRemove from '../components/ButtonRemove';
import UpMenu from '../components/UpMenu';
import Horizon from '../components/Horizon';
import Participante from '../components/Participante';

const Person = () => {

    return(

        <View style={styles.container}>
            <UpMenu/>
            <Text style={styles.turma}>Nome da Turma</Text>
            <Text style={styles.parag}>adicione a galera e separe os times</Text>

            <View style={styles.add}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#A9A9A9"
                />
                <TouchableOpacity>
                    <Image style={styles.plus} source={require('../img/plus.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.horizon}>
                <ScrollView horizontal style={styles.scrol}>
                    <Horizon name='TIME A'/>
                    <Horizon name='TIME X'/>
                    <Horizon name='TIME X'/>
                    <Horizon name='TIME X'/>
                    <Horizon name='TIME X'/>

                </ScrollView>
                <View style={styles.text}>
                    <Text style={styles.total}>2</Text>
                </View>
            </View>
            <ScrollView>
                <Participante name='Rodrigo Gonçalves'/>
                <Participante name='Rodrigo Gonçalves'/>

                <Participante name='Rodrigo Gonçalves'/>
                <Participante name='Rodrigo Gonçalves'/>
                <Participante name='Rodrigo Gonçalves'/>
                <Participante name='Rodrigo Gonçalves'/>
                <Participante name='Rodrigo Gonçalves'/>
                <Participante name='Rodrigo Gonçalves'/>


            </ScrollView>
            <ButtonRemove name= 'Remover turma'/>
        </View>
    )
}

export default Person;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    //   justifyContent: 'center',
      color: '#000',
      paddingTop: 50,
      backgroundColor:'#202024',
    },
    turma:{
        color: '#fff',
        marginTop: 40,
        fontSize: 23,
        fontWeight: '500',
    },
    parag:{
        color: '#808080',
        fontSize: 14,
        marginBottom: 30,
    },
    input: {
        height: 50,
        width: '85%',
        padding: 10,
        color: '#ffffff',
        marginBottom: 25,
        borderColor: '#C0C0C0',
        borderRadius: 5
      },
      add:{
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#C0C0C0',
        height: 50,
        borderRadius: 3,
        marginBottom: 20
        
      },
      plus:{
        width: 50,
        height: 50,
        marginLeft: 0,

      },
      horizon:{
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
      },
      text:{
        width: '8%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: 'blue',
      },
      total:{
        color: 'white',
        textDecorationLine: 'underline',
        color: 'yellow',
        fontWeight: 700,
        fontSize: 14
      }
  });