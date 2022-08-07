/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-native-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-native-navigation/native';
import { NativeStackScreenProps } from '@react-native-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  EditProfile: undefined;
  EditProfileInfo: undefined;
  Profile: undefined;
  Modal: undefined;
  NotFound: undefined;
  Welcome: undefined;
  Home: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  // EditProfile: undefined;
  // EditProfileItem: undefined;
  Home: undefined;
  // Profile: undefined;
  Welcome: undefined;
  Login: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
