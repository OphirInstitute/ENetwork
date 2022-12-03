import React from 'react';
import {Image, Text, View} from 'react-native';
import eye from '../assets/images/eye.png';
import scan from '../assets/images/scan.png';
import patner from '../assets/images/patners.png';
import {COLORS} from '../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import DashboardButton from './DashboardButton';
import send from '../assets/images/send-2.png';
import deposit from '../assets/images/receive.png';
import swap from '../assets/images/swap.png';
import add from '../assets/images/add-square.png';
import Beneficiaries from './Beneficiaries';

const Balance = () => {
  return (
    <View
      style={{
        // flex: 1,
        borderColor: COLORS.gray,
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        height: 170,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          //
        }}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
            // flex: 1,
          }}>
          <Text style={{fontSize: 20}}>BALANCE</Text>
          <TouchableOpacity>
            <Image
              source={eye}
              style={{
                alignSelf: 'center',
                marginLeft: 10,
                height: 15,
                width: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'red',
          }}>
          <View style={{alignItems: 'center', marginHorizontal: 10}}>
            <Image source={patner} />
            <Text>Patners</Text>
          </View>
          <View style={{alignItems: 'center', marginHorizontal: 10}}>
            <Image source={scan} />
            <Text>Scan</Text>
          </View>
        </View>
      </View>
      <View style={{paddingVertical: 8, flexDirection: 'row'}}>
        <View>
          <Text style={{fontSize: 22, fontWeight: '600'}}> $9,438,600.00</Text>
        </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{marginTop: 10}}> USD</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <DashboardButton title={'Send'} source={send} />
        <DashboardButton title={'Receieve'} source={deposit} />
        <DashboardButton title={'Swap'} source={swap} />
        <DashboardButton title={'Add'} source={add} />
      </View>
    </View>
  );
};

export default Balance;
