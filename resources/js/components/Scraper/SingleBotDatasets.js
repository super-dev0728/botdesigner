import React, {useState} from 'react';
import ReactTooltip from 'react-tooltip';
import {Link} from "react-router-dom";
import { Table, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';

import '../Project/ProjectBotsList.css';

import InnerHeader from '../Layout/InnerHeader'
import TopSearch from '../Layout/TopSearch' 
import Breadcrumbs from '../Layout/Breadcrumbs'
import Img1 from '../../images/img1.svg';
import icon28 from '../../images/icon28.svg';
import icon36 from '../../images/icon36.svg';
import downloadIcon from '../../images/downloadIcon.png';
import shareIcon from '../../images/shareIcon.png';
import blueDownload from '../../images/blueDownload.png';
import eyeIcon from '../../images/eyeIconNew.png';

function ProjectList() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  return (
    <>    
			<InnerHeader/>
			
			<section className="project-list singal-bot-datasets">
				<Breadcrumbs />
				<TopSearch />
				<div className="project-items">
					<div className="table-responsive">
						<Table borderless>
							<thead>
								<tr>
									<th>Extraction date</th>
									<th>Nr. of Records</th>
									<th>Statistics</th>
									<th>URLs List</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td width="160">
										<div className="left-content">
											<div className="left-content-inner">
												<h6>20 September, 2021</h6>  
												<span>ID# 0000033</span>
											</div>										
										</div>
									</td>
									<td>
										<span>10,870</span>
									</td>
									<td>
										<img onClick={toggle1} data-tip="Click to see the data set info: processing time, website, nr. processed URLs, failed Urls" src={Img1} alt="Img" />
										<ReactTooltip />
									</td>
									<td>
										<img onClick={toggle} data-tip="Click to see the list of processed URLs" src={icon36} alt="Img" />
										<ReactTooltip />
									</td>								
									<td>
										<div className="action-group">
											<Link to="/#0">
												<img src={blueDownload} alt="blueDownload" />
											</Link>										
											<Link to="/#0">
												<img src={shareIcon} alt="shareIcon" />
											</Link>                    
											<Link to="/#0">
												<img src={icon28} alt="icon28" />
											</Link>
										</div>
									</td>
								</tr>
								<tr>
									<td width="160">
										<div className="left-content">
											<div className="left-content-inner">
												<h6>20 September, 2021</h6>  
												<span>ID# 0000033</span>
											</div>										
										</div>
									</td>
									<td>
										<span>10,870</span>
									</td>
									<td>
										<img onClick={toggle1} data-tip="Click to see the data set info: processing time, website, nr. processed URLs, failed Urls" src={Img1} alt="Img" />
										<ReactTooltip />
									</td>
									<td>
										<img onClick={toggle} data-tip="Click to see the list of processed URLs" src={icon36} alt="Img" />
										<ReactTooltip />
									</td>							
									<td>
										<div className="action-group">
											<Link to="/#0">
												<img src={blueDownload} alt="blueDownload" />
											</Link>										
											<Link to="/#0">
												<img src={shareIcon} alt="shareIcon" />
											</Link>                    
											<Link to="/#0">
												<img src={icon28} alt="icon28" />
											</Link>
										</div>
									</td>
								</tr>
								<tr>
									<td width="160">
										<div className="left-content">
											<div className="left-content-inner">
												<h6>20 September, 2021</h6>  
												<span>ID# 0000033</span>
											</div>										
										</div>
									</td>
									<td>
										<span>10,870</span>
									</td>
									<td>
										<img onClick={toggle1} data-tip="Click to see the data set info: processing time, website, nr. processed URLs, failed Urls" src={Img1} alt="Img" />
										<ReactTooltip />
									</td>
									<td>
										<img onClick={toggle} data-tip="Click to see the list of processed URLs" src={icon36} alt="Img" />
										<ReactTooltip />
									</td>							
									<td>
										<div className="action-group">
											<Link to="/#0">
												<img src={blueDownload} alt="blueDownload" />
											</Link>										
											<Link to="/#0">
												<img src={shareIcon} alt="shareIcon" />
											</Link>                    
											<Link to="/#0">
												<img src={icon28} alt="icon28" />
											</Link>
										</div>
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</div>
				
				<div className="pagination-block">
					<nav aria-label="Page navigation example">
						<ul class="pagination">
							<li class="page-item"><Link class="page-link" to="#"><span data-tip="First page">&laquo;</span> Previous</Link></li>
							<li class="page-item active"><Link class="page-link" to="#">1</Link></li>
							<li class="page-item"><Link class="page-link" to="#">2</Link></li>
							<li class="page-item"><Link class="page-link" to="#">3</Link></li>
							<li class="page-item"><Link class="page-link" to="#">4</Link></li>
							<li class="page-item"><Link class="page-link" to="#">5</Link></li>
							<li class="page-item"><Link class="page-link" to="#">Next <span data-tip="Last page">&raquo;</span></Link></li>
						</ul>
						<ReactTooltip/>
						<ReactTooltip/>
					</nav>
				</div>
			</section>

			<Modal isOpen={modal} toggle={toggle} className="modalWrap processed-url-block">
				<ModalHeader>
					<span className="modalTitle">Data Set's Processed URLs</span>
					<span className="closeButton" onClick={toggle}></span>
				</ModalHeader>          
				<ModalBody>
					<div className="modalBodyContent">
						<div className="processed-url">
							<span><strong>Full list of processed URLs</strong> - click on it to open the web page</span>
							<div className="all-url">
								<Link to="#0">https://www.walmart.com/ip/TCL-55-4K-UHD-HDR-Smart-Roku-TV-55S21/942865257?athbdg=L1800</Link>
								<Link to="#0">https://www.walmart.com/ip/SAMSUNG-65-Class-4K-Crystal-UHD-2160P-LED-Smart-TV-with-HDR-UN65TU7000/933852540?athbdg=L1800</Link>
								<Link to="#0">https://www.walmart.com/ip/LG-65-Class-4K-UHD-Smart-OLED-C1-Series-TV-with-AI-ThinQ-OLED65C1PUB/604778663</Link>
								<Link to="#0">https://www.walmart.com/ip/RCA-43-Class-4K-Ultra-HD-2160P-HDR-Roku-Smart-LED-TV-RTRU4327-US/778783528?athbdg=L1800</Link>
								<Link to="#0">https://www.walmart.com/ip/TCL-50-Class-5-Series-4K-UHD-Dolby-Vision-HDR-QLED-Roku-Smart-TV-50S535/601890304</Link>
								<Link to="#0">https://www.walmart.com/ip/TCL-55-Class-4-Series-4K-UHD-HDR-Roku-Smart-TV-55S431/276964903</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-65-Class-4k-UHD-LED-SmartCast-Smart-TV-HDR-V-Series-V655-J/292825097</Link>
								<Link to="#0">https://www.walmart.com/ip/Hisense-58-Class-4K-UHD-HDR-Roku-Smart-TV-58R6E3/587182688</Link>
								<Link to="#0">https://www.walmart.com/ip/SAMSUNG-55-Class-4K-2160P-The-Frame-QLED-Smart-TV-QN55LS03-2021/367278180?athbdg=L1700</Link>
								<Link to="#0">https://www.walmart.com/ip/onn-32-Class-HD-720P-LED-Roku-Smart-TV-100012589/314022535?athbdg=L1200</Link>
								<Link to="#0">https://www.walmart.com/ip/SAMSUNG-55-Class-4K-Crystal-UHD-2160P-LED-Smart-TV-with-HDR-UN55TU7000/415975527</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-32-Class-HD-Smart-TV-D-Series-D32h-J/109704020</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-40-Class-FHD-LED-Smart-TV-D-Series-D40f-J/223245823</Link>
								<Link to="#0">https://www.walmart.com/ip/TCL-32-Class-720P-HD-LED-Roku-Smart-TV-3-Series-32S331/721539264</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-50-Class-4K-UHD-LED-SmartCast-Smart-TV-V-Series-V505-J/378837297</Link>
								<Link to="#0">https://www.walmart.com/ip/LG-55-Class-4K-UHD-2160P-Smart-TV-55UN6955ZUF/458853572</Link>
								<Link to="#0">https://www.walmart.com/ip/SAMSUNG-65-Class-4K-Crystal-UHD-2160P-LED-Smart-TV-with-HDR-UN65TU7000/933852540?athbdg=L1800</Link>
								<Link to="#0">https://www.walmart.com/ip/LG-65-Class-4K-UHD-Smart-OLED-C1-Series-TV-with-AI-ThinQ-OLED65C1PUB/604778663</Link>
								<Link to="#0">https://www.walmart.com/ip/RCA-43-Class-4K-Ultra-HD-2160P-HDR-Roku-Smart-LED-TV-RTRU4327-US/778783528?athbdg=L1800</Link>
								<Link to="#0">https://www.walmart.com/ip/TCL-50-Class-5-Series-4K-UHD-Dolby-Vision-HDR-QLED-Roku-Smart-TV-50S535/601890304</Link>
								<Link to="#0">https://www.walmart.com/ip/TCL-55-Class-4-Series-4K-UHD-HDR-Roku-Smart-TV-55S431/276964903</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-65-Class-4k-UHD-LED-SmartCast-Smart-TV-HDR-V-Series-V655-J/292825097</Link>
								<Link to="#0">https://www.walmart.com/ip/Hisense-58-Class-4K-UHD-HDR-Roku-Smart-TV-58R6E3/587182688</Link>
								<Link to="#0">https://www.walmart.com/ip/SAMSUNG-55-Class-4K-2160P-The-Frame-QLED-Smart-TV-QN55LS03-2021/367278180?athbdg=L1700</Link>
								<Link to="#0">https://www.walmart.com/ip/onn-32-Class-HD-720P-LED-Roku-Smart-TV-100012589/314022535?athbdg=L1200</Link>
								<Link to="#0">https://www.walmart.com/ip/SAMSUNG-55-Class-4K-Crystal-UHD-2160P-LED-Smart-TV-with-HDR-UN55TU7000/415975527</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-32-Class-HD-Smart-TV-D-Series-D32h-J/109704020</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-40-Class-FHD-LED-Smart-TV-D-Series-D40f-J/223245823</Link>
								<Link to="#0">https://www.walmart.com/ip/TCL-32-Class-720P-HD-LED-Roku-Smart-TV-3-Series-32S331/721539264</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-50-Class-4K-UHD-LED-SmartCast-Smart-TV-V-Series-V505-J/378837297</Link>
								<Link to="#0">https://www.walmart.com/ip/LG-55-Class-4K-UHD-2160P-Smart-TV-55UN6955ZUF/458853572</Link>
								<Link to="#0">https://www.walmart.com/ip/SAMSUNG-65-Class-4K-Crystal-UHD-2160P-LED-Smart-TV-with-HDR-UN65TU7000/933852540?athbdg=L1800</Link>
								<Link to="#0">https://www.walmart.com/ip/LG-65-Class-4K-UHD-Smart-OLED-C1-Series-TV-with-AI-ThinQ-OLED65C1PUB/604778663</Link>
								<Link to="#0">https://www.walmart.com/ip/RCA-43-Class-4K-Ultra-HD-2160P-HDR-Roku-Smart-LED-TV-RTRU4327-US/778783528?athbdg=L1800</Link>
								<Link to="#0">https://www.walmart.com/ip/TCL-50-Class-5-Series-4K-UHD-Dolby-Vision-HDR-QLED-Roku-Smart-TV-50S535/601890304</Link>
								<Link to="#0">https://www.walmart.com/ip/TCL-55-Class-4-Series-4K-UHD-HDR-Roku-Smart-TV-55S431/276964903</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-65-Class-4k-UHD-LED-SmartCast-Smart-TV-HDR-V-Series-V655-J/292825097</Link>
								<Link to="#0">https://www.walmart.com/ip/Hisense-58-Class-4K-UHD-HDR-Roku-Smart-TV-58R6E3/587182688</Link>
								<Link to="#0">https://www.walmart.com/ip/SAMSUNG-55-Class-4K-2160P-The-Frame-QLED-Smart-TV-QN55LS03-2021/367278180?athbdg=L1700</Link>
								<Link to="#0">https://www.walmart.com/ip/onn-32-Class-HD-720P-LED-Roku-Smart-TV-100012589/314022535?athbdg=L1200</Link>
								<Link to="#0">https://www.walmart.com/ip/SAMSUNG-55-Class-4K-Crystal-UHD-2160P-LED-Smart-TV-with-HDR-UN55TU7000/415975527</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-32-Class-HD-Smart-TV-D-Series-D32h-J/109704020</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-40-Class-FHD-LED-Smart-TV-D-Series-D40f-J/223245823</Link>
								<Link to="#0">https://www.walmart.com/ip/TCL-32-Class-720P-HD-LED-Roku-Smart-TV-3-Series-32S331/721539264</Link>
								<Link to="#0">https://www.walmart.com/ip/VIZIO-50-Class-4K-UHD-LED-SmartCast-Smart-TV-V-Series-V505-J/378837297</Link>              
							</div>
							
						</div>
						<div className="btn-block">
									<Link to="#0" className="downloadIcon"><img src={downloadIcon} alt="img"/></Link>
									<Link to="#0" onClick={toggle}>Close</Link>
								</div>
					</div>
				</ModalBody>
			</Modal>
			
			<Modal isOpen={modal1} toggle={toggle1} className="modalWrap project-static">
				<ModalHeader>
					<span className="modalTitle">Data Set Statistics</span>
					<span className="closeButton" onClick={toggle1}></span>
				</ModalHeader>          
				<ModalBody>
					<div className="modalBodyContent">
						<div className="modalBodyTop">
							<h6>20 September, 2021</h6>
							<span>ID# 0000033</span>
						</div>
						<div className="modalBottomContent">
							<Row>
								<Col sm="6">
									<div className="card-block">
										<div className="card-block-header">
											<h5>Processing time</h5>
										</div>
										<div className="card-block-body">
											<span>00:05:27</span>
										</div>
									</div>
								</Col>
								<Col sm="6">
									<div className="card-block">
										<div className="card-block-header">
											<h5>Website</h5>
										</div>
										<div className="card-block-body">
											<span><Link to="#0">Walmart.com</Link></span>
										</div>
									</div>
								</Col>
								<Col sm="6">
									<div className="card-block">
										<div className="card-block-header">
											<h5>Processed URLs</h5>
										</div>
										<div className="card-block-body">
											<span>250</span>
										</div>
									</div>
								</Col>
								<Col sm="6">
									<div className="card-block">
										<div className="card-block-header">
											<h5>Failed URLs</h5>
										</div>
										<div className="card-block-body">
											<span>12</span>
											<span className="bottom-text"><img src={eyeIcon} alt="img" />Viewe error log</span>
										</div>
									</div>
								</Col>
							</Row>            
						</div>
						<div className="btn-block">
								<Link to="#0" onClick={toggle1}>Close</Link>
							</div>
					</div>
				</ModalBody>
			</Modal>
    
    </>    
  );
}
export default ProjectList;