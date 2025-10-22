import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../constants/Colors';

interface TabBarIconProps {
  name: 'marketplace' | 'wishlist' | 'orders' | 'profile';
  focused: boolean;
}

const UserIcon = ({ color }: { color: string }) => (
  <Svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={color} height={28} width={28}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </Svg>
);

const ShoppingBagIcon = ({ color }: { color: string }) => (
  <Svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={color} height={28} width={28}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </Svg>
);

const ListIcon = ({ color }: { color: string }) => (
  <Svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={color} height={28} width={28}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </Svg>
);

const StarIcon = ({ color }: { color: string }) => (
  <Svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={color} height={28} width={28}>
    <Path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </Svg>
);

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused }) => {
  const color = focused ? COLORS.primary : COLORS.textSecondary;

  switch (name) {
    case 'profile':
      return <UserIcon color={color} />;
    case 'marketplace':
      return <ShoppingBagIcon color={color} />;
    case 'orders':
      return <ListIcon color={color} />;
    case 'wishlist':
      return <StarIcon color={color} />;
    default:
      return null;
  }
};

export default TabBarIcon;