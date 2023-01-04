import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Text,
  ActivityIndicator,
  Image,
  ImageBackground,
} from 'react-native';
import dummy from '../constants/dummy';
import {COLORS, SIZES} from '../constants/theme';
import backg from '../assets/images/blue.png';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

const Slider = () => {
  const [banners, setBanners] = useState(dummy.banners);

  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollRef = useRef();
  let intervalId = null;

  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  // useEffect(() => {
  //   Dimensions.addEventListener('change', onChange);
  //   return () => {
  //     Dimensions.removeEventListener('change', onChange);
  //   };
  // });

  const onSlideChange = useCallback(() => {
    // Calculate newIndex here and use it to update your state and to scroll to the new slide
    const newIndex =
      selectedIndex === banners.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(newIndex);

    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
      x: dimension.width * newIndex,
    });
  }, [selectedIndex]);

  const startInterval = useCallback(() => {
    intervalId = setInterval(onSlideChange, 3000);
  }, [onSlideChange]);

  useEffect(() => {
    startInterval();

    return () => {
      // Clear the interval when component unmounts, otherwise you could have memory leaks
      clearInterval(intervalId);
    };
  }, [onSlideChange]);

  const onTouchStart = () => {
    // As soon as the user touches the slide, stop the automatic sliding
    clearInterval(intervalId);
  };

  const onTouchEnd = () => {
    // As soon as the user stops touching the slide, releases it, start the automatic sliding again
    startInterval();
  };

  const setIndex = event => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let carouselIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(carouselIndex);
  };
  return (
    <View style={{marginVertical: 10}}>
      <ScrollView
        horizontal
        ref={scrollRef}
        onMomentumScrollEnd={setIndex}
        showsHorizontalScrollIndicator={false}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        pagingEnabled>
        {banners.map((value, key) => (
          <View
            key={key}
            style={{
              height: 160,
            }}>
            <ImageBackground
              source={backg}
              style={{
                width: SIZES.width / 1.1,
                height: 150,
                marginHorizontal: 10,
              }}
              resizeMode="contain"
              PlaceholderContent={<ActivityIndicator />}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 20,
                  alignItems: 'center',
                  // backgroundColor: 'red',
                }}>
                <View
                  style={{
                    // backgroundColor: 'yellow',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 0.3,
                    // width: '80%',
                  }}>
                  <Image
                    source={value.image}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 100,
                      width: 100,
                    }}
                  />
                </View>
                <View
                  style={{
                    // backgroundColor: 'red',
                    justifyContent: 'center',
                    // alignItems: 'center',
                    flex: 0.7,
                    width: '100%',
                  }}>
                  <Text style={{fontSize: 20, padding: 10, color: '#01EAD4'}}>
                    {value.title}
                  </Text>
                  <Text style={{color: COLORS.white, padding: 5, fontSize: 14}}>
                    {value.description}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}>
        {banners.map((val, key) => (
          <View
            key={key}
            style={
              key === selectedIndex
                ? {
                    backgroundColor: COLORS.primary,
                    height: 5,
                    width: 20,
                    borderRadius: 8,
                    marginHorizontal: SIZES.base / 3,
                  }
                : {
                    backgroundColor: COLORS.gray,
                    height: 5,
                    width: 16,
                    borderRadius: 8,
                    marginHorizontal: SIZES.base / 3,
                  }
            }
          />
        ))}
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
