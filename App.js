import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

// Functio Component que representa a tela principal
// contém os links (TouchbleOpacity) de acesso para as outras telas
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{textAlign: "center", fontSize: 20, padding: 8}}>Star Wars</Text>
      <TouchableOpacity
        style={{margin: 8, width: 200, height: 40, justifyContent: "center", 
          alignItems: "center", backgroundColor: "#d6d6d6"}}
          onPress={() => navigation.navigate('RebelAlliance')}>
        <Text>Aliança Rebelde</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{margin: 8, width: 200, height: 40, justifyContent: "center", 
          alignItems: "center", backgroundColor: "#d6d6d6"}}
          onPress={() => navigation.navigate('JediOrder')}>
        <Text>Ordem Jedi</Text>
      </TouchableOpacity>
    </View>
  );
}

// Function Component que representa a tela contendo os membros da Aliança Rebelde
function RebelAlliance() {
  return (
    <View style={{flex: 1, padding: 8}}>
      <Text style={{textAlign: "center", fontSize: 20, padding: 8}}>Principais Membros</Text>
      <Text style={{fontSize: 16, padding: 8}}>Princesa Leia Organa</Text>
      <Text style={{fontSize: 16, padding: 8}}>Luke Skywalker</Text>
      <Text style={{fontSize: 16, padding: 8}}>Han Solo</Text>
      <Text style={{fontSize: 16, padding: 8}}>Chewbaca</Text>
    </View>
  );
}

// Function Component que representa a tela contendo os membros da Ordem Jedi
function JediOrder() {
  return (
    <View style={{flex: 1, padding: 8}}>
      <Text style={{textAlign: "center", fontSize: 20, padding: 8}}>Principais Membros</Text>
      <Text style={{fontSize: 16, padding: 8}}>Yoda</Text>
      <Text style={{fontSize: 16, padding: 8}}>Mace Windu</Text>
      <Text style={{fontSize: 16, padding: 8}}>Qui-Gon Jinn</Text>
      <Text style={{fontSize: 16, padding: 8}}>Obi-Wan Kenobi</Text>
      <Text style={{fontSize: 16, padding: 8}}>Anakin Skywalker</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="RebelAlliance" 
          component={RebelAlliance}
          options={{ title: 'Aliança Rebelde' }} />
        <Stack.Screen 
          name="JediOrder" 
          component={JediOrder}
          options={{ title: 'Ordem Jedi' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
