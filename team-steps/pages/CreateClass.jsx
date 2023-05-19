import { StyleSheet, View , Text, Image, TextInput} from 'react-native';
import Button2 from '../components/Button2';
import UpMenu from '../components/UpMenu';

const CreateClass = () => {

    return(

        <View style={styles.container}>
            <UpMenu/>
            <Image source={require('../img/group.png')} style={styles.image}></Image>
            <Text style={styles.turma}>Nova Turma</Text>
            <Text style={styles.parag}>crie uma turma para adicionar pessoas</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome da turma"
                placeholderTextColor="#A9A9A9"
            />
            
            <Button2 name= 'Criar'/>
        </View>
    )
}

export default CreateClass;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    //   justifyContent: 'center',
      color: '#000',
      paddingTop: 50,
      backgroundColor:'#202024',
    },
    image:{
        width: 62,
        height: 60,
        marginTop: 150,
    },
    turma:{
        color: '#fff',
        marginTop: 25,
        fontSize: 23,
        fontWeight: '500',
    },
    parag:{
        color: '#808080',
        fontSize: 13,
        marginBottom: 30,
    },
    input: {
        height: 50,
        borderWidth: 1,
        width: '85%',
        padding: 10,
        backgroundColor: '#1C1C1C',
        color: '#ffffff',
        marginBottom: 25,
        borderColor: '#C0C0C0',
        borderRadius: 5
      },
   
  });