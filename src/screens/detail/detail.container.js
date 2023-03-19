import React from 'react';
import DetailView from './detail.view';
import { useNavigation, useRoute } from '@react-navigation/native';
import { EMPTY_STRING } from 'constants/common';
import { SceneMap } from 'react-native-tab-view';
import TodoSection from './sections/todo';
import CompleteSection from './sections/complete';
import { useForm } from 'react-hook-form';

const renderScene = SceneMap({
  todo: TodoSection,
  complete: CompleteSection
});

const DetailContainer = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'todo', title: 'todo' },
    { key: 'complete', title: 'complete' }
  ]);
  const { control, handleSubmit, errors } = useForm();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <DetailView
      titleHeader={route?.params?.title || EMPTY_STRING}
      goBack={goBack}
      index={index}
      setIndex={setIndex}
      routes={routes}
      renderScene={renderScene}
      control={control}
    />
  );
};

export default DetailContainer;
