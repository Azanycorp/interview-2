import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/Colors';
import PasswordInput from '../../components/PasswordInput';
import SocialButton from '../../components/SocialButton';

const SignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('johndoe@email.com');

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
        
        <Text style={styles.subtitle}>WELCOME!</Text>
        <Text style={styles.title}>Let's get you started</Text>

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

          <PasswordInput label="Password" />
          
          <PasswordInput label="Retype Password" />
          
          <Text style={styles.hintText}>
            Password Hint: Your password must include at least 1 capital letter and 1 number
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
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
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.footerLink}>LOGIN HERE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    paddingTop:16,
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
  hintText: { 
    fontSize: 11, 
    color: '#666666', 
    marginTop: 8,
    marginBottom: 16,
    lineHeight: 16
  },
  button: { 
    backgroundColor: '#1D4F1E', 
    paddingVertical: 16, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 8 
  },
  buttonText: { 
    color: COLORS.white, 
    fontWeight: '600', 
    fontSize: 16,
    letterSpacing: 0.3
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
    color: '#1D4F1E', 
    fontWeight: '700',
    fontSize: 14,
    textDecorationLine: 'underline'
  }
});

export default SignUpScreen;