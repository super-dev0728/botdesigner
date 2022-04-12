import React from 'react'
import { Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';

import Img_1 from '../../../images/img-1.png';

const ProjectStatisticsModal = ({
	isOpen,
	toggle,
	selected_project: {
		id, name, start_date, latest_extraction, end_date, nr_bots, nr_dataset_created, nr_records_extracted
	}
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modalWrap project-static">
			<ModalHeader>
				<span className="modalTitle">Project Statistics</span>
				<span className="closeButton" onClick={toggle}></span>
			</ModalHeader>          
			<ModalBody>
				<div className="modalBodyContent">
					<div className="modalBodyTop">
						<h6>{name}</h6>
						<span>ID# {id}</span>
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
										<span>{start_date} <span className="font-42">{start_date}</span></span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Latest extraction</h5>
									</div>
									<div className="card-block-body">
										<span>{latest_extraction} <span className="font-42">{latest_extraction}</span></span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>End date</h5>
									</div>
									<div className="card-block-body">
										<span>{end_date} <span className="font-42">{end_date}</span></span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Nr. bots/scrapers</h5>
									</div>
									<div className="card-block-body">
										<span>{nr_bots}</span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Data sets created</h5>
									</div>
									<div className="card-block-body">
										<span>{nr_dataset_created}</span>
									</div>
								</div>
							</Col>
							<Col lg="4" sm="6">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Records extracted <span>( current month )</span></h5>
									</div>
									<div className="card-block-body">
										<span>{nr_records_extracted}</span>
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
