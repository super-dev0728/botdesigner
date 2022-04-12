import React, { Fragment, useState } from 'react'

import NewProject from '../../components/Project/NewProject';
import NewProjectModal from '../../components/Project/NewProjectModal';


const NewProjectPage = () => {

  const [add_modal, setAddModal] = useState(false);
  const toggleAddModal = () => setAddModal(!add_modal);

  return (
    <section className="project-list">
			<div className="project-items">

        <Fragment>
          <NewProject toggleAddModal={toggleAddModal}/>
          <NewProjectModal isOpen={add_modal} toggleAddModal={toggleAddModal} />
        </Fragment>
      </div>
    </section>
  )
}

export default NewProjectPage;