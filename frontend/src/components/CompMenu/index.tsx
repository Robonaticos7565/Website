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
import DriveTeam from '../../assets/images/DriveTeam.jpg';

const CompMenu: React.FC = () => {

    const [active, setActive] = useState(true);

    const toggleActive = () => {
        setActive(!active);
    }

    return (
        <Container
            active={active}
        >
            <Content>
                <NavBar active={active}>
                    <Exit active={active}> <ExitContent /> </Exit>
                    <ImgContainer active={active}>
                        <div onClick={toggleActive} className="imgContent">
                            <img src={FRCLogo} alt="FIRST Robotics Competition" />
                        </div>
                        <div onClick={toggleActive} className="imgContent">
                            <img src={FLLLogo} alt="FIRST Lego League" />
                        </div>
                        <div onClick={toggleActive} className="imgContent">
                            <img src={OBRLogo} alt="Olímpiada Brasileira de Robótica" />
                        </div>
                        <div onClick={toggleActive} className="imgContent">
                            <img src={WROLogo} alt="World Robotics Competition" />
                        </div>
                    </ImgContainer>
                </NavBar>
                <Comp active={active}>
                    <CompText>
                        <CompDesc
                            textAlign='center'
                        >Combinando a emoção do esporte com os rigores da ciência e da tecnologia, chamamos a <Underline>FIRST Robotics Competition (FRC)</Underline> o melhor esporte para a mente. Os participantes do ensino médio chamam de "a diversão mais difícil que você já teve".</CompDesc>
                        <Button2
                            fontSize='25px'
                        >Saiba mais!</Button2>
                    </CompText>
                    <CompData>
                        <CompNumbers>
                            <CompNumbersContent>
                                <CompNumber
                                    textAlign='center'
                                >2</CompNumber>
                                <CompDesc
                                    textAlign='center'
                                ><Underline>Prêmios</Underline></CompDesc>
                            </CompNumbersContent>
                            <CompNumbersContent>
                                <CompNumber
                                    textAlign='center'
                                >2</CompNumber>
                                <CompDesc
                                    textAlign='center'
                                ><Underline>Anos de Participação</Underline></CompDesc>
                            </CompNumbersContent>
                        </CompNumbers>
                        <CompImg>
                            <CompImgContent src={DriveTeam} />
                        </CompImg>
                    </CompData>
                </Comp>
            </Content>
        </Container>
    );
}

export default CompMenu