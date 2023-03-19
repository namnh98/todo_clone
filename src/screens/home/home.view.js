import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './home.styles';
import Header from 'components/header';
import { stylesCommon } from 'constants/styles';
import {
  IC_House,
  IC_List,
  IC_Logout,
  IC_Plus,
  IC_Search,
  IC_Star,
  IC_ThreeDotStraight
} from 'assets/icons';
import CardItem from 'components/cardItem';

const HomeView = props => {
  const {
    profileAction,
    showMore,
    showMoreAction,
    searchHandle,
    logoutHandle,
    addNewList,
    goToDetail
  } = props;
  const leftHeader = () => {
    return (
      <TouchableOpacity
        style={[styles.headerLeft, stylesCommon.flexRowFull]}
        onPress={profileAction}>
        <View style={[styles.shortNameWrapper, stylesCommon.centerDefault]}>
          <Text style={styles.titleLeftHeader}>NN</Text>
        </View>
        <Text style={styles.titleMailLeftHeader}>Nam Nguyen</Text>
      </TouchableOpacity>
    );
  };

  const rightHeader = () => {
    return (
      <View style={stylesCommon.flexRowDefault}>
        {showMore ? (
          <View style={stylesCommon.flexRowDefault}>
            <TouchableOpacity
              style={[styles.buttonDefault, stylesCommon.centerDefault]}
              onPress={searchHandle}>
              <Image source={IC_Search} style={styles.iconHeader} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonDefault, stylesCommon.centerDefault]}
              onPress={logoutHandle}>
              <Image source={IC_Logout} style={styles.iconHeader} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={showMoreAction} style={stylesCommon.flexRowDefault}>
            <Image source={IC_ThreeDotStraight} style={styles.iconHeader} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header leftComponent={leftHeader} rightComponent={rightHeader} />
      <View style={styles.body}>
        <CardItem srcIcon={IC_Star} iconStyle={styles.iconStar} title={'Important'} />
        <CardItem srcIcon={IC_House} iconStyle={styles.iconHouse} title={'Tasks'} />
        <View style={styles.line} />
        <CardItem
          srcIcon={IC_List}
          iconStyle={styles.iconList}
          title={'Task List'}
          onPress={() => goToDetail('Task List')}
        />
        <CardItem
          srcIcon={IC_List}
          iconStyle={styles.iconList}
          title={'House List'}
          onPress={() => goToDetail('House List')}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={[stylesCommon.flexRowDefault]} onPress={addNewList}>
          <Image source={IC_Plus} style={styles.iconPlus} />
          <Text style={styles.titleNewList}>New List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;
