
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextType {
  showVerifyModal: (email: string) => void;
  hideVerifyModal: () => void;
  isModalVisible: boolean;
  modalEmail: string;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalEmail, setModalEmail] = useState('');

  const showVerifyModal = (email: string) => {
    setModalEmail(email);
    setIsModalVisible(true);
  };

  const hideVerifyModal = () => {
    setIsModalVisible(false);
    setModalEmail('');
  };

  const value = {
    showVerifyModal,
    hideVerifyModal,
    isModalVisible,
    modalEmail,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
