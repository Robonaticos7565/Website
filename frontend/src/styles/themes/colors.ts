export default {
    mainYellow: '#F7C01F',
    gray33: '#333333',
    gray54: '#545454',
    white: '#FFFFFF',
    whiteF0: '#F0F0F0',
    black: '#000000',
}

export interface ColorsPropsBackground {
    primary: string;
    secondary: string;
    tertiary: string;
    error: string;
}

export interface ColorsPropsText {
    primary: string;
    secondary: string;
    tertiary: string;
    fourth: string;
    disabled: string;
    white: string;
}

export type ButtonColorsScheme = {
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
}

export interface ColorsPropsButton {
    def: ButtonColorsScheme;
}

export interface ColorsProps {
    background: ColorsPropsBackground;
    text: ColorsPropsText;
    button: ColorsPropsButton;
}

// General export for components
export type ColorsBackgroundOptions = keyof ColorsPropsBackground;

export type ColorsTextOptions = keyof ColorsPropsText;

export type ColorsButtonOptions = keyof ColorsPropsButton;

export function hex2rgb(hex: string, opacity: Number) {
    var h = hex.replace('#', '') as any;
    h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));

    for (var i = 0; i < h.length; i++)
        h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);

    if (typeof opacity != 'undefined') h.push(opacity);

    return 'rgba(' + h.join(',') + ')';
}