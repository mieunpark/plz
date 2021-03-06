import moment from 'moment';
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Container } from '../../../components/Container'
import { Provider } from "react-redux"
import { store } from "../../redux/store"
import CheckBox from '@react-native-community/checkbox';
import { Checker } from '../../../components/Checker'
import { Title } from '../../../components/Title'

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

const TermsPresenter = ({ GoNaver,GoBackLogin,GoSignup}) => {

  const [allTerms, setAllTerms] = useState(false)
  const [terms1, setTerms1] = useState(false)
  const [terms2, setTerms2] = useState(false)
  const [terms3, setTerms3] = useState(false)
  const [terms4, setTerms4] = useState(false)

  const MoreTerms = ({setAllTerms,myterm,term1,term2,term3,setTerms,mainEx,subEx}) => {
        
        return(
          <View style={styles.TermBtn}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  style={styles.CheckBoxs}
                  onValueChange={(e)=>{ if (e === false) {setAllTerms(e)} else if (term1===term2===term3===e===true) {setAllTerms(e)} setTerms(e)}}
                  value={myterm}
                />
                <View>
                  <Text style={styles.MainEx}>{mainEx}</Text>
                  <Text style={styles.SubEx}>{subEx}</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={{ justifyContent: 'flex-end' }} 
                onPress={() => GoNaver()}>
                <Image
                  style={{ width: chartWidth * 20 / 375, height: chartWidth * 20 / 375 }}
                  source={require('../../../../assets/image/Registry/Signup//more.png')} />
              </TouchableOpacity>
          </View>

        )
    }
 

  const essentialAgree = () => {
    if (terms1 === true && terms2 === true) {
      GoSignup();
    }
    else {
      alert('??????????????? ????????? ?????????')
    }
  }
  return (
    <Container.MainContainer>
      <View style={styles.Main}>
        {Title.SignUpTitle({Move:GoBackLogin})}
        <View style={styles.MainFrame}>
          <View style={{height:"60.77%"}}>
            <View style={{  height: "12.14%"}} />
            <View style={{ height: "6.31%", flexDirection: 'row', alignItems: 'center' }}>
                <CheckBox
                  style={{width:"100%",height:"80%",marginRight:"15%"}}
                  onValueChange={(e)=>{setAllTerms(e),setTerms1(e),setTerms2(e),setTerms3(e),setTerms4(e)}}
                  value={allTerms}
                />
              <Text style={{ fontSize: 18 * chartHeight / 734, fontWeight: 'bold', textAlignVertical: 'center' }}>????????? ?????? ??????</Text>
            </View>
            <View style={{height: "9.7%" }} />
            {MoreTerms({
              setAllTerms:setAllTerms,
              myterm:terms1,
              term1:terms2,
              term2:terms3,
              term3:terms4,
              setTerms:setTerms1,
              mainEx:"????????? ???????????? ?????? (??????)",
              subEx:"????????? ?????? ???????????? ??????"})}
            {MoreTerms({
              setAllTerms:setAllTerms,
              myterm:terms2,
              term1:terms1,
              term2:terms3,
              term3:terms4,
              setTerms:setTerms2,
              mainEx:"?????? ?????? ???????????? ??????(??????)",
              subEx:"????????? ????????? ?????? ?????? ???????????? ??????"})}
            {MoreTerms({
              setAllTerms:setAllTerms,
              myterm:terms3,
              term1:terms1,
              term2:terms2,
              term3:terms4,
              setTerms:setTerms3,
              mainEx:"?????? ?????? ???????????? ??????(??????)",
              subEx:"??????????????? ?????? ??? ?????? ????????? ?????? ??????"})}
            {MoreTerms({
              setAllTerms:setAllTerms,
              myterm:terms4,
              term1:terms1,
              term2:terms2,
              term3:terms3,
              setTerms:setTerms4,
              mainEx:"???????????? ???3??? ?????? ?????? (??????)",
              subEx:"????????? ???????????? ?????? ????????? ?????? ?????? ?????? ??????"})}
          </View>
          <TouchableOpacity 
            style={styles.NextBtn} 
            onPress={() => { essentialAgree()}}>
            <Text style={styles.NextBtnText}>??? ???</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container.MainContainer>
  );

};


export default TermsPresenter;

const styles = StyleSheet.create({
  TermBtn: {
    height: "10.44%",
    marginBottom: '7.28%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  CheckBoxs : {
    width:"100%",
    height: "50%" , 
    borderRadius: 5,  
    marginRight: "15%",
  },
  MainEx : {
    fontSize: 16 * chartHeight / 734, 
    fontWeight: 'bold', 
    textAlignVertical: 'center'

  },
  SubEx : {
    fontSize: 12 * chartHeight / 734,
    textAlignVertical: 'center'

  },
  Main : {
    width: "100%", 
    height: "100%" ,
    backgroundColor:'#FFFFFF'
  },
  MainFrame : {
    width: "100%",
    height: "92.37%", 
    paddingRight: "5.3%",
    paddingLeft: "5.3%" ,
    justifyContent:'space-between'
    },
})