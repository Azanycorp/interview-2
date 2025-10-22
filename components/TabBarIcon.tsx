import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../constants/Colors';

interface TabBarIconProps {
  name: 'marketplace' | 'wishlist' | 'orders' | 'profile';
  focused: boolean;
}

const HomeIcon = ({ color }: { color: string }) => (
  <Svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} height={24} width={24}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </Svg>
);

const HeartIcon = ({ color }: { color: string }) => (
  <Svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} height={24} width={24}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </Svg>
);

const PackageIcon = ({ color }: { color: string }) => (
  <Svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} height={24} width={24}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </Svg>
);

const UserIcon = ({ color }: { color: string }) => (
  <Svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} height={24} width={24}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </Svg>
);

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused }) => {
  const color = focused ? COLORS.primary : COLORS.textSecondary;

  switch (name) {
    case 'marketplace':
      return <HomeIcon color={color} />;
    case 'wishlist':
      return <HeartIcon color={color} />;
    case 'orders':
      return <PackageIcon color={color} />;
    case 'profile':
      return <UserIcon color={color} />;
    default:
      return null;
  }
};

export default TabBarIcon;