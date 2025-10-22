import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Onboarding from '../components/Onboarding';
import { COLORS } from '../constants/Colors';

const SplashScreen = () => (
  <View style={styles.splashContainer}>
    <Image 
      source={require('../assets/images/azany_logo.png')} // Update path to your logo
      style={styles.logo}
      resizeMode="contain"
    />
    <Image 
      source={require('../assets/images/splash-bgitem.png')} // Update path to your bottom decoration
      style={styles.bottomDecoration}
      resizeMode="contain"
    />
  </View>
);

const AppEntry: React.FC = () => {
  const [appState, setAppState] = useState<'loading' | 'onboarding'>('loading');
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAppState('onboarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOnboardingComplete = () => {
    router.replace('/login');
  };

  if (appState === 'loading') {
    return <SplashScreen />;
  }

  return <Onboarding onComplete={handleOnboardingComplete} />;
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 20,
  },
  bottomDecoration: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 150,
    height: 150,
  },
});

export default AppEntry;