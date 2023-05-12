import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function App() {

  const [listaDeTextos, setListaDeTextos] = useState([]);
  const [novoTexto, setNovoTexto] = useState('');
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckBoxClick = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  }

  return (
    <View style={styles.container}>
    <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>LISTA</Text>
        </View>
      <View style={styles.gridv}>
        <TextInput
          style={styles.input}
          value={novoTexto}
          onChangeText={setNovoTexto}
        />
        <TouchableOpacity style={styles.button}
           onPress={() => {
            if(novoTexto != '' && !listaDeTextos.includes(novoTexto)){
              setListaDeTextos([...listaDeTextos, novoTexto]);
              setCheckedItems([...checkedItems, false]);
              setNovoTexto('');
            }else{
              setListaDeTextos([...listaDeTextos]);
              setCheckedItems([...checkedItems]);
            }
           
          }}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
      </View>

      <ScrollView style={styles.pai}>
        {listaDeTextos.length === 0 ? (<Text style={styles.textTitle2}>A lista está vazia!</Text>) :

          (listaDeTextos.map((texto, index) => (
          <View key={index} style={styles.gridv}>
          <CheckBox
            checked={checkedItems[index]}
            onPress={() => handleCheckBoxClick(index)}
          />
            <Text style={styles.texto}>{texto}</Text>
            <View>
              <TouchableOpacity style={styles.button2}
                onPress={() => {
                  setListaDeTextos(listaDeTextos.filter((texto, indexAtual) => indexAtual !== index));
                  setCheckedItems(checkedItems.filter((isChecked, indexAtual) => indexAtual !== index));
                }}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 190,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    width: '60%',
  },
  gridv: {
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#248a05',
      padding: 10,
      borderRadius: 5,
      marginLeft: 25,
      marginBottom: 50
    },
    button2: {
      backgroundColor: '#dd1616',
      padding: 10,
      borderRadius: 5,
      marginLeft: 25,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    boxTitle: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
    },
    textTitle: {
        color: '#FF0043',
        fontSize: 24,
        fontWeight: 'bold'
    },
    textTitle2:{
      color: '#FF0043',
      fontSize: 20,
      fontWeight: '400'
    }
});
