import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { Route } from '@react-navigation/native';
declare type Props = {
    route: Route<string>;
    horizontal: boolean;
    badge?: string | number;
    badgeStyle?: StyleProp<TextStyle>;
    activeOpacity: number;
    inactiveOpacity: number;
    activeTintColor: string;
    inactiveTintColor: string;
    renderIcon: (props: {
        focused: boolean;
        color: string;
        size: number;
    }) => React.ReactNode;
    style: StyleProp<ViewStyle>;
    focused: boolean;
};
export default function AnimationTabBarIcon({ horizontal, badge, badgeStyle, activeOpacity, activeTintColor, renderIcon, style, focused, }: Props): JSX.Element;
export {};
