
import { View, Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'




export default function UsuarioCadastrado() {
    const navigation = useNavigation();
    return (
      <View style ={style.container}>
        <Animatable.View animation= "fadeInLeft" delay={500} style={style.containerHeader}> 
          <Text style={style.message}>Bem vindo(a)</Text>
        
        
          
        
        
        </Animatable.View>
  
        <Animatable.View animation= "fadeInUp" style={style.containerform}>
      
        
        <TouchableOpacity style={style.button} onPress={ () => navigation.navigate('CadastrarAnimais')}>
          <Text style={style.buttonText}>Cadastrar Novo animal</Text>
        </TouchableOpacity>
       

        
        
      </Animatable.View>
        

      
      </View>
    );
  }


  const style = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#38a69d',
    },
  
    containerHeader: {
      marginTop: '5%',
      marginBottom:'5%',
      paddingStart: '5%',
    },
    message:{
      fontSize: 18,
      fontWeight: 'bold',
      color:'#fff',
  
    },
  
    containerform:{
      backgroundColor: '#fff',
      flex:1,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
    },
    title:{
      fontSize:10,
      marginTop: 18,
    },
    input:{
      borderBottomWidth:1,
      height: 20,
      marginBottom:12,
      fontSize:10,
    },
    button:{
      backgroundColor: '#38a69d',
      width: '100%',
      borderRadius: 4,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    buttonText:{
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
   },
    buttonRegister:{
      marginTop: 14,
      alignSelf: 'center'
    },
  
    registerText:{
      color:'#a1a1a1',
    }
  
  })
  