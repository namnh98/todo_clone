import { useNavigation } from '@react-navigation/native';
import { SCREENS_NAME } from 'constants/screenNames';
import React, { useState } from 'react';
import HomeView from './home.view';

const HomeContainer = () => {
  const navigation = useNavigation();
  const [showMore, setShowMore] = useState(false);

  const profileAction = () => {
    navigation.navigate(SCREENS_NAME.PROFILE);
  };

  const showMoreAction = () => {
    setShowMore(pre => !pre);
  };

  const searchHandle = () => {
    showMoreAction();
  };

  const logoutHandle = () => {
    showMoreAction();
    navigation.navigate(SCREENS_NAME.AUTH_STACK);
  };

  const addNewList = () => {};

  const goToDetail = title => {
    navigation.navigate(SCREENS_NAME.DETAIL, { title });
  };

  return (
    <HomeView
      profileAction={profileAction}
      showMore={showMore}
      showMoreAction={showMoreAction}
      searchHandle={searchHandle}
      logoutHandle={logoutHandle}
      addNewList={addNewList}
      goToDetail={goToDetail}
    />
  );
};

export default HomeContainer;
