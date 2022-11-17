import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Ronaldo Rodrigues Silva Júnior :)</Text>
      <Button title="Entrar na página com a imagem!" onPress={() =>
        navigation.navigate("Imagem")
      }>

      </Button>
      <StatusBar style="auto" />
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
});