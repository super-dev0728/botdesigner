import React from 'react';
import { Form, FormGroup, Label } from 'reactstrap';

import Icon18Hover from '../../../images/icon18-hover.svg'

const NoProjects = ({ toggleAddModal }) => {
  return (
    <div className="newProjectWrap">            
      <h3>You are almost done! Now create your ﬁrst extraction project.</h3>
      <Form>
        <FormGroup className="newFile">
          <Label for="file">
            <span onClick={toggleAddModal}>
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
  )
}

export default NoProjects