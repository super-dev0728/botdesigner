import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DatePicker from "react-multi-date-picker"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { addProject } from '../../Redux/actions/project';

import uploadIcon from '../../../images/Upload-Icon.svg'
import icon37 from '../../../images/icon37.svg'

const NewProjectModal = ({isOpen, toggle}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    frequency: '',
    start_date: '',
    end_date: ''
  });

  var { name, description, frequency, start_date, end_date } = formData;

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const [values, setValues] = useState([today, tomorrow])

  const onSave = (e) => {
    e.preventDefault();
    frequency = {
      "One-Time": 1,
      "Hourly": 2,
      "Daily": 3,
      "Weekly": 4,
      "Biweekly": 5,
      "Monthly": 6,
    }[frequency]
    
    addProject(formData)
      .then(() => {
        alert("Succesfully Added!");
        toggle();
      })
      .catch(() => alert('Error!!!'));
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modalWrap new-project">
      <ModalHeader>
        <span className="modalTitle">New Extraction Project - Creation Panel</span>
        <span className="closeButton" onClick={toggle}></span>
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
                <Input type="file" />
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
                  <option>One-Time</option>
                  <option>Hourly</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Biweekly</option>
                  <option>Monthly</option>
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
              <Link to="#0" onClick={toggle}>CANCEL</Link>
              <Link to="#" onClick={onSave} className="style-two">SAVE</Link>
            </div>
          </Form>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default NewProjectModal
