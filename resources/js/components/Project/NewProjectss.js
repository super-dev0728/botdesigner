import React, {Fragment, useState} from 'react';
import DatePicker from "react-multi-date-picker"
import {Link} from "react-router-dom";
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody  } from 'reactstrap';

import './NewProject.css';


import TopSearch from '../Layout/TopSearch'

import Icon18Hover from '../../../images/icon18-hover.svg'
import uplaodIcon from '../../../images/Upload-Icon.svg'
import icon37 from '../../../images/icon37.svg'

function NewProject() {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  return (
    <Fragment>
      
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
    
    </Fragment>
    
  );
}

export default NewProject;