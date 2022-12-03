import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Container from '../../components/container';
import logo from '../../assets/images/logo.png';
import frame from '../../assets/images/frame.png';
import frame1 from '../../assets/images/frame1.png';
import frame2 from '../../assets/images/frame2.png';
import frame3 from '../../assets/images/frame3.png';
import frame4 from '../../assets/images/frame4.png';
import frame5 from '../../assets/images/frame5.png';
import frame6 from '../../assets/images/frame6.png';
import frame7 from '../../assets/images/frame7.png';
import frame8 from '../../assets/images/frame8.png';
import {COLORS} from '../../constants/theme';
import EnetHeader from '../../components/EnetHeader';
import EnetItem from '../../components/EnetItem';

const Enet = () => {
  return (
    <Container>
      <SafeAreaView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 10,
        }}>
        <Image source={logo} />
        <Text style={{color: COLORS.primary, fontSize: 16}}>cosystem</Text>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <EnetHeader title="DApp" subTitle={'More >>'} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <EnetItem
            img={frame}
            name="PancakeSwap"
            style={{backgroundColor: '#01EBDD'}}
          />
          <EnetItem
            img={frame3}
            name="CoinMarketCap"
            style={{backgroundColor: '#2B6AFF'}}
          />
          <EnetItem
            img={frame4}
            name="UniSwap V3"
            style={{backgroundColor: '#FE007A'}}
          />
        </View>
        <EnetHeader title="Patners" subTitle={'Patner with us >>'} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <EnetItem
            img={frame8}
            name="Clothing"
            style={{backgroundColor: COLORS.gray}}
          />
          <EnetItem
            img={frame1}
            name="AutoMobile"
            style={{backgroundColor: '#F0F0F0'}}
          />
          <EnetItem
            img={frame1}
            name="AutoMobile"
            style={{backgroundColor: '#F0F0F0'}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <EnetItem
            img={frame8}
            name="Clothing"
            style={{backgroundColor: COLORS.gray}}
          />
          <EnetItem
            img={frame8}
            name="Clothing"
            style={{backgroundColor: COLORS.gray}}
          />
          <EnetItem
            img={frame8}
            name="Clothing"
            style={{backgroundColor: COLORS.gray}}
          />
        </View>
        <EnetHeader
          title="Metaverse"
          subTitle={''}
          style={{backgroundColor: COLORS.gray2}}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <EnetItem
            img={frame5}
            name="Clothing"
            style={{backgroundColor: COLORS.gray2}}
          />
          <EnetItem
            img={frame6}
            name="AutoMobile"
            style={{backgroundColor: COLORS.gray2}}
          />
          <EnetItem
            img={frame7}
            name="AutoMobile"
            style={{backgroundColor: COLORS.gray2}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <EnetItem
            img={frame5}
            name="Clothing"
            style={{backgroundColor: COLORS.gray2}}
          />
          <EnetItem
            img={frame5}
            name="Clothing"
            style={{backgroundColor: COLORS.gray2}}
          />
          <EnetItem
            img={frame5}
            name="Clothing"
            style={{backgroundColor: COLORS.gray2}}
          />
        </View>
        <EnetHeader title="FanBase" subTitle={''} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <EnetItem
            img={frame5}
            name="Clothing"
            style={{backgroundColor: COLORS.gray2}}
          />
          <EnetItem
            img={frame6}
            name="AutoMobile"
            style={{backgroundColor: COLORS.gray2}}
          />
          <EnetItem
            img={frame7}
            name="AutoMobile"
            style={{backgroundColor: COLORS.gray2}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <EnetItem
            img={frame5}
            name="Clothing"
            style={{backgroundColor: COLORS.gray2}}
          />
          <EnetItem
            img={frame5}
            name="Clothing"
            style={{backgroundColor: COLORS.gray2}}
          />
          <EnetItem
            img={frame5}
            name="Clothing"
            style={{backgroundColor: COLORS.gray2}}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Enet;
