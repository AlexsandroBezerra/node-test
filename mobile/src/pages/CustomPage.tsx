import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import api from '../services/api';

interface RouteParams {
  path: string;
}

interface Page {
  name: string;
  path: string;
}

function CustomPage() {
  const [page, setPage] = useState<Page | null>(null);
  const {params} = useRoute();

  const routeParams = params as RouteParams;

  useEffect(() => {
    api
      .get(`pages/${routeParams.path}`)
      .then((response) => setPage(response.data));
  }, [routeParams.path]);

  const handleSendNotification = useCallback(() => {
    if (page) {
      api.post('notifications', {
        name: page.name,
      });
    }
  }, [page]);

  if (!page) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This page is for <Text style={styles.strong}>{page.name}</Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSendNotification}>
        <Text style={styles.buttonText}>Send notification</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    paddingHorizontal: 18,
    textAlign: 'center',
  },

  strong: {
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#2B63FF',
    paddingHorizontal: 36,
    paddingVertical: 18,
    borderRadius: 10,
    marginVertical: 32,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CustomPage;
