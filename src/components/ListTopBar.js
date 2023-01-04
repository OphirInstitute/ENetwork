import React, {useState} from 'react';
import {View} from 'react-native';
import TopBar from './TopBar';
import {useTheme} from '@react-navigation/native';

const ListTopBar = () => {
  const {colors} = useTheme();
  const bars = [
    {id: '1', title: 'Trending'},
    {id: '2', title: 'Portfolio'},
    {id: '3', title: 'Hot'},
    {id: '4', title: 'Gainers'},
    {id: '5', title: 'Losers'},
  ];

  const [activetab, setActiveTab] = useState('Trending');
  return (
    <View style={{flexDirection: 'row', backgroundColor: ''}}>
      {bars.map(item => (
        <TopBar
          key={item.id}
          title={item.title}
          handlePress={item => {
            setActiveTab(item);
            console.log(
              '🚀 ~ file: ListTopBar.js:30 ~ ListTopBar ~ item',
              item,
            );
          }}
          otherStyles={{
            color: item !== activetab ? colors.text : colors.notification,
          }}
        />
      ))}
    </View>
  );
};

export default ListTopBar;
