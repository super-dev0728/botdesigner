import React, {useState} from 'react';
import DatePicker from "react-multi-date-picker"
import {Link} from "react-router-dom";
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody  } from 'reactstrap';

import './NewProject.css';

import InnerHeader from '../Layout/InnerHeader'
import TopSearch from '../Layout/TopSearch'

import Icon18Hover from '../../images/icon18-hover.svg'
import uplaodIcon from '../../images/Upload-Icon.svg'
import icon37 from '../../images/icon37.svg'

function NewProject() {

  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([today, tomorrow])

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  return (
    <>
      <InnerHeader/>
      <section className="newProject">
        <TopSearch />      
          <div className="newProjectWrap">            
            <h3>You are almost done! Now create your ﬁrst extraction project.</h3>
            <Form>
              <FormGroup className="newFile">
                <Label for="file">
                  <span onClick={toggle}>
                    <span>
                      <img src={Icon18Hover} alt="Icon18Hover" />                    
                    </span>
                  {/* <Input id="file" type="file"  /> */}
                    <span className="input-text">New Project</span>
                  </span>
                </Label>
              </FormGroup>
            </Form>
          </div>
      </section>

      <Modal isOpen={modal} toggle={toggle} className="modalWrap new-project">
        <ModalHeader>
          <span className="modalTitle">New Extraction Project - Creation Panel</span>
          <span className="closeButton" onClick={toggle}></span>
        </ModalHeader>          
        <ModalBody>
          <div className="modalBodyContent">
            <Form>
              <FormGroup>
                <Label>Project name:</Label>                  
                <Input placeholder="Write your extration project name here" type="email" />
              </FormGroup>
              <FormGroup>
                <Label>Description:</Label>                  
                <Input placeholder="Write a brief description of your extration project here" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label>Upload image:</Label>                  
                <span className="uploadIcon">
                  <Input type="file" />
                  <img src={uplaodIcon} alt="Upload" />
                </span>
              </FormGroup>
              <FormGroup>
                <div className="form-group-inner">
                  <Label>Extraction frequency:</Label>                  
                  <Input id="exampleSelectMulti"  name="selectMulti" type="select">
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
                <Link to="/project-list" className="style-two">SAVE</Link>
              </div>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    
    </>
    
  );
}

export default NewProject;