import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';

import Img_1 from '../../../images/img-1.png';

const ScraperStatisticsModal = ({
	isOpen,
	toggle,
	selected_scraper: {
		id, name, creation_date, latest_edit, latest_dataset, nr_dataset_created, nr_total_record, nr_cur_month_record
	}
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modalWrap project-static">
			<ModalHeader>
				<span className="modalTitle">Bot/Scraper Statistics</span>
				<span className="closeButton" onClick={toggle}></span>
			</ModalHeader>          
			<ModalBody>
				<div className="modalBodyContent">
					<div className="modalBodyTop">
						<h6>{name}</h6>
						<span>ID# {id}</span>
					</div>
					<div className="modalBottomContent">
						<Row>
							<Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Creation date</h5>
									</div>
									<div className="card-block-body">
										<span>{creation_date},<br/>{creation_date}</span>
									</div>
								</div>
							</Col>
							<Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Latest edit</h5>
									</div>
									<div className="card-block-body">
										<span>{latest_edit},<br/>{latest_edit}</span>
									</div>
								</div>
							</Col>
							<Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Latest data set</h5>
									</div>
									<div className="card-block-body">
										<span>{latest_dataset},<br />{latest_dataset}</span>
									</div>
								</div>
							</Col>
							<Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Nr. data sets created</h5>
									</div>
									<div className="card-block-body">
										<span>{nr_dataset_created}</span>
									</div>
								</div>
							</Col>
              <Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Tot. records extracted</h5>
									</div>
									<div className="card-block-body">
										<span>{nr_total_record}</span>
									</div>
								</div>
							</Col>
              <Col sm="4">
								<div className="card-block">
									<div className="card-block-header">
										<h5>Nr. records<span>(current month)</span></h5>
									</div>
									<div className="card-block-body">
										<span>{nr_cur_month_record}</span>
									</div>
								</div>
							</Col>
						</Row>            
					</div>
          <div className="btn-block">
              <Link to="#0" onClick={toggle}>Close</Link>
            </div>
				</div>
			</ModalBody>
		</Modal>
  )
}

export default ScraperStatisticsModal;
