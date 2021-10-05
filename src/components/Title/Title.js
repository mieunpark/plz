import React from 'react';
import { View,
         TouchableOpacity,
         Image,
         Text
} from 'react-native';

export default {
    SignUpTitle : ({Move}) => {
        return (
            <View style={{width:"100%",height:"7.63%"}}>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,alignItems:'center',height:"98%"}}>
                <TouchableOpacity 
                    style={{ justifyContent: 'center',width: "9%",height:"52%",marginLeft:"2.67%"}} 
                    onPress={()=>Move()}>
                  <Image
                    style={{width:'100%',height:'100%'}}
                    source={require('../../../assets/image/Registry/Signup//backkey.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18,fontWeight: 'bold'}}>
                  회원가입
                </Text>
                <View style={{ width:"9%", height: "52%",marginRight: "2.67%" }}></View>
               </View>
               <View style={{ width:"100%", height:"2%", backgroundColor: '#50bcdf' }} />      
           </View>
        )
    },
}