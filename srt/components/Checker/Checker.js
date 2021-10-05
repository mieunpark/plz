import React from 'react';
import { View,
         TouchableOpacity,
         Image,
         Text
} from 'react-native';


export default {
//   PhoneNumberChecker : ({e,setInputPhoneNumber}) => {
//     const len=e.length
//     if (len<4){   
//         setInputPhoneNumber(e.replace(/\-/g,""))
//     } else if(len===4){
//         if(e.indexOf("-")==-1){
//             setInputPhoneNumber(e.replace(/(.{3})/,"$1-"))
//         } else{
//             setInputPhoneNumber(e.replace(/\-/g,""))
//         }
//     } else if(len>=5 && len<=8){
//         if (e.match(/-/g).length===0) {
//             setInputPhoneNumber(e.replace(/(.{3})/,"$1-"))
//         } else if(e.match(/-/g).length===1){
//             if(e.lastIndexOf("-")===len-1){
//                 setInputPhoneNumber(e.replace(/-$/,""))  
//             } else if(e.indexOf("-")===3){
//                 setInputPhoneNumber(e)
//             } else {
//                 e=e.replace(/\-/g,"")
//                 setInputPhoneNumber(e.replace(/(.{3})/,"$1-"))
//             }
//         } else if(e.match(/-/g).length===2){
//             if(e.lastIndexOf("-")===len-1){
//                 setInputPhoneNumber(e.replace(/-$/,"")) 
//             } else if (e.indexOf("-")===3 && e.lastIndexOf("-")===8){
//                 setInputPhoneNumber(e)
//             } else {
//                 e=e.replace(/\-/g,"")
//                 setInputPhoneNumber(e.replace(/(.{3})/,"$1-"))
//             }
//         } else {
//             e=e.replace(/\-/g,"")
//             setInputPhoneNumber(e.replace(/(.{3})/,"$1-"))
//         }
//     } else if (len===9){
//         if (e.lastIndexOf("-")===len-1){
//             setInputPhoneNumber(e.replace(/-$/,"")) 
//         } else if(e.indexOf("-")===3 &&e.lastIndexOf("-")===len-1){
//             setInputPhoneNumber(e.replace(/-$/,""))  
//         } else {
//             e=e.replace(/\-/g,"")
//             setInputPhoneNumber(e.replace(/(.{3})/,"$1-"))
//         }
//     } else if(len<14){
//         if(e.match(/-/g).length===2){
//             if(e.lastIndexOf("-")===len-1){
//                 setInputPhoneNumber(e.replace(/-$/,""))  
//             } else if(e.lastIndexOf("-")!==8){
//                 e=e.replace(/\-/g,"")
//                 setInputPhoneNumber(e.replace(/(.{8})/,"$1-"))
//             } else{
//                 setInputPhoneNumber(e)
//             }
//         } else if (e.match(/-/g).length===1){
//             if(e.indexOf("-")===3){
//                 setInputPhoneNumber(e.replace(/(.{8})/,"$1-"))
//             } else if(e.indexOf("-")===8) {
//                 e=e.replace(/\-/g,"")
//                 setInputPhoneNumber(e.replace(/(.{3})/,"$1-"))
//             } else{
//                 e=e.replace(/\-/g,"")
//                 e=e.replace(/(.{8})/,"$1-")
//                 setInputPhoneNumber(e.replace(/(.{3})/,"$1-"))   
//             } 
//         } else{
//                 e=e.replace(/\-/g,"")
//                 e=e.replace(/(.{3})/,"$1-")
//                 setInputPhoneNumber(e.replace(/(.{8})/,"$1-"))
//             }
//     } else {
//         setInputPhoneNumber(e.slice(0, -1))  
//     }
//   },
  HandleInput : ({e,setInput})=>{
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e)) {
      setInput(e);
    }
  },
  PhoneNumberCheck : ({inputText,setInputText}) => {
    if (inputText===null){
    } else if (inputText.length===4){
        setInputText(inputText.replace(/-/g, '').replace(/(\d{3})(\d{1})/,'$1-$2'))
    } else if (inputText.length<=8){
        setInputText(inputText.replace(/-/g, '').replace(/(\d{3})(\d{1})/,'$1-$2'))
    } else if (inputText.length===9){
       setInputText(inputText.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{1})/,'$1-$2-$3'))
   } else if (inputText.length<=13){
       setInputText(inputText.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{1})/,'$1-$2-$3'))
   } 
  },
  PassWordRuleChecker : ({e,setInputPw})=> { 
    const pwRule= /^[A-Za-z0-9!@#$?]*$/
    if (!pwRule.test(e)){
        //setInputText2(e.replace(!pwRule.test(e),""))
        alert("특수문자는 !,@,#,$,? 만 입력가능합니다.")
    } else{
        setInputPw(e)
    }  
    },
 SignUpTitle : ({chartWidth,chartHeight,Move}) => {
     return (
         <View>
            <View style={{ width: chartWidth, height: 56 * chartHeight / 734, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity 
                style={{ justifyContent: 'center', marginLeft: 10 * chartWidth / 375 }} 
                onPress={()=>Move()}>
            <Image
                style={{ width: chartWidth * 26 / 375, height: chartWidth * 26 / 375 }}
                source={require('../../../assets/image/Registry/Signup//backkey.png')} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18 * chartHeight / 734, fontWeight: 'bold', textAlignVertical: 'center' }}>
            회원가입
            </Text>
            <View style={{ width: chartWidth * 26 / 375, height: chartWidth * 26 / 375, marginRight: 10 * chartWidth / 375 }}></View>
            </View>
            <View style={{ width: chartWidth, height: 1 * chartHeight / 734, backgroundColor: '#50bcdf' }} />      
        </View>
     )
 },
}