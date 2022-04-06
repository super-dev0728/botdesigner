import '../App.css';
import '../component/new-project.css';
import React, {useState} from 'react';
import InnerHeader from '../component/InnerHeader'
import TopSearch from '../component/top-serarch' 
import {Link} from "react-router-dom";
import { Form, FormGroup, Input, Label, Modal, ModalHeader, Table, ModalBody   } from 'reactstrap';
import Icon20Hover from '../images/icon20-hover.svg'
import uplaodIcon from '../images/Upload-Icon.svg'


function NewCat(props) {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  return (
    <>
    
    <InnerHeader/>
    <section className="newProject">
      <TopSearch />   
      <div className="project-items">
      <div className="table-responsive">
          <Table borderless>
            <thead>
              <tr>
                <th>Name/ID/Description</th>
								<th>Creation date</th>
								<th>Nr. bots/scrapers</th>
								<th>Actions</th>
							</tr>
						</thead>
          </Table>
        </div>
        <div className="newProjectWrap">            
          <h3>You are almost done! Now create your ﬁrst extraction project.</h3>
          <Form>
            <FormGroup className="newFile">
              <Label for="file">
                <span onClick={toggle}>
                  <span>
                    <img src={Icon20Hover} alt="Icon18Hover" />
                  </span>
                  {/* <Input id="file" type="file"  /> */}
                  <span className="input-text">NEW CATEGORY</span>
                </span>
              </Label>
            </FormGroup>
          </Form>
        </div>
        </div>
    </section>


    <Modal isOpen={modal} toggle={toggle} className="modalWrap header-modal">
      <ModalHeader>
        <span className="modalTitle">New Category - Creation Panel</span>
        <span className="closeButton" onClick={toggle}></span>
      </ModalHeader>          
      <ModalBody>
        <div className="modalBodyContent">
          <Form>
            <FormGroup>
              <Label>Category name:</Label>                  
              <Input placeholder="Write your category name here" type="text" />
            </FormGroup>
            <FormGroup>
              <Label>Description:</Label>                  
              <Input placeholder="Write a brief description of your category here" type="textarea" />
            </FormGroup>
            <FormGroup>
              <Label>Upload image:</Label>                  
              <span className="uploadIcon">
                <Input type="file" />
                <img src={uplaodIcon} alt="Upload" />
              </span>
            </FormGroup>
            <div className="btn-block">
              <Link to="#0" onClick={toggle}>CANCEL</Link>
              <Link to="/categories-list" className="style-two">SAVE</Link>
            </div>
          </Form>
        </div>
      </ModalBody>
    </Modal>
    
    </>
    
  );
}

export default NewCat;