import styled from 'styled-components'
import colors from '../../res/colors';

const DescDef = styled.h2`
    font-family: 'Roboto Bold';
    color: ${colors.gray33};
    text-align: ${props => props.align};
    word-wrap: wrap;
    margin-bottom: 35px;
`;

export const Desc = styled(DescDef)`
    font-size: 35px;
    letter-spacing: 0.01em;
`;

export const SubDesc = styled(DescDef)`
    font-size: 30px;
`;

export const CompDesc = styled(DescDef)`
    font-size: 28px;
`;

export const Underline = styled.span`
    position: relative;
    z-index: 0;
    display: inline!important;
    
    font-family: 'Roboto Bold';
    &:after {
        content: "";
        position: absolute;
        bottom: 11%;
        left: 6%;
        z-index: -1;
        width: 95%;
        overflow: hidden;
        height: 40%;
        background-color: ${props => props.color || colors.mainYellow};
        transition: .5s;
    }
`;