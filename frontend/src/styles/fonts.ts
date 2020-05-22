export default {
    robotoRegular: 'Roboto Regular',
    robotoMedium: 'Roboto Medium',
    robotoBold: 'Roboto Bold',
    robotoBlack: 'Roboto Black',
    montserratLight: 'Montserrat Light',
    montserratMedium: 'Montserrat Medium',
};

export interface FontsProps {
    robotoRegular: string;
    robotoMedium: string,
    robotoBold: string, 
    robotoBlack: string,
    montserratLight: string,
    montserratMedium: string,
};

export type TextOptions = keyof FontsProps;
