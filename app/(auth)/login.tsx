import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/Colors';
import PasswordInput from '../../components/PasswordInput';
import SocialButton from '../../components/SocialButton';
import CheckBox from 'expo-checkbox';

const LoginScreen = () => {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('johndoe@email.com');
  const handleLogin = () => {
  
    router.replace('/(tabs)/marketplace');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        extraScrollHeight={20}
      >
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/images/azany_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        
        <Text style={styles.subtitle}>WELCOME BACK!</Text>
        <Text style={styles.title}>Log In to your Account</Text>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="johndoe@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <PasswordInput label="Password" defaultValue="password123" />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.optionsContainer}>
            <View style={styles.checkboxContainer}>
              <CheckBox 
                value={rememberMe} 
                onValueChange={setRememberMe} 
                color={rememberMe ? '#1D4F1E' : undefined}
                style={styles.checkbox}
              />
              <Text style={styles.checkboxLabel}>Remember me</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/forgot-password')}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialContainer}>
          <SocialButton provider="google" />
          <SocialButton provider="apple" />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>New user? </Text>
          <TouchableOpacity onPress={() => router.push('/signup')}>
            <Text style={styles.footerLink}>SIGN UP HERE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    paddingTop:  28,
    backgroundColor: COLORS.white 
  },
  container: { 
    flexGrow: 1, 
    padding: 24,
    paddingTop: 16
  },
  logoContainer: { 
    alignSelf: 'flex-start', 
    borderWidth: 1, 
    borderColor: '#E0E0E0', 
    borderRadius: 20, 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    marginBottom: 24 
  },
  logo: {
    width: 60,
    height: 20
  },
  subtitle: { 
    color: '#666666', 
    fontSize: 12, 
    fontWeight: '400',
    letterSpacing: 0.5,
    marginBottom: 4 
  },
  title: { 
    fontSize: 25, 
    fontWeight: '500', 
    color: '#545454', 
    marginBottom: 48,
    letterSpacing: -0.3
  },
  form: { 
    width: '100%', 
    marginBottom: 24 
  },
  inputGroup: {
    marginBottom: 16
  },
  label: { 
    fontSize: 12, 
    fontWeight: '500', 
    color: '#787E88', 
    marginBottom: 8 
  },
  input: { 
  borderWidth: 1, 
    borderColor: '#E0E0E0', 
    borderRadius: 8, 
    paddingHorizontal: 16, 
    paddingVertical: 14, 
    fontSize: 14,
    color: '#667085',
    backgroundColor: '#FAFAFA'
  },
  button: { 
    backgroundColor: '#1D4F1E', 
    paddingVertical: 16, 
    borderRadius: 8, 
    alignItems: 'center', 
  marginVertical: 16
  },
  buttonText: { 
    color: COLORS.white, 
    fontWeight: '600', 
    fontSize: 16,
    letterSpacing: 0.3
  },
  optionsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 8
  },
  checkboxContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
    gap: 8
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 3
  },
  checkboxLabel: { 
    color: '#666666',
    fontSize: 14,
    fontWeight: '400'
  },
  linkText: { 
    color: '#333333', 
    fontWeight: '500',
    fontSize: 14
  },
  dividerContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 24 
  },
  divider: { 
    flex: 1, 
    height: 1, 
    backgroundColor: '#E0E0E0' 
  },
  dividerText: { 
    marginHorizontal: 16, 
    color: '#666666',
    fontSize: 14,
    fontWeight: '500'
  },
  socialContainer: { 
    flexDirection: 'row', 
    gap: 16,
    marginBottom: 24
  },
  footer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16
  },
  footerText: { 
    color: '#666666',
    fontSize: 14
  },
  footerLink: { 
    color: '#333333', 
    fontWeight: '700',
    fontSize: 14,
    textDecorationLine: 'underline'
  }
});

export default LoginScreen;