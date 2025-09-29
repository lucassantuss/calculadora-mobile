import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  /// Lucas Araujo dos Santos
  /// EC10
  /// 081210009
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  function calcular(operacao) {
    if (valor1 == '' || valor2 == '') {
      Alert.alert("Preencha os campos corretamente!");
      return;
    }

    let resultadoCalculo = 0;

    if (operacao === "soma")
      resultadoCalculo = somar();
    else if (operacao === "subtracao")
      resultadoCalculo = subtrair();
    else if (operacao === "multiplicacao")
      resultadoCalculo = multiplicar();
    else if (operacao === "divisao")
      resultadoCalculo = dividir();
    else if (operacao === "exponenciacao")
      resultadoCalculo = exponenciar();
    else
      Alert.alert("Operação inválida!!")

    setResultado(resultadoCalculo);
  }

  function somar() {
    return formatarNumeroFloat(valor1) + formatarNumeroFloat(valor2);
  }

  function subtrair() {
    return formatarNumeroFloat(valor1) - formatarNumeroFloat(valor2);
  }

  function multiplicar() {
    return formatarNumeroFloat(valor1) * formatarNumeroFloat(valor2);
  }

  function dividir() {
    return formatarNumeroFloat(valor1) / formatarNumeroFloat(valor2);
  }

  function exponenciar() {
    return formatarNumeroFloat(valor1) ** formatarNumeroFloat(valor2);
  }

  function formatarNumeroFloat(numero) {
    return Number.parseFloat(numero.replace(',', '.'));
  }

  function limparCampos() {
    setValor1('');
    setValor2('');
    setResultado(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

      <Text style={styles.labelCampo}>Digite o primeiro valor:</Text>
      <TextInput
        keyboardType='decimal-pad'
        style={styles.campoTela}
        value={String(valor1)}
        onChangeText={(text) => setValor1(text)}
      />
      <Text style={styles.labelCampo}>Digite o segundo valor:</Text>
      <TextInput
        keyboardType='decimal-pad'
        style={styles.campoTela}
        value={String(valor2)}
        onChangeText={(text) => setValor2(text)}
      />

      <TouchableOpacity style={styles.botao} onPress={() => calcular("soma")}>
        <Text style={styles.textoBotao}>Soma</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => calcular("subtracao")}>
        <Text style={styles.textoBotao}>Subtração</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => calcular("multiplicacao")}>
        <Text style={styles.textoBotao}>Multiplicação</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => calcular("divisao")}>
        <Text style={styles.textoBotao}>Divisão</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={() => calcular("exponenciacao")}>
        <Text style={styles.textoBotao}>Exponenciação</Text>
      </TouchableOpacity>

      <Text style={styles.campoTela}>Resultado: {resultado}</Text>

      <TouchableOpacity style={styles.botao} onPress={limparCampos}>
        <Text style={styles.textoBotao}>Limpar</Text>
      </TouchableOpacity>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: '50%',
    borderColor: 'black',
    borderWidth: 3,
    height: 50,
    margin: 5,
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBotao: {
    fontSize: 15,
    color: "#084dc4",
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 25,
    color: '#0e9ea1',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  labelCampo: {
    fontSize: 20,
    color: "#0e9ea1",
    fontWeight: 'bold',
  },
  campoTela: {
    fontSize: 20,
    width: '50%',
    borderColor: '#000',
    borderWidth: 3,
    textAlign: 'center',
    borderRadius: 15,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
