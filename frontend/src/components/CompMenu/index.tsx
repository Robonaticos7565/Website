import React, { useState } from 'react';

import {
    Container,
    Content,
    NavBar,
    ImgContainer,
    ExitContent,
    Exit,
    Comp,
    CompText,
    CompData,
    CompImg,
    Image,
    CompImgContent,
    CompNumbers,
    CompNumbersContent,
} from './styles';

import {
    CompDesc,
    CompNumber,
    Underline,
} from '../Text';

import { Button2 } from '../Button/styles';

import FLLLogo from '../../assets/images/FLLLogo.png';
import FRCLogo from '../../assets/images/FRCLogo.png';
import OBRLogo from '../../assets/images/OBRLogo.png';
import WROLogo from '../../assets/images/WROLogo.png';

import FRCImage from '../../assets/images/FRCImage.jpg';
import FLLImage from '../../assets/images/FLLImage.png';
import OBRImage from '../../assets/images/OBRImage.png';
import WROImage from '../../assets/images/WROImage.png';

const CompMenu: React.FC = () => {

    const [active, setActive] = useState(false);
    const [comp, setComp] = useState(0);

    const data = [
        {
            id: 1,
            competition: 'FIRST Robotics Competition',
            compImage: FRCImage,
            desc1: 'Combinando a emoção do esporte com os rigores da ciência e da tecnologia, chamamos a',
            desc2: '(FRC) o melhor esporte para a mente. Os participantes do ensino médio chamam de "a diversão mais difícil que você já teve".',
            years: 2,
            awards: 2,
            color: '#009CD7'
        },

        {
            id: 2,
            competition: 'FIRST Lego League',
            compImage: FLLImage,
            desc1: '',
            desc2: '(FLL) é a competição global de robótica mais acessível, guiada e acessível, ajudando estudantes e professores a construir um futuro melhor juntos. O programa foi desenvolvido em torno dos desafios temáticos para envolver crianças de 9 a 16 anos * em pesquisa, resolução de problemas, codificação e engenharia.',
            years: 8,
            awards: 15,
            color: '#FF747A'
        },

        {
            id: 3,
            competition: 'Olímpiada Brasileira de Robótica',
            compImage: OBRImage,
            desc1: '',
            desc2: '(OBR) tem o objetivo de estimular os jovens às carreiras científico-tecnológicas, identificar jovens talentosos e promover debates e atualizações no processo de ensino-aprendizagem brasileiro através da robótica',
            years: 6,
            awards: 5,
            color: '#84C54F'
        },

        {
            id: 4,
            competition: 'World Robotics Competition',
            compImage: WROImage,
            desc1: '',
            desc2: '(WRO) é um torneio para jovens a partir de 10 anos que celebra a ciência, tecnologia e educação, reunindo participantes de todo o mundo para desenvolver a criatividade, design e habilidades de resolução de problemas através de competições de robótica desafiadoras e educacionais.',
            years: 3,
            awards: 3,
            color: '#F7941D'
        }
    ]

    const toggleActive = (value: boolean, comp: number) => {
        setActive(value);
        setComp(comp);
    }

    return (
        <Container
            active={active}
        >
            <Content>
                <NavBar active={active}>
                    <Exit active={active} onClick={() => toggleActive(false, 0)}> <ExitContent /> </Exit>
                    <ImgContainer active={active}>
                        <div onClick={() => toggleActive(true, 1)} className="imgContent">
                            <Image
                                active={active}
                                comp={comp}
                                id='1'
                                src={FRCLogo}
                                alt="FIRST Robotics Competition"
                            />
                        </div>
                        <div onClick={() => toggleActive(true, 2)} className="imgContent">
                            <Image
                                active={active}
                                comp={comp}
                                id='2'
                                src={FLLLogo}
                                alt="FIRST Lego League"
                            />
                        </div>
                        <div onClick={() => toggleActive(true, 3)} className="imgContent">
                            <Image
                                active={active}
                                src={OBRLogo}
                                comp={comp}
                                id='3'
                                alt="Olímpiada Brasileira de Robótica"
                            />
                        </div>
                        <div onClick={() => toggleActive(true, 4)} className="imgContent">
                            <Image
                                active={active}
                                src={WROLogo}
                                comp={comp}
                                id='4'
                                alt="World Robotics Competition"
                            />
                        </div>
                    </ImgContainer>
                </NavBar>

                {data.filter(x => x.id === comp).map(element => {
                    return (
                        <Comp
                            color={element.color}
                            active={active}
                        >
                            <CompText>
                                <CompDesc
                                    textAlign='center'
                                >{element.desc1}
                                    <Underline
                                        color={element.color}
                                    > {element.competition} </Underline> {element.desc2}</CompDesc>
                                <Button2
                                    color={element.color}
                                    fontSize='25px'
                                >Saiba mais!</Button2>
                            </CompText>
                            <CompData>
                                <CompNumbers>
                                    <CompNumbersContent>
                                        <CompNumber
                                            data={String(element.awards)}
                                            color={element.color}
                                            textAlign='center'
                                        >{element.awards}</CompNumber>
                                        <CompDesc
                                            textAlign='center'
                                        ><Underline
                                            color={element.color}
                                        >Prêmios</Underline></CompDesc>
                                    </CompNumbersContent>
                                    <CompNumbersContent>
                                        <CompNumber
                                            color={element.color}
                                            textAlign='center'
                                        >{element.years}</CompNumber>
                                        <CompDesc
                                            textAlign='center'
                                        ><Underline
                                            color={element.color}
                                        >Anos de Participação</Underline></CompDesc>
                                    </CompNumbersContent>
                                </CompNumbers>
                                <CompImg>
                                    <CompImgContent src={element.compImage} />
                                </CompImg>
                            </CompData>
                        </Comp>
                    );
                })}

            </Content>
        </Container>
    );
}

export default CompMenu