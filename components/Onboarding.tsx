import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, Image } from 'react-native';
import { COLORS } from '../constants/Colors';
import SocialButton from './SocialButton';

interface OnboardingProps {
  onComplete: () => void;
}

const onboardingSteps = [
  {
    title: 'Borderless shopping now in your pocket',
    buttonText: 'Continue',
    showArrow: true,
    background: require('../assets/images/onboarding-bg-1.png')
  },
  {
    title: 'Shop whatever, whenever you want it',
    buttonText: 'Start Shopping',
    showArrow: false,
    background: require('../assets/images/onboarding-bg-2.png')
  }
];

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < onboardingSteps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const currentStep = onboardingSteps[step];

  return (
    <ImageBackground
      source={currentStep.background}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topContainer}>
          <View style={styles.logoWrapper}>
            <Image 
              source={require('../assets/images/azany_logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.title}>{currentStep.title}</Text>
          
          <View style={styles.dotsContainer}>
            {onboardingSteps.map((_, index) => (
              <View 
                key={index} 
                style={[
                  styles.dot, 
                  index === step && styles.dotActive
                ]} 
              />
            ))}
          </View>

          <TouchableOpacity onPress={handleNext} style={styles.button}>
            <Text style={styles.buttonText}>
              {currentStep.buttonText}
              {currentStep.showArrow && ' →'}
            </Text>
          </TouchableOpacity>

          {step === 1 && (
            <View style={styles.socialContainer}>
              <SocialButton provider="google" transparent/>
              <SocialButton provider="apple" transparent/>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { 
    flex: 1 
  },
  overlay: { 
    ...StyleSheet.absoluteFillObject, 
    
  },
  safeArea: { 
    flex: 1, 
    justifyContent: 'space-between', 
    padding: 20,
    paddingBottom: 32
  },
  topContainer: {
    paddingTop: 8
  },
  logoWrapper: { 
    backgroundColor: COLORS.white,
    borderRadius: 20, 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  logo: {
    width: 60,
    height: 20
  },
  bottomContainer: { 
    alignItems: 'center',
    paddingHorizontal: 4
  },
  title: { 
    color: COLORS.white, 
    fontSize: 32, 
    fontWeight: '700', 
    textAlign: 'center', 
    marginBottom: 24,
    lineHeight: 40,
    letterSpacing: -0.5
  },
  dotsContainer: { 
    flexDirection: 'row', 
    gap: 8, 
    marginBottom: 32
  },
  dot: { 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    backgroundColor: 'rgba(255,255,255,0.4)' 
  },
  dotActive: { 
    width: 32, 
    backgroundColor: COLORS.white 
  },
  button: { 
    borderWidth: 1.5, 
    borderColor: COLORS.white, 
    borderRadius: 8, 
    paddingVertical: 16, 
    alignItems: 'center', 
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.05)'
  },
  buttonText: { 
    color: COLORS.white, 
    fontSize: 16, 
    fontWeight: '600',
    letterSpacing: 0.3
  },
  socialContainer: { 
    flexDirection: 'row', 
    gap: 12, 
    marginTop: 16, 
    width: '100%' 
  },
});

export default Onboarding;