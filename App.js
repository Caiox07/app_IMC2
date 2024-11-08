import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [peso,setPeso]= useState(0);
  const [Altura,setAltura]= useState(0);
  const [imc,setImc]= useState(null);

  const calcularImc=() =>{
    var resultado=peso/(Altura*Altura);
    setImc(resultado.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo calculo IMC</Text>
      
      <TextInput 
      placeholder='peso' 
      keyboardType='numeric'
      value={peso}
      onChangeText={(peso) =>setPeso(peso)}
      />
      
      <TextInput 
      placeholder='Altura' 
      keyboardType='numeric'
      value={Altura}
      onChangeText={(Altura)=>setAltura(Altura)}
      />

      {imc && (
      <text style={styles.titulo}>IMC:{imc}</text>
      )}
      <Button title='Calcular' onPress={()=>{calcularImc()} }/>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 25,
    fontWeigth: 'bold'
  }
});
