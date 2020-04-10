import React from 'react';

import {
    Container,
    Content,
    NavBar,
    ImgContainer,
    Exit,
    Comp,
    ExitContent
} from './styles';

import FLLLogo from '../../assets/images/FLLLogo.png';
import FRCLogo from '../../assets/images/FRCLogo.png';
import OBRLogo from '../../assets/images/OBRLogo.png';
import WROLogo from '../../assets/images/WROLogo.png';

const CompMenu: React.FC = () => {

    const widthLogo = '100px';

    return (
        <Container>
            <Content>
                <NavBar>
                    <Exit> <ExitContent /> </Exit>
                    <ImgContainer>
                        <div className="imgContent">
                            <img src={FRCLogo} alt="FIRST Robotics Competition" />
                        </div>
                        <div className="imgContent">
                            <img src={FLLLogo} alt="FIRST Lego League" />
                        </div>
                        <div className="imgContent">
                            <img src={OBRLogo} alt="Olímpiada Brasileira de Robótica" />
                        </div>
                        <div className="imgContent">
                            <img src={WROLogo} alt="World Robotics Competition" />
                        </div>
                    </ImgContainer>
                </NavBar>
                <Comp>

                </Comp>
            </Content>
        </Container>
    );
}

export default CompMenu