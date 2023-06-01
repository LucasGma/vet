import { View, Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'


export default function CadastrarAnimais() {


    return (
        <View style ={style.container}>
          <Animatable.View animation= "fadeInLeft" delay={500} style={style.containerHeader}> 
            <Text style={style.message}>Cadastre seu animal</Text>
          
            </Animatable.View>
    
            <Animatable.View animation= "fadeInUp" style={style.containerform}>
      <Text style={style.title}> Nome</Text>
        <TextInput
          placeholder="Nome " 
          style={style.input}
          onChangeText={(text)=>setEmail(text)}
          />


        <Text style={style.title}> Idade</Text>
        <TextInput
          placeholder="idade "
          style={style.input}
          onChangeText={(text)=>setSenha(text)}
        />
         <Text style={style.title}> Peso (Kg)</Text>
        <TextInput
          placeholder="peso (kg)"
          style={style.input}
          onChangeText={(text)=>setNome(text)}
        />
         <Text style={style.title}> Raça</Text>
        <TextInput
          placeholder="Raça"
          style={style.input}
          onChangeText={(text)=>setNome(text)}
        />
        
        <TouchableOpacity style={style.button} >
          <Text style={style.buttonText}>Cadastrar</Text>
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