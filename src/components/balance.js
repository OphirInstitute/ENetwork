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
import recipt from '../assets/images/receiptEdit.png';
import Beneficiaries from './Beneficiaries';
import {useTheme} from '@react-navigation/native';

const Balance = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        // flex: 1,
        borderColor: colors.notification,
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        height: 180,
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
          <Text style={{fontSize: 18, color: colors.text}}>BALANCE</Text>
          <TouchableOpacity>
            <Image
              source={eye}
              style={{
                alignSelf: 'center',
                marginLeft: 10,
                height: 15,
                width: 15,
                tintColor: colors.text,
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
          <TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Image
                source={recipt}
                style={{tintColor: colors.notification, height: 30, width: 35}}
              />
              <Text style={{color: colors.text}}>Request</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{alignItems: 'center', marginHorizontal: 8}}>
              <Image
                source={patner}
                style={{tintColor: colors.notification, height: 30, width: 35}}
              />
              <Text style={{color: colors.text}}>Patners</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Image
                source={scan}
                style={{tintColor: colors.notification, height: 30, width: 35}}
              />
              <Text style={{color: colors.text}}>Scan|Pay</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingVertical: 8, flexDirection: 'row'}}>
        <View>
          <Text style={{fontSize: 20, fontWeight: '600', color: colors.text}}>
            $9,438,600.00
          </Text>
        </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{marginTop: 10, color: colors.notification}}> USD</Text>
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
