import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import React from 'react';
import styles from './detail.styles';
import Header from 'components/header';
import { EMPTY_STRING } from 'constants/common';
import { IC_BackLong, IC_DeleteOutline, IC_Edit } from 'assets/icons';
import { stylesCommon } from 'constants/styles';
import { TabBar, TabView } from 'react-native-tab-view';
import { DEVICE } from 'constants/scale';
import { APP_COLORS } from 'constants/colors';
import Input from 'components/input';

const DetailView = props => {
  const { titleHeader, goBack, index, setIndex, routes, renderScene, control } = props;
  const leftHeader = () => {
    return (
      <View style={[stylesCommon.flexRowFull, styles.left]}>
        <TouchableOpacity style={[styles.btn]} onPress={goBack} hitSlop={2}>
          <Image source={IC_BackLong} style={styles.iconBackLong} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>{titleHeader || EMPTY_STRING}</Text>
      </View>
    );
  };

  const rightHeader = () => {
    return (
      <View style={[stylesCommon.flexRowFull, styles.right]}>
        <TouchableOpacity style={styles.btnRight}>
          <Image source={IC_Edit} style={styles.iconImg} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRight}>
          <Image source={IC_DeleteOutline} style={styles.iconImg} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.titleTabBar}
      activeColor={APP_COLORS.majorelle_blue}
      inactiveColor={APP_COLORS.eerie_black_60}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={stylesCommon.flex1}
          contentContainerStyle={stylesCommon.flex1}>
          <Header leftComponent={leftHeader} rightComponent={rightHeader} />
          <View style={stylesCommon.flex1}>
            <TabView
              lazy
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width: DEVICE.WIDTH }}
              style={styles.tabWrapper}
              renderTabBar={renderTabBar}
            />
          </View>
          <Input
            name={'taskField'}
            styleContainer={styles.containerInput}
            inputStyle={styles.input}
            control={control}
            placeholder={'Add new task'}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DetailView;
