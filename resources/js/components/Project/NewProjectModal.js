import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import DatePicker from "react-multi-date-picker"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProject } from '../../Redux/actions/project';

import uploadIcon from '../../../images/Upload-Icon.svg'
import icon37 from '../../../images/icon37.svg'

const NewProjectModal = ({
  isOpen,
  toggleAddModal,
  addProject,
  history
}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    frequency: '',
    img: '',
    start_date: '2022-04-12',
    end_date: '2022-04-13'
  });

  const { name, description, frequency, img, start_date, end_date } = formData;

  const onChange = (e) => 
    setFormData({...formData, [e.target.name]: e.target.value });    

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [values, setValues] = useState([today, tomorrow]);

  const saveProject = (e) => {
    e.preventDefault();
    addProject(formData, history)
      .then(toggleAddModal())
      .catch((err) => alert(err));
  };

  return (
    <Modal isOpen={isOpen} toggle={toggleAddModal} className="modalWrap new-project">
      <ModalHeader>
        <span className="modalTitle">New Extraction Project - Creation Panel</span>
        <span className="closeButton" onClick={toggleAddModal}></span>
      </ModalHeader>          
      <ModalBody>
        <div className="modalBodyContent">
          <Form>
            <FormGroup>
              <Label>Project name:</Label>                  
              <Input
                type="text"
                placeholder="Write your extration project name here"  
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Description:</Label>                  
              <Input
                type="text"
                placeholder="Write a brief description of your extration project here"
                name="description"
                value={description}
                onChange={(e) => onChange(e)} 
              />
            </FormGroup>
            <FormGroup>
              <Label>Upload image:</Label>                  
              <span className="uploadIcon">
                <Input
                  type="file"
                  value={img}
                  onChange={(e) => onChange(e)}
                />
                <img src={uploadIcon} alt="Upload" />
              </span>
            </FormGroup>
            <FormGroup>
              <div className="form-group-inner">
                <Label>Extraction frequency:</Label>                  
                <Input
                  type="select"
                  id="exampleSelectMulti"
                  name="frequency"
                  value={frequency}
                  onChange={(e) => onChange(e)}
                >
                  <option value={1}>One-Time</option>
                  <option value={2}>Hourly</option>
                  <option value={3}>Daily</option>
                  <option value={4}>Weekly</option>
                  <option value={5}>Biweekly</option>
                  <option value={6}>Monthly</option>
                </Input>
              </div>
              <div className="form-group-inner">
                <Label>Schedule start and end date:<span>(only start date for one-time extraction)</span></Label> 
                <span className="date-picker">
                  <img multiple value={values}  onChange={setValues} src={icon37} alt="Planner" />
                  <DatePicker />
                </span>                 
                
              </div>
            </FormGroup>
            <div className="btn-block">
              <Link to="#0" onClick={toggleAddModal}>CANCEL</Link>
              <Link to="#" onClick={(e) => saveProject(e)} className="style-two">SAVE</Link>
            </div>
          </Form>
        </div>
      </ModalBody>
    </Modal>
  )
}

NewProjectModal.propTypes = {
	addProject: PropTypes.func.isRequired
};

export default connect(null, { addProject })(withRouter(NewProjectModal));
