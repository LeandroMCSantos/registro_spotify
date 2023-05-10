import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function App() {
return (
<View style={styles.container}>

  <Card style={styles.card}>
    <Image source={('https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png')} style={styles.logo} />
    <Text style={styles.altLoginText}>Você também pode logar com:</Text>
    <View style={styles.altLoginContainer}>
      <TouchableOpacity style={styles.altLoginButton}>
        <Image source={('https://img.icons8.com/color/452/google-logo.png')} style={styles.altLoginImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.altLoginButton}>
        <Image source={('https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png')} style={styles.altLoginImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.altLoginButton}>
      <Image source={('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png')} style={styles.altLoginImage} />
      </TouchableOpacity>
    </View>
    <TextInput placeholder="nome do usuario" style={styles.input} />
    <TextInput placeholder="email" style={styles.input} />
    <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input} />
    <TextInput placeholder="confirme sua Senha" secureTextEntry={true} style={styles.input} />

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>registrar-se</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.signupButton}>
      <Text style={styles.signupButtonText}>Entrar</Text>
    </TouchableOpacity>
  </Card>
  
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
paddingTop: Constants.statusBarHeight,
backgroundColor: 'black',
padding: 8,
},
card: {
padding: 16,
alignItems: 'center',
backgroundColor:'black'
},
logo: {
width: 250,
height: 250,
resizeMode: 'contain',
},
altLoginText: {
color: '#fff',
marginVertical: 16,

},
altLoginContainer: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',

},
altLoginButton: {
marginHorizontal: 16,

},
altLoginImage: {
width: 50,
height: 50,

},
input: {
width: '100%',
height: 40,
backgroundColor: '#fff',
borderRadius: 4,
marginTop: 16,
paddingHorizontal: 8,
},
button: {
backgroundColor: '#1db954',
borderRadius: 10,
marginTop: 16,
paddingHorizontal: 16,
paddingVertical: 12,
},
buttonText: {
color: '#fff',
fontWeight: 'bold',
textAlign: 'center',
},
signupButton: {
marginTop: 16,
},
signupButtonText: {
color: '#1db954',
textDecorationLine: 'underline',
textAlign: 'center',
},
});




