export default {
    spacing: {
        none: 0,
        xxxSmall: 2,
        xxSmall: 6,
        xSmall: 10,
        small: 14,
        medium: 18,
        large: 24,
        xLarge: 30,
        xxLarge: 36,
        xxxLarge: 42,
        xxxxLarge: 48,
        ultraLarge: 62,
    },
    borderRadius: {
        xxSmall: 4,
        xSmall: 6,
        small: 12,
        medium: 16,
    },
    button: {
        font: 30,
        height: 70,
    },
    input: {
        font: 25,
        height: 45,
    },
};

export interface UnitPropsSpacing {
    none: number;
    xxxSmall: number;
    xxSmall: number;
    xSmall: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
    xxLarge: number;
    xxxLarge: number;
    xxxxLarge: number;
    ultraLarge: number;
};

export interface UnitPropsBorder {
    xxSmall: number;
    xSmall: number;
    small: number;
    medium: number;
};

export interface UnitPropsButton {
    font: number;
    height: number;
};

export interface UnitPropsInput {
    font: number;
    height: number;
};

export type UnitsBorderRadiusOptions = keyof UnitPropsBorder;

export type UnitsSpacingOptions = keyof UnitPropsSpacing;

export type UnitsButtonOptions = keyof UnitPropsButton;

export type UnitsInputOptions = keyof UnitPropsInput;

export interface UnitsProps {
    spacing: UnitPropsSpacing;
    borderRadius: UnitPropsBorder;
    button: UnitPropsButton;
    input: UnitPropsInput;
};
