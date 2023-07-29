import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { AppStackParamList } from './AppStack.routes'
import { AppTabBottomParamList } from './AppTab.routes'
import { AuthStackParamList } from './AuthStack.routes'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>

export type AppTabScreenProps<RouteName extends keyof AppTabBottomParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabBottomParamList, RouteName>,
    NativeStackScreenProps<AppStackParamList, 'AppTabRoutes'>
  >
