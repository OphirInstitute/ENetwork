import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Container from '../../components/container';
import CustomSearch from '../../components/CustomSearch';
import Favorite from '../../components/Favorite';
import MarketCard from '../../components/MarketCard';
import bitcoin from '../../assets/images/bitcoin.png';
import eth from '../../assets/images/eth.png';
import bnb from '../../assets/images/bnb.png';
import solana from '../../assets/images/solana.png';
import teter from '../../assets/images/teter.png';
import binance from '../../assets/images/binance.png';
import MarketTab from '../../components/MarketTab';
import MarketCoinItem from '../../components/marketCoinItem';
import {useTheme} from '@react-navigation/native';

const Market = () => {
  const {colors} = useTheme();
  return (
    <Container>
      <SafeAreaView>
        <View
          style={{justifycontent: 'center', alignItems: 'center', padding: 10}}>
          <Text style={{fontWeight: '600', color: colors.text, fontSize: 28}}>
            Market
          </Text>
        </View>
      </SafeAreaView>
      <View style={{flex: 1}}>
        <CustomSearch />
        <Favorite />
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <MarketCard
              loss
              pair={'BTC/USDT'}
              source={bitcoin}
              percentage="-4.553%"
              rate={48.0948}
            />
            <MarketCard
              pair={'ETH/USSDT'}
              source={eth}
              percentage="+9.08%"
              rate="34.5655"
            />
            <MarketCard
              pair={'BNB/USSDT'}
              source={bnb}
              percentage="+34.08%"
              rate="23.5655"
            />
          </ScrollView>
        </View>
        <MarketTab />
        <ScrollView showsVerticalScrollIndicator={false}>
          <MarketCoinItem
            loss
            percentage={'-2.9%'}
            source={bitcoin}
            position="1"
            coinName={'Bitcoin'}
            initial="BTC"
            vol={'23.45m'}
            price="16,008.87"
          />
          <MarketCoinItem
            loss
            percentage={'-8.0%'}
            source={eth}
            position="2"
            coinName={'Etherum'}
            initial="ETH"
            vol={'12.3m'}
            price="1,03.87"
          />
          <MarketCoinItem
            percentage={'+2.9%'}
            source={bnb}
            position="3"
            coinName={'BNB'}
            initial="BNB"
            vol={'12.4m'}
            price="108.87"
          />
          <MarketCoinItem
            percentage={'-2.9%'}
            loss
            source={teter}
            position="4"
            coinName={'Tether'}
            initial="USDT"
            vol={'262.4m'}
            price="1.0001"
          />
          <MarketCoinItem
            percentage={'+5.7%'}
            source={binance}
            position="5"
            coinName={'Bianace'}
            initial="BUSD"
            vol={'122.4m'}
            price="1.0001"
          />
          <MarketCoinItem
            percentage={'+9.7%'}
            source={solana}
            position="5"
            coinName={'Solana'}
            initial="SOL"
            vol={'133.4m'}
            price="270.34"
          />
          <MarketCoinItem
            loss
            percentage={'-2.9%'}
            source={bitcoin}
            position="1"
            coinName={'Bitcoin'}
            initial="BTC"
            vol={'23.45m'}
            price="16,008.87"
          />
          <MarketCoinItem
            loss
            percentage={'-8.0%'}
            source={eth}
            position="2"
            coinName={'Etherum'}
            initial="ETH"
            vol={'12.3m'}
            price="1,03.87"
          />
          <MarketCoinItem
            percentage={'+2.9%'}
            source={bnb}
            position="3"
            coinName={'BNB'}
            initial="BNB"
            vol={'12.4m'}
            price="108.87"
          />
          <MarketCoinItem
            percentage={'-2.9%'}
            loss
            source={teter}
            position="4"
            coinName={'Tether'}
            initial="USDT"
            vol={'262.4m'}
            price="1.0001"
          />
          <MarketCoinItem
            percentage={'+5.7%'}
            source={binance}
            position="5"
            coinName={'Bianace'}
            initial="BUSD"
            vol={'122.4m'}
            price="1.0001"
          />
          <MarketCoinItem
            percentage={'+9.7%'}
            source={solana}
            position="5"
            coinName={'Solana'}
            initial="SOL"
            vol={'133.4m'}
            price="270.34"
          />
          <MarketCoinItem
            percentage={'+5.7%'}
            source={binance}
            position="5"
            coinName={'Bianace'}
            initial="BUSD"
            vol={'122.4m'}
            price="1.0001"
          />
          <MarketCoinItem
            percentage={'+9.7%'}
            source={solana}
            position="5"
            coinName={'Solana'}
            initial="SOL"
            vol={'133.4m'}
            price="270.34"
          />
        </ScrollView>
      </View>
    </Container>
  );
};

export default Market;
