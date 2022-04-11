import React from 'react'
import { Row, Col, Table, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

import Img_1 from '../../../images/img-1.png';



const ProjectStatisticsModal = (props) => {
	// console.log(props);

	// const [statistic_modal, setStatisticModal] = useState(isOpen);
  // const toggleStatisticModal = () => setStatisticModal(!statistic_modal);

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} className="modalWrap project-static">
			<ModalHeader>
				<span className="modalTitle">Project Statistics</span>
				<span className="closeButton" onClick={props.toggle}></span>
			</ModalHeader>          
			<ModalBody>
				<div className="modalBodyContent">
					<div className="modalBodyTop">
						<h6>{props.name}</h6>
						<span>ID# {props.id}</span>
						<div className="img-block">
							<img src={Img_1} alt="Item" />
						</div>
					</div>
					<div className="modalBottomContent">
						<Row>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Creation date</h5>
									</div>
									<div className="card-block-body">
										<span>{props.start_date} <span className="font-42">{props.start_date}</span></span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Latest extraction</h5>
									</div>
									<div className="card-block-body">
										<span>{props.latest_extraction} <span className="font-42">{props.latest_extraction}</span></span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>End date</h5>
									</div>
									<div className="card-block-body">
										<span>{props.end_date} <span className="font-42">{props.end_date}</span></span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Nr. bots/scrapers</h5>
									</div>
									<div className="card-block-body">
										<span>{props.nr_bots}</span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Data sets created</h5>
									</div>
									<div className="card-block-body">
										<span>{props.nr_dataset_created}</span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Records extracted <span>( current month )</span></h5>
									</div>
									<div className="card-block-body">
										<span>{props.nr_records_extracted}</span>
									</div>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</ModalBody>
		</Modal>
  )
}

export default ProjectStatisticsModal;
