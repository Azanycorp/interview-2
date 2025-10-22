import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ModalProvider, useModal } from '../context/ModalContext';
import VerifyCodeModal from '../components/VerifyCodeModal';

const AppContent: React.FC = () => {
  const { isModalVisible, hideVerifyModal, modalEmail } = useModal();
  const router = useRouter();

  const handleVerifySuccess = () => {
    hideVerifyModal();
    router.push('/reset-password');
  };

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
      </Stack>
      <VerifyCodeModal
        email={modalEmail}
        isVisible={isModalVisible}
        onVerify={handleVerifySuccess}
        onClose={hideVerifyModal}
      />
    </>
  );
};

const RootLayout: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;