import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions
} from 'react-native';
import { Container } from '../../../components/Container'
import { Checker } from '../../../components/Checker'
import { Provider } from "react-redux"
import { store } from "../../redux/store"

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

const LoginPresenter = ({ GoTerms,GoMainPage}) => {
    const [inputPhoneNumber, setInputPhoneNumber] = useState(null)
    const [inputPw, setInputPw] = useState(null)
    const [keyboardSpace,setKeyboardSpace]=useState(0)
    const keyboardDie = () => {
        Keyboard.dismiss()
        InputCheck({inputText:inputPw,setInput:setInputPw})
        InputCheck({inputText:inputPhoneNumber,setInput:setInputPhoneNumber})
    }
    const KeyboardSpaceSetting = ()=>{
      Keyboard.addListener("keyboardDidHide", () => { 
        setKeyboardSpace(0)
      })
    }
    
    const InputCheck = ({inputText,setInput}) =>{
        if(inputText === null){
        } else if(inputText.trim().length===0){
            setInput(null)
        } else {
        }
    }
   const NullCheck =()=>{
     PhoneCheck()
     if (inputPw || null){
      if (PhoneSuccess==="OK"){
        alert('로그인 되었습니다.')
         } else {
        alert("전화번호를 확인해주세요")
           }
      } else { 
        if (PhoneSuccess===""){
          alert("전화번호와 비밀번호를 확인해주세요")
        } else {
           alert("비밀번호를 확인해주세요")
        }
          
        }
     }
   

   
   
   var PhoneSuccess = ""
   const PhoneCheck = () => {
    if (inputPhoneNumber===null){
      PhoneSuccess = ""
    } else if (inputPhoneNumber.length === 13) {
      if (inputPhoneNumber.startsWith("010") === true && inputPhoneNumber.indexOf("-") === 3 && inputPhoneNumber.lastIndexOf("-") === 8) {
        PhoneSuccess = "OK"
      }
    } else {
      PhoneSuccess = ""
    }
  }
  
  useEffect(()=>{
     Checker.PhoneNumberCheck({inputText:inputPhoneNumber,setInputText:setInputPhoneNumber})
  },[inputPhoneNumber]);


    
    
    return (
        <Container.MainContainer>
            <TouchableWithoutFeedback onPress={() => { keyboardDie() }}>
                <View 
                    style={{ width: '100%', height: '100%', paddingLeft: '5.3%', paddingRight: '5.3%', backgroundColor:'white',marginTop:keyboardSpace }} 
                    behavior={'padding'} 
                    keyboardVerticalOffset={20}>
                    <View style={{ height: '17.3%' }} />
                    <View style={{height:'10%'}}>
                        <View style={{ width:'7.2%', height: '6.85%', backgroundColor: "#50bcdf" }} />
                        <View style={{ height:'13.69%' }} />
                        <Text style={{ fontSize: 40*chartHeight/734, fontWeight: 'bold' }}>Login</Text>
                    </View>
                    <View style={{ marginTop: '8.72%',height:'33.51%'}}>
                        {inputPhoneNumber!==null ?
                            <TextInput
                                style={styles.BlueInputBtn}
                                autoFocus={true}
                                maxLength={13}
                                keyboardType="number-pad"
                                value={inputPhoneNumber}
                                onChangeText={(e) => {Checker.HandleInput({e:e,setInput:setInputPhoneNumber})}}
                                onFocus={(e) => {InputCheck({inputText:inputPw,setInput:setInputPw})}}
                                onSubmitEditing={(e) => {InputCheck({inputText:inputPhoneNumber,setInput:setInputPhoneNumber})}}
                            />
                        :
                            <TouchableOpacity 
                                style={[styles.GrayInputBtn,{justifyContent:'center'}]} 
                                onPress={() => setInputPhoneNumber("")} >
                                <Text style={{color:"#e2e2e2",fontSize: 18*chartHeight/734}} >핸드폰 번호</Text>
                            </TouchableOpacity>
                        }
                        <View style={{ height: '8.13%'}} />
                        {inputPw!==null ?
                            <TextInput 
                                style={styles.BlueInputBtn}
                                autoFocus={true} 
                                value={inputPw} 
                                secureTextEntry={true}
                                maxLength={12}
                                onChangeText={(e) => { Checker.PassWordRuleChecker({e:e,setInputPw:setInputPw}) }} 
                                onFocus={(e) => {
                                  InputCheck({inputText:inputPhoneNumber,setInput:setInputPhoneNumber})
                                  setKeyboardSpace('-13.62%'),
                                  KeyboardSpaceSetting()      
                                }} 
                                onSubmitEditing={(e) => {InputCheck({inputText:inputPw,setInput:setInputPw})}} 
                                onEndEditing={(e)=>{setKeyboardSpace(0)}}
                                />
                        :
                            <TouchableOpacity 
                                style={[styles.GrayInputBtn,{justifyContent:'center'}]} 
                                onPress={() => setInputPw("")} >
                                <Text 
                                    style={styles.InputTextExample}>
                                    비밀번호
                                </Text>
                            </TouchableOpacity>
                        }
                        { inputPw===null ?
                            <View style={{ height: '8.13%' }} />
                        :  
                            inputPw=== "" ?
                              <View style={{ height: '8.13%' }} >
                                <Text style={[styles.PwMsg,{color:"red"}]}>특수문자는 !,@,#,$,? 만 사용가능합니다.</Text>
                              </View>
                            :
                                inputPw.length>=6 && inputPw.length<=12 ?
                                  <View style={{ height: '8.13%' }} >
                                    <Text style={[styles.PwMsg,{color:"blue"}]}>사용가능한 비밀번호 입니다.</Text>
                                  </View>
                                    :
                                  <View style={{ height: '8.13%' }} >
                                    <Text style={[styles.PwMsg,{color:"blue"}]}>비밀번호는 6~12자리로 입력해 주세요.</Text>
                                  </View>
                        }
                        <TouchableOpacity 
                            style={styles.LoginBtn}
                            onPress={NullCheck,GoMainPage}>
                            <Text style={{ fontSize: 18*chartHeight/734, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>로그인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: '12.20%', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14*chartHeight/734, color: 'gray' }}>아이디/비밀번호가 기억나지 않으세요?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '6.81%' }}>
                        <Text style={{ fontSize: 14*chartHeight/734, color: 'gray' }}>계정이 없으신가요?</Text>
                        <TouchableOpacity onPress={() => GoTerms()} >
                            <Text style={{ fontSize: 14*chartHeight/734, color: "#50bcdf", fontWeight: 'bold' }}> 가입하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Container.MainContainer>
    );
};


export default LoginPresenter;

const styles = StyleSheet.create({
    BlueInputBtn: {
        width: '100%',
        height: '19.7%',
        color:'black',
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#50bcdf',
        fontSize: 16*chartHeight/734,
        paddingLeft: '5.97%',
        paddingTop: '3.33%',
        paddingBottom: '3.33%',
        shadowColor: "black",
        elevation: 5,
    },
    GrayInputBtn: {
        width: '100%',
        height: '19.7%',
        borderRadius: 20,
        paddingLeft: '5.97%',
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'gray',
        shadowColor: "black",
        elevation: 5,
    },
    LoginBtn: {
        width: '100%',
        height: '19.7%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#50bcdf',
        backgroundColor: '#50bcdf',
        justifyContent: 'center',
        shadowColor: "black",
        elevation: 5,
    },
    PwMsg : {
        fontSize:16*chartHeight/734,
        paddingLeft:'5.97%',
        paddingTop: '0.68%'
    },
    InputTextExample : {
        color:"#e2e2e2",
        fontSize: 18*chartHeight/734,}

})