import moment from 'moment';
import React, { useState,useEffect } from 'react';
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
import { Provider, useStore } from "react-redux"
import { store } from "../../redux/store"
import { Title } from '../../../components/Title'
import { Checker } from '../../../components/Checker';

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

const SignupPresenter = ({ GoBackTerms }) => {
  const [nameInput, setNameInput] = useState(null)
  const [pwInput1, setPwInput1] = useState(null)
  const [pwInput2, setPwInput2] = useState(null)
  const [phoneInput, setPhoneInput] = useState(null)
  const [keyboardSpace,setKeyboardSpace]=useState(0)
  const [test, setTest] = useState(0)
  const keyboardDie = () => {
    Keyboard.dismiss()
    InputCheck({ inputText: nameInput, setInput: setNameInput })
    InputCheck({ inputText: pwInput1, setInput: setPwInput1 })
    InputCheck({ inputText: pwInput2, setInput: setPwInput2 })
    InputCheck({ inputText: phoneInput, setInput: setPhoneInput })
    
  }
  const KeyboardSpaceSetting = ()=>{
    Keyboard.addListener("keyboardDidHide", () => { 
      setKeyboardSpace(0)
    })
  }
  const InputCheck = ({ inputText, setInput }) => {
    if (inputText === null) {
    } else if (inputText.trim().length === 0) {
      setInput(null)
    }
  }
  const NameInputCheck = (e) =>{
    const nameRule= /^[ㄱ-ㅎ가-힣a-zA-Z]*$/
    if (!nameRule.test(e)){
      alert("이름은 영문또는 한글로만 입력해주세요.")
    } else {
      setNameInput(e)
    }
  }
  let PwSuccess = ""
  let PhoneSuccess = ""
  
  const NullCheck = () => {
    if (nameInput!==null) {
      PhoneCheck()
      PwCheck()
      if (PhoneSuccess === "OK" && PwSuccess === "OK") {
        alert("본인인증으로 넘어갑니다.")
      } else if (PhoneSuccess === "" && PwSuccess === "") {
        alert("전화번호와 비밀번호를 확인해주세요")
      } else if (PhoneSuccess === "") {
        if(phoneInput.startsWith("010") === false){
          alert("전화번호가 010 으로 시작하는지 확인해 주세요")
        } else {
          alert("전화번호가 11자리가 맞는지 확인해주세요")
        }
      } else if (PwSuccess === "No") {
        alert("비밀번호가 6자리 이상인지 확인해주세요.")
      } else if (PwSuccess === "") {
        alert("비밀번호가 일치하는지 확인해주세요.")
      }
    } else {
      PhoneCheck()
      PwCheck()
      if (PhoneSuccess === "" && PwSuccess === "") {
        alert("이름, 전화번호,비밀번호를 확인해주세요")
      } else if (PhoneSuccess === "") {
        alert("전화번호를확인해주세요")
      } else if (PwSuccess === "No") {
        alert("비밀번호를 확인해주세요")
      } else {
        alert("이름을 확인해주세요")
      }
    }
  }

  const PhoneCheck = () => {
    if (phoneInput===null){
      PhoneSuccess = ""
    } else if (phoneInput.length === 13) {
      if (phoneInput.startsWith("010") === true && phoneInput.indexOf("-") === 3 && phoneInput.lastIndexOf("-") === 8) {
        PhoneSuccess = "OK"
      }
    } else {
      PhoneSuccess = ""
    }
  }

  const PwCheck = () => {
    if (pwInput1===null){
      PwSuccess = ""
    } else if (pwInput1.length >= 6) {
      if (pwInput1 === pwInput2) {
        PwSuccess = "OK"
      } else {
        PwSuccess = ""
      }
    } else {
      PwSuccess = "No"
    }
  }
  useEffect(()=>{
    Checker.PhoneNumberCheck({inputText:phoneInput,setInputText:setPhoneInput})
  },[phoneInput]);

  return (
    <Container.MainContainer>
        <TouchableWithoutFeedback onPress={() => { keyboardDie() }}>
          <View style={{ width: "100%",height:"100%", backgroundColor: 'white' ,marginTop:keyboardSpace}}>
            {Title.SignUpTitle({ Move: GoBackTerms })}
            <View style={styles.MainFrame}>
              <View style={{height:"64.16%"}}>
                <Text style={[styles.SmallTitle,{marginTop: "11.49%"}]}>이름</Text>
                {/* <Text>{JSON.stringify(test)}</Text> */}
                {nameInput !== null ?
                  <TextInput
                    style={styles.BlueInputBtn}
                    autoFocus={true}
                    value={nameInput}
                    onChangeText={(e) => { NameInputCheck(e) }}
                    onFocus={(e) => {
                        InputCheck({ inputText: pwInput1, setInput: setPwInput1 }),
                        InputCheck({ inputText: pwInput2, setInput: setPwInput2 }),
                        InputCheck({ inputText: phoneInput, setInput: setPhoneInput })
                    }}
                    onSubmitEditing={(e) => { InputCheck({ inputText: nameInput, setInput: setNameInput }) }}
                  />
                :
                  <TouchableOpacity
                    style={[styles.GrayInputBtn, { justifyContent: 'center' }]}
                    onPress={() => setNameInput("")}>
                    <Text style={styles.InputTextExample}>예: 임채인</Text>
                  </TouchableOpacity>
                }
                <Text style={[styles.SmallTitle,{marginTop: "6.90%"}]}>전화번호</Text>
                {phoneInput !== null ?
                  <TextInput
                    style={styles.BlueInputBtn}
                    maxLength={13}
                    autoFocus={true}
                    value={phoneInput}
                    keyboardType="number-pad"
                    onChangeText={(e) => { Checker.HandleInput({e:e,setInput:setPhoneInput}) }}
                    onFocus={(e) => {
                        InputCheck({ inputText: nameInput, setInput: setNameInput }),
                        InputCheck({ inputText: pwInput1, setInput: setPwInput1 }),
                        InputCheck({ inputText: pwInput2, setInput: setPwInput2 })
                    }}
                    onSubmitEditing={(e) => { InputCheck({ inputText: phoneInput, setInput: setPhoneInput }) }}></TextInput>
                  :
                  <TouchableOpacity
                    style={[styles.GrayInputBtn, { justifyContent: 'center' }]}
                    onPress={() => setPhoneInput("")} >
                    <Text style={styles.InputTextExample}>예:010-1234-5678</Text>
                  </TouchableOpacity>
                }
                <Text style={[styles.SmallTitle,{marginTop: "6.90%"}]}>비밀번호</Text>
                {pwInput1 !== null ?
                  <TextInput
                    style={styles.BlueInputBtn}
                    secureTextEntry={true}
                    maxLength={12}
                    autoFocus={true}
                    value={pwInput1}
                    onChangeText={(e) => { setPwInput1(e) }}
                    onFocus={(e) => {
                      InputCheck({ inputText: nameInput, setInput: setNameInput }),
                      InputCheck({ inputText: pwInput2, setInput: setPwInput2 }),
                      InputCheck({ inputText: phoneInput, setInput: setPhoneInput }),
                      setKeyboardSpace(-150),
                      KeyboardSpaceSetting()
                    }}
                    onSubmitEditing={(e) => { InputCheck({ inputText: pwInput1, setInput: setPwInput1 }) }}
                    onEndEditing={(e)=>{setKeyboardSpace(0)}}></TextInput>
                  :
                  <TouchableOpacity
                    style={[styles.GrayInputBtn, { justifyContent: 'center' }]}
                    onPress={() => setPwInput1("")}>
                    <Text style={styles.InputTextExample}>비밀번호</Text>
                  </TouchableOpacity>
                }
                {pwInput1 === null ?
                  <View style={{ height:"4.6%" }} />
                  :
                  pwInput1 === "" ?
                    <View style={{ height:"4.6%" }} >
                      <Text style={[styles.PwMsg, { color: "red" }]}>특수문자는 !,@,#,$,? 만 사용가능합니다.</Text>
                    </View>
                    :
                    pwInput1.length >= 6 && pwInput1.length <= 12 ?
                      <View style={{ height:"4.6%" }} >
                        <Text style={[styles.PwMsg, { color: "blue" }]}>사용가능한 비밀번호 입니다.</Text>
                      </View>
                      :
                      <View style={{ height:"4.6%" }} >
                        <Text style={[styles.PwMsg, { color: "blue" }]}>비밀번호는 6~12자리로 입력해 주세요.</Text>
                      </View>
                }
                {pwInput2 !== null ?
                  <TextInput
                    style={styles.BlueInputBtn}
                    maxLength={12}
                    secureTextEntry={true}
                    autoFocus={true}
                    value={pwInput2}
                    onChangeText={(e) => { setPwInput2(e) }}
                    onFocus={(e) => {
                      InputCheck({ inputText: nameInput, setInput: setNameInput }),
                      InputCheck({ inputText: pwInput1, setInput: setPwInput1 }),
                      InputCheck({ inputText: phoneInput, setInput: setPhoneInput}),
                      setKeyboardSpace(-150)
                      KeyboardSpaceSetting()
                    }}
                    onSubmitEditing={(e) => { InputCheck({ inputText: pwInput2, setInput: setPwInput2 }) }}
                    onEndEditing={(e)=>{setKeyboardSpace(0)}}></TextInput>
                  :
                  <TouchableOpacity
                    style={[styles.GrayInputBtn, { justifyContent: 'center' }]}
                    onPress={() => setPwInput2("")}>
                    <Text style={styles.InputTextExample} >비밀번호 확인</Text>
                  </TouchableOpacity>
                }
              </View>
              <TouchableOpacity
                style={styles.NextBtn}
                onPress={NullCheck}>
                <Text style={styles.NextBtnText}>다 음</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
    </Container.MainContainer>
  );
};

