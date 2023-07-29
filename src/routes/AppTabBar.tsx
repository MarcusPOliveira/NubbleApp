import React from 'react'
import { ViewStyle } from 'react-native'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import {
  Box,
  BoxProps,
  Icon,
  Text,
  TextProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components'
import { useAppSafeArea } from '@hooks'

import { AppTabBottomParamList } from './AppTab.routes'
import { mapScreenToProps } from './mapScreenToProps'

const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowOffset: { width: 0, height: -3 },
  shadowOpacity: 0.05,
  shadowColor: '#000',
  shadowRadius: 12,
}

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea()

  return (
    <Box {...$boxWrapper} style={[{ paddingBottom: bottom }, $shadowProps]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomParamList]

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: route.params,
            })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacityBox
            {...$itemWrapper}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
              color={isFocused ? 'primary' : 'backgroundContrast'}
            />
            <Text
              {...$label}
              color={isFocused ? 'primary' : 'backgroundContrast'}
            >
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        )
      })}
    </Box>
  )
}

const $boxWrapper: BoxProps = {
  flexDirection: 'row',
  paddingTop: 's12',
  backgroundColor: 'background',
}

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 0.8,
  accessibilityRole: 'button',
  flex: 1,
  alignItems: 'center',
}

const $label: TextProps = {
  semiBold: true,
  marginTop: 's4',
  preset: 'paragraphCaption',
  mt: 's4',
}
