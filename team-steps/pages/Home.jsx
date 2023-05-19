import { StyleSheet, View , Text, Image, ScrollView} from 'react-native';
import TeamComp from '../components/TeamComp';
import Button2 from '../components/Button2';


const Home = () => {
    return(

        <View style={styles.container}>
            <Image source={require('../img/moura.png')} style={styles.image}></Image>
            <Text style={styles.turma}>Turmas</Text>
            <Text style={styles.parag}>Jogue com sua turma</Text>
            <ScrollView style={styles.scroll1}>
                <TeamComp/>
                <TeamComp/>
                <TeamComp/>
                <TeamComp/>
                <TeamComp/>
                <TeamComp/>
                <TeamComp/>
                <TeamComp/> 
                <TeamComp/>
                <TeamComp/>
                <TeamComp/>
                <TeamComp/>
                <TeamComp/>
                <TeamComp/>
                <TeamComp/>
                <TeamComp/>

            </ScrollView>
            
            <Button2 name='Criar nova turma'/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      color: '#000',
      paddingTop: 50,
      backgroundColor:'#202024',
    },
    image:{
        width: 42,
        height: 30,
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
    scroll1:{
        flex: 1,
    },
  });