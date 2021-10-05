import moment from 'moment';
import React, { useState,useRef, useEffect } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Text,
    Dimensions
} from 'react-native';
import { Container } from '../../../components/Container'
import { Checker } from '../../../components/Checker'
import { Provider } from "react-redux"
import { store } from "../../redux/store"
const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;
const MyPagePresenter = ()=>{
  const [Percent, setPercent] = useState(0)
  const [PercentNumber,setPercentNumber] =useState(0)
  const PercentGage= useRef(new Animated.Value(1)).current;
  const PercentNumberGage =useRef(new Animated.Value(0)).current;
  const loadingBar = useRef(new Animated.Value(0)).current;
  
  useEffect(()=>{
    PercentActive()
    //loadingAnim(),loadingAnim2()
  },[]);
  const Percentloading = () => {
  // Will change PercentBar value to 1 in 5 seconds
  Animated.timing(PercentGage, {
    toValue: 56,
    duration: 8000,
    useNativeDriver: false,
    }).start();
  Animated.timing(PercentNumberGage, {
    toValue: 100,
    duration: 8000,
    useNativeDriver: false,
    }).start();
  };
  
  const PercentActive =()=>{
    Percentloading(),
    PercentNumberGage.addListener((e)=>{
      setPercentNumber(Math.round(e.value))
    }),
    PercentGage.addListener((e)=>{ 
        setPercent(Math.round(e.value))
        
    })
    
  }
    return(
      <Container.MainContainer>
          <View style={styles.MainFrame}>
            <View style={styles.TitleBar}>
              <Image
                style={styles.logo}
                source={require('../../../../assets/image/MainPage/Home/dalamz_logo.png')} />
              <TouchableOpacity style={styles.SettingBtnFrame}>
                <Image
                  style={styles.SettingImg}
                  source={require('../../../../assets/image/MainPage/Home/setting_btn.png')} />
              </TouchableOpacity>
            </View>
            <View style={{marginTop:10 * chartHeight / 734,marginBottom:chartHeight * 25 / 734,marginLeft:chartWidth * 20 / 734,alignItems:'center'}}>
              <Animated.View  
                style={{elevation:0,justifyContent:'center',alignItems:'center'}}>
                <Image
                  style={styles.loadingImg}
                  source={require('../../../../assets/image/MainPage/Home/loading_blue.png')} /> 
                <View style={{position:'absolute',elevation:56,width:chartHeight * 145/ 734,height:chartHeight * 145/ 734,justifyContent:'center',alignItems:'center',shadowColor:'white'}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#07064A',fontSize:chartHeight * 70/ 734,fontWeight:'bold'}}>{PercentNumber}</Text>
                    <Text style={{color:'#07064A',fontSize:chartHeight * 35/ 734,fontWeight:'bold'}}>%</Text>
                  </View>
                </View>
              </Animated.View>
              <View style={[styles.invisible_bar,{left:chartWidth* 162/375,elevation:1,transform:[{rotate:'0deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 178/375, elevation:2,transform:[{rotate:'10deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 192/375, top:chartWidth* 5/375 ,elevation:3}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 206/375, top:chartWidth* 8/375 ,elevation:4}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 219/375, top:chartWidth* 14/375, elevation:5 ,transform:[{rotate:'45deg'}]}]}/>
              <View style={[styles.invisible_bar,{left:chartWidth* 232/375, top:chartWidth* 22/375, elevation:6 ,transform:[{rotate:'45deg'}]}]}/>
              <View style={[styles.invisible_bar,{left:chartWidth* 245/375, top:chartWidth* 32/375, elevation:7 ,transform:[{rotate:'45deg'}]}]}/>                
              <View style={[styles.invisible_bar,{left:chartWidth* 254/375, top:chartWidth* 42/375, elevation:8 ,transform:[{rotate:'48deg'}]}]}/>
              <View style={[styles.invisible_bar,{left:chartWidth* 264/375, top:chartWidth* 54/375, elevation:9 ,transform:[{rotate:'51deg'}]}]}/>                
              <View style={[styles.invisible_bar,{left:chartWidth* 273/375, top:chartWidth* 67/375, elevation:10 ,transform:[{rotate:'54deg'}]}]}/>
              <View style={[styles.invisible_bar,{left:chartWidth* 280/375, top:chartWidth* 82/375, elevation:11 ,transform:[{rotate:'58deg'}]}]}/>
              <View style={[styles.invisible_bar,{left:chartWidth* 285/375, top:chartWidth* 96/375, elevation:12 ,transform:[{rotate:'70deg'}]}]}/>                
              <View style={[styles.invisible_bar,{left:chartWidth* 288/375, top:chartWidth* 112/375, elevation:13 ,transform:[{rotate:'76deg'}]}]}/>                
              <View style={[styles.invisible_bar,{left:chartWidth* 290/375, top:chartWidth* 130/375, elevation:14 ,transform:[{rotate:'80deg'}]}]}/>                
              <View style={[styles.invisible_bar,{left:chartWidth* 290/375, top:chartWidth* 150/375, elevation:15 ,transform:[{rotate:'90deg'}]}]}/>                
              <View style={[styles.invisible_bar,{left:chartWidth* 288/375, top:chartWidth* 165/375, elevation:16 ,transform:[{rotate:'100deg'}]}]}/>                
              <View style={[styles.invisible_bar,{left:chartWidth* 285/375, top:chartWidth* 175/375, elevation:17 ,transform:[{rotate:'110deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 280/375, top:chartWidth* 190/375, elevation:18 ,transform:[{rotate:'120deg'}]}]}/>                
              <View style={[styles.invisible_bar,{left:chartWidth* 271/375, top:chartWidth* 205/375, elevation:19 ,transform:[{rotate:'130deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 262/375, top:chartWidth* 217/375, elevation:20 ,transform:[{rotate:'135deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 252/375, top:chartWidth* 230/375, elevation:21 ,transform:[{rotate:'140deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 240/375, top:chartWidth* 240/375, elevation:22 ,transform:[{rotate:'143deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 225/375, top:chartWidth* 250/375, elevation:23 ,transform:[{rotate:'145deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 210/375, top:chartWidth* 259/375, elevation:24 ,transform:[{rotate:'150deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 195/375, top:chartWidth* 264/375, elevation:25 ,transform:[{rotate:'160deg'}]}]}/>
              <View style={[styles.invisible_bar,{left:chartWidth* 180/375, top:chartWidth* 268/375, elevation:26 ,transform:[{rotate:'170deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 195/375, top:chartWidth* 264/375, elevation:27 ,transform:[{rotate:'160deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 165/375, top:chartWidth* 270/375, elevation:28 ,transform:[{rotate:'0deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 150/375, top:chartWidth* 270/375, elevation:29 ,transform:[{rotate:'10deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 135/375, top:chartWidth* 268/375, elevation:30 ,transform:[{rotate:'10deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 120/375, top:chartWidth* 264/375, elevation:31 ,transform:[{rotate:'20deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 105/375, top:chartWidth* 260/375, elevation:32 ,transform:[{rotate:'30deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 92/375, top:chartWidth* 254/375, elevation:33 ,transform:[{rotate:'35deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 78/375, top:chartWidth* 246/375, elevation:34 ,transform:[{rotate:'40deg'}]}]}/>
              <View style={[styles.invisible_bar,{left:chartWidth* 64/375, top:chartWidth* 234/375, elevation:35 ,transform:[{rotate:'45deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 52/375, top:chartWidth* 222/375, elevation:36 ,transform:[{rotate:'50deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 42/375, top:chartWidth* 210/375, elevation:37 ,transform:[{rotate:'55deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 34/375, top:chartWidth* 195/375, elevation:38 ,transform:[{rotate:'60deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 28/375, top:chartWidth* 180/375, elevation:39 ,transform:[{rotate:'65deg'}]}]}/>
              <View style={[styles.invisible_bar,{left:chartWidth* 25/375, top:chartWidth* 165/375, elevation:40 ,transform:[{rotate:'75deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 22/375, top:chartWidth* 155/375, elevation:41 ,transform:[{rotate:'85deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 20/375, top:chartWidth* 140/375, elevation:42 ,transform:[{rotate:'90deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 21/375, top:chartWidth* 125/375, elevation:43 ,transform:[{rotate:'100deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 22/375, top:chartWidth* 110/375, elevation:44 ,transform:[{rotate:'105deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 26/375, top:chartWidth* 95/375, elevation:45 ,transform:[{rotate:'110deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 32/375, top:chartWidth* 80/375, elevation:46 ,transform:[{rotate:'115deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 38/375, top:chartWidth* 65/375, elevation:47 ,transform:[{rotate:'125deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 47/375, top:chartWidth* 54/375, elevation:48 ,transform:[{rotate:'130deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 56/375, top:chartWidth* 42/375, elevation:49 ,transform:[{rotate:'132deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 70/375, top:chartWidth* 30/375, elevation:50 ,transform:[{rotate:'140deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 82/375, top:chartWidth* 22/375, elevation:51 ,transform:[{rotate:'145deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 95/375, top:chartWidth* 13/375, elevation:52 ,transform:[{rotate:'150deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 110/375, top:chartWidth* 8/375, elevation:53 ,transform:[{rotate:'160deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 125/375, top:chartWidth* 3/375, elevation:54 ,transform:[{rotate:'170deg'}]}]}/> 
              <View style={[styles.invisible_bar,{left:chartWidth* 140/375, top:chartWidth* 0/375, elevation:55 ,transform:[{rotate:'180deg'}]}]}/> 
            </View>
            <View style={{ height: chartHeight * 178 / 734}}>
              <View style={{ height: chartHeight * 42/ 734, marginBottom: chartHeight * 10 / 734}}>
                <View style={{width: chartWidth * 83 / 375, height: chartHeight * 24/ 734,borderRadius:8}}>
                  <Text style={{color:'#07064A',fontSize:chartHeight * 18/ 734,fontWeight:'bold'}}>알림설정</Text>
                </View>
              </View>
              <View style={{ height: chartHeight * 44 / 734,marginBottom: chartHeight * 20 / 734}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',marginBottom:chartHeight * 20 / 734,justifyContent:'space-between'}}>
                  <Text style={{color:'#07064A',fontSize:chartHeight * 16/ 734,fontWeight:'bold'}}>제품사용량</Text>
                  <Text style={{color:'#07064A',fontSize:chartHeight * 16/ 734,alignItems:'flex-end'}}>80%초과시</Text>
                </View>
                <View style={{ height: chartHeight * 4 / 734,backgroundColor:'#e2e2e2'}}/>
              </View>
              <View style={{ height: chartHeight * 44 / 734,marginBottom: chartHeight * 20 / 734}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between',marginBottom:chartHeight * 20 / 734}}>
                  <Text style={{color:'#07064A',fontSize:chartHeight * 16/ 734,fontWeight:'bold'}}>제품사용량</Text>
                  <Text style={{color:'#07064A',fontSize:chartHeight * 16/ 734,alignItems:'flex-end'}}>80%초과시</Text> 
                </View>
                <View style={{ height: chartHeight * 4 / 734,backgroundColor:'#e2e2e2'}}/>
              </View>
            </View>
            <View style={{ alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity style={{width: chartWidth * 295 / 375, height: chartHeight * 55/ 734,borderRadius:28,backgroundColor:"#10B2E2",justifyContent:'center',alignItems:'center',shadowColor:'black',elevation:5}}>
                <Text style={{fontSize:chartHeight * 18/ 734,color:'white',fontWeight:'bold'}}>자주 묻는 질문</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Container.MainContainer>
    );
};
const styles = StyleSheet.create({
  loading_bar: {
    position: 'absolute', 
    height:'55%', 
    opacity:0.5,
    borderRadius:8,
    backgroundColor:"#ffffff",
    shadowColor:'black',
  },
  invisible_bar :{
    position:'absolute', 
    width:chartWidth* 14/375, 
    height: chartHeight* 27/734,
    backgroundColor: 'red',
    shadowColor:'white'

  },
  MainFrame : {
     width: chartWidth, 
     height: chartHeight , 
     paddingLeft: 20 * chartWidth / 375, 
     paddingRight: 20 * chartWidth / 375, 
     backgroundColor: 'white'
    
  },
  TitleBar : { 
    height: 70 * chartHeight / 734, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems:'center'
  }, 
  logo : { 
    width: chartWidth * 150 / 375, 
    height: chartHeight * 27 / 734 
  },
  SettingBtnFrame : {
    width: chartHeight * 36 / 734, 
    height: chartHeight * 36 / 734,
    borderRadius:23,
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "black",
    elevation: 5, 
    backgroundColor: 'white'
  },
  SettingImg : {
    width: chartHeight * 20 / 734, 
    height: chartHeight * 20 / 734 
  },
  loadingImg : {
    width: chartHeight * 295/ 734,
    height: chartHeight * 295/ 734 ,
    alignItems:'center'
  }



});

export default MyPagePresenter;