import React, {useCallback, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import dynamicLinks, {
  FirebaseDynamicLinksTypes,
} from '@react-native-firebase/dynamic-links';
import {useNavigation} from '@react-navigation/native';

type Link = FirebaseDynamicLinksTypes.DynamicLink | null;

function Home() {
  const {navigate} = useNavigation();

  const handleDynamicLink = useCallback(
    (link: Link) => {
      if (link) {
        const {url} = link;

        const urlArray = url.split('/');
        const path = urlArray[urlArray.length - 1];

        navigate('CustomPage', {path});
      }
    },
    [navigate],
  );

  useEffect(() => {
    dynamicLinks().getInitialLink().then(handleDynamicLink);

    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);

    return () => unsubscribe();
  }, [handleDynamicLink]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
