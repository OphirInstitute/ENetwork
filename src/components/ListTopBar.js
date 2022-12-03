import React from 'react';
import {View} from 'react-native';
import TopBar from './TopBar';

const ListTopBar = () => {
  const bars = [
    {id: '1', title: 'Trending'},
    {id: '2', title: 'Portfolio'},
    {id: '3', title: 'Hot'},
    {id: '4', title: 'Gainers'},
    {id: '4', title: 'Losers'},
  ];
  return (
    <View style={{flexDirection: 'row'}}>
      {bars.map(item => (
        <TopBar
          title={item.title}
          handlePress={item => {
            console.log(
              '🚀 ~ file: ListTopBar.js ~ line 10 ~ ListTopBar ~ item',
              item,
            );
          }}
        />
      ))}
    </View>
  );
};

export default ListTopBar;
