import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Image } from 'react-native';
import {
  Layout,
  Button,
  Icon,
  Input,
  Text
} from 'react-native-ui-kitten';
import { NavigationStackProp } from 'react-navigation-stack';
import { AppState } from '../models';
import { loginAction } from '../models/auth/login';
import { color } from '../config/theme';

interface Props {
  navigation: NavigationStackProp;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginResult = useSelector((state: AppState) => state.login);

  const handleLogin = () => {
    dispatch(loginAction({ username, password }));
    navigation.navigate('Home');
    setUsername('');
    setPassword('');
  };

  return (
    <Layout style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text category='h1' style={styles.bigTitle}>
        Welcome
      </Text>
      <Text category='p1' style={styles.title}>
        Sign in to continue
      </Text>
      <Input
        placeholder='Username'
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.username}
        icon={() => <Icon name='checkmark-outline' />}
      />
      <Input
        secureTextEntry
        placeholder='Password'
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.password}
        icon={() => <Icon name='eye' />}
      />
      <Button
        size='small'
        appearance='ghost'
        activeOpacity={0.75}
        style={styles.forgotBtn}
        textStyle={{ color: color.secondary }}
        onPress={() => navigation.navigate('Home')}
      >
        Forgot your password?
      </Button>
      <Button style={styles.loginBnt} size='large' onPress={handleLogin}>
        LOGIN
      </Button>
      <Button
        size='small'
        appearance='ghost'
        activeOpacity={0.75}
        style={styles.registerBnt}
        textStyle={{ color: color.secondary }}
        onPress={() => navigation.navigate('Home')}
      >
        Don't have an account? Create
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    paddingTop: 60,
    backgroundColor: color.background
  },
  logo: {
    resizeMode: 'contain',
    height: 30,
    marginBottom: 15
  },
  bigTitle: {
    color: color.secondary
  },
  title: {
    color: color.secondary,
    marginBottom: 50
  },
  username: {
    marginBottom: 10
  },
  password: {
    marginBottom: 10
  },
  loginBnt: {
    width: '100%',
    backgroundColor: color.primary,
    borderColor: color.primary,
    marginBottom: 10
  },
  forgotBtn: {
    marginBottom: 50,
    paddingHorizontal: 0,
    alignSelf: 'flex-end'
  },
  registerBnt: {
    paddingHorizontal: 0
  }
});

export default LoginScreen;
