import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from 'react-native-ui-kitten';
import { SearchHeader, StatusBar } from 'src/components';
import { color } from 'src/config/theme';

const SearchTaskScreen: React.FC = () => {
  return (
    <Layout style={styles.container}>
      <StatusBar />
      <SearchHeader showSearchBtn />
      <Text>Search Task screen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: color.background
  }
});

export default SearchTaskScreen;
