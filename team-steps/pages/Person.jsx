import { StyleSheet, View , Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Button2 from '../components/Button2';
import UpMenu from '../components/UpMenu';

const Person = () => {

    return(

        <View style={styles.container}>
            <UpMenu/>
            <Text style={styles.turma}>Nome da Turma</Text>
            <Text style={styles.parag}>adicione a galera e separe os times</Text>

            <View style={styles.add}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome da turma"
                    placeholderTextColor="#A9A9A9"
                />
                <TouchableOpacity>
                    <Image style={styles.plus} source={require('../img/plus.png')}></Image>
                </TouchableOpacity>
            </View>
            
            <Button2 name= 'Criar'/>
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
        marginTop: 45,
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

      }
  });