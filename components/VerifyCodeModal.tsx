
import React, { useState, useRef, createRef } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { COLORS } from '../constants/Colors';
import Svg, { Path } from 'react-native-svg';

interface VerifyCodeModalProps {
  email: string;
  isVisible: boolean;
  onVerify: () => void;
  onClose: () => void;
}

const MailIcon = (props: any) => (
  <Svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </Svg>
);

const VerifyCodeModal: React.FC<VerifyCodeModalProps> = ({ email, isVisible, onVerify, onClose }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef<TextInput[]>([]);

  const handleTextChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const isVerifyDisabled = code.join('').length !== 4;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <View style={styles.iconContainer}>
            <MailIcon height={32} width={32} stroke={COLORS.primary} />
          </View>
          <Text style={styles.title}>Please check your email.</Text>
          <Text style={styles.description}>
            We've sent a code to <Text style={styles.email}>{email}</Text>
          </Text>
          
          <View style={styles.codeInputContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref: TextInput) => (inputs.current[index] = ref)}
                style={styles.codeInput}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(text) => handleTextChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                value={digit}
              />
            ))}
          </View>
          
          <Text style={styles.resendText}>Didn't get a code? <Text style={styles.resendLink}>Click to resend.</Text></Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClose} style={[styles.button, styles.cancelButton]}>
              <Text style={[styles.buttonText, styles.cancelButtonText]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onVerify} disabled={isVerifyDisabled} style={[styles.button, styles.verifyButton, isVerifyDisabled && styles.disabledButton]}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContent: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  description: {
    color: COLORS.textSecondary,
    marginBottom: 24,
    textAlign: 'center',
  },
  email: {
    fontWeight: 'bold',
    color: COLORS.text,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 24,
  },
  codeInput: {
    width: 56,
    height: 64,
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  resendText: {
    color: COLORS.textSecondary,
    fontSize: 14,
    marginBottom: 24,
  },
  resendLink: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  verifyButton: {
    backgroundColor: COLORS.primary,
  },
  disabledButton: {
    backgroundColor: '#CCCCCC'
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButtonText: {
    color: COLORS.text,
  },
});

export default VerifyCodeModal;