export default SignupPresenter;

const styles = StyleSheet.create({
  MainFrame : {
    width: "100%",
    height: "92.37%", 
    paddingRight: "5.3%",
    paddingLeft: "5.3%" ,
    justifyContent:'space-between'
    },
  BlueInputBtn: {
    width: "100%",
    height: "11.95%",
    color:'black',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#50bcdf',
    paddingLeft: "5.3%" ,
    fontSize: 16 * chartHeight / 734,
    shadowColor: "black",
    elevation: 5,

  },
  GrayInputBtn: {
    width: "100%",
    height: "11.95%",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    paddingLeft: "5.3%" ,
    shadowColor: "black",
    elevation: 5,
  },
  NextBtn: {
    width: "100%",
    height: "8.11%",
    marginBottom:"2.95%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#50bcdf',
    backgroundColor: '#50bcdf',
    justifyContent: 'center',
    shadowColor: "black",
    elevation: 5,
  },
  NextBtnText : { 
    fontSize: 18 * chartHeight / 734, 
    fontWeight: 'bold', 
    color: 'white', 
    textAlign: 'center' 
  },
  InputTextExample: {
    color: "#e2e2e2",
    fontSize: 18 * chartHeight / 734,
  },
  PwMsg: {
    fontSize: 14* chartHeight / 734,
    paddingLeft: "5.3%" ,
    // paddingTop: 5 * chartHeight / 734,
    justifyContent: 'center'
  },
  SmallTitle : {
    fontSize: 14 * chartHeight / 734,
    fontWeight: 'bold',
    marginBottom:"5%"
  }
})
