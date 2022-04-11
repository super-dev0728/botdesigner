import React from 'react'
import {Link} from "react-router-dom";
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

import uploadIcon from '../../../images/Upload-Icon.svg'


function ImportModal(props) {

  const options = [
		{ label: 'KCOM Colourpages UK', value: 1},
		{ label: 'Yellow Pages Spain', value: 2},
		{ label: 'Comments on G20 Twitter', value: 3},
		{ label: 'Walmart Smart TVs', value: 4},
		{ label: 'Opinions on Jesus "catholicforum.com"', value: 5},
		{ label: 'Smart TVs on Amazon.it', value: 6},
  ];

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} className="modalWrap existing-bot">
      <ModalHeader>
        <span className="closeButton" onClick={props.toggle}></span>
        <span className="modalTitle">Import or Associate Existing Bots/Scrapers to the<span>Extraction Project<span className="blue-text">"Smart TVs price comparison"</span></span></span>			
      </ModalHeader>          
      <ModalBody>
        <div className="modalBodyContent">
        <Form>
          <FormGroup>
          <Label>Import extraction bots/scrapers<span>Select one or more bots from your computer</span></Label>                  
          <span className="uploadIcon">
            <Input type="file" />
            <img src={uploadIcon} alt="Upload" />
          </span>
          </FormGroup>
          <FormGroup>
          <Label>Associate an existing bot/scraper:<span>Select one or ore bots from the dropdown list</span></Label>                  
          <div className="multi-select-box">
            <div className="search-box">
              <Label><Input type="checkbox" />Select all</Label>
              <div className="searchInput">
                <span className="search-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-2x"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" class=""></path></svg>
                </span>
                <Input type="text" placeholder="Search bot/scraper"  />
                <span className="close-icon">
                  <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-times-circle fa-w-16 fa-2x"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" class=""></path></svg>
                </span>
              </div>
            </div>
            <ReactMultiSelectCheckboxes options={options} />
          </div>
          </FormGroup>
          <div className="btn-block">
          <Link to="#0" onClick={props.toggle}>CANCEL</Link>
          <Link to="/projects/:id/bots" className="style-two">SAVE</Link>
          </div>
          
        </Form>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ImportModal