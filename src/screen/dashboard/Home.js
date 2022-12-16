import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Container from '../../components/container';
import passport from '../../assets/images/passport.png';
import logo from '../../assets/images/logo.png';
import setting from '../../assets/images/setting-2.png';
import notification from '../../assets/images/notification.png';
import search from '../../assets/images/search-normal.png';
import Slider from '../../components/slider';
import Balance from '../../components/balance';
import Beneficiaries from '../../components/Beneficiaries';
import ImageList from '../../components/ImageList';
import TopBar from '../../components/TopBar';
import {COLORS} from '../../constants/theme';
import ListTopBar from '../../components/ListTopBar';
import CryptoRow from '../../components/CryptoRow';
import bitcoin from '../../assets/images/Cryptocurrency.png';
import eth from '../../assets/images/eth.png';
import xrp from '../../assets/images/xrp.png';
import bnb from '../../assets/images/bnb.png';

const Home = () => {
  const [imageUris, setImageUris] = useState([]);
  const [activeTab, setActiveTab] = useState('Trending');

  const handleAdd = uri => {
    setImageUris([uri, ...imageUris]);
  };
  useEffect(() => {
    console.log('🚀 ~ file: Home.js ~ line 25 ~ Home ~ e', activeTab);
  }, [activeTab]);

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageuri => imageuri !== uri));
  };
  return (
    <Container>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',

          height: 50,
        }}>
        <View
          style={{
            flexDirection: 'row',
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{}}>
            <Image
              source={passport}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
              }}
            />
          </View>
          <View style={{alignSelf: 'center', marginLeft: 5}}>
            <Text>Micheal</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={logo} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Image source={search} />
          <Image source={notification} />
          <Image source={setting} />
        </View>
      </SafeAreaView>
      <Slider />
      <Balance />
      <View>
        <View style={{marginTop: 5}}>
          <Text style={{fontWeight: '600'}}>Beneficiaries</Text>
        </View>
        <ImageList
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
      </View>
      <View
        style={{
          backgroundColor: COLORS.gray2,
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <ListTopBar />
        {/* <TopBar
          title={'Trending'}
          // addBottomColor={activeTab === 'Trending' ? 'red' : ''}
          handlePress={item => {
            if (activeTab !== item) {
              setActiveTab(item);
            }
          }}
          style={{
            borderBottomWidth: activeTab === 'Trending' && 2,
            borderBottomColor: activeTab === 'Trending' && COLORS.primary,
            width: activeTab === 'Trending' && 40,
            padding: 2,
            backgroundColor: 'yellow',
          }}
        /> */}

        {/* <TopBar
          title={'Portfolio'}
          handlePress={item => {
            setActiveTab(item);
          }}
          style={{
            borderBottomWidth: activeTab === 'Portfolio' && 2,
            borderBottomColor: activeTab === 'Portfolio' && COLORS.primary,
            width: activeTab === 'Portfolio' && 40,
            padding: 2,
          }}
        /> */}
        {/* <TopBar
          title={'Hot'}
          handlePress={item => {
            setActiveTab(item);
          }}
          style={{
            borderBottomWidth: activeTab === 'Hot' && 2,
            borderBottomColor: activeTab === 'Hot' && COLORS.primary,
            width: activeTab === 'Hot' && 10,
            padding: 2,
          }}
        /> */}
        {/* <TopBar
          title={'Losers'}
          handlePress={item => {
            setActiveTab(item);
          }}
          style={{
            borderBottomWidth: activeTab === 'Losers' && 2,
            borderBottomColor: activeTab === 'Losers' && COLORS.primary,
            width: activeTab === 'Losers' && 30,
            padding: 2,
          }}
        /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CryptoRow coin={'BTC'} img={bitcoin} perecentage={'5.76%'} />
        <CryptoRow loss coin={'ETH'} img={eth} perecentage="5.09%" />
        <CryptoRow coin={'BNB'} img={bnb} perecentage="4.76%" />
        <CryptoRow coin={'XRP'} img={xrp} perecentage="19:80%" />
        <CryptoRow loss coin={'ADA'} img={bnb} perecentage="12.99%" />
        <CryptoRow loss coin={'KCC'} img={eth} perecentage="4.09%" />
      </ScrollView>
    </Container>
  );
};

export default Home;
