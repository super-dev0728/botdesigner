import React from 'react';
import { Container} from 'reactstrap';
import {Link} from "react-router-dom";

import './header.css';

import Logo from '../../images/logo.png'
import ReactTooltip from 'react-tooltip';
import Icon1 from '../../images/icon1.svg'
import Icon2 from '../../images/icon2.svg'
import Icon3 from '../../images/icon3.svg'

function Header() {
  return (
		<>
			<header className="header">
				<Container>
					<div className="logo">
            <Link to="/">
              <img src={Logo} alt="WebRobot" className="logoImg"  />
            </Link>
						<ul className="header-right">
							<li>
                <Link to="/#0">
                  <img src={Icon1} alt="Icon" />
                </Link>
							</li>
							<li>
                <Link to="/self-service-home" data-tip="Login">
                  <img src={Icon2} alt="Icon" />
                </Link>
								<ReactTooltip />
							</li>
							<li>
                <Link to="/#0" data-tip="Signup">
                  <img src={Icon3} alt="Icon" />
                </Link>
								<ReactTooltip />
							</li>
						</ul>
					</div>
					
				</Container>
			</header>
			
		</>
	);
}
export default Header;
