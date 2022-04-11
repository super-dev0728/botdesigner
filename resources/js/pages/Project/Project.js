import React, { Fragment, useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { Table } from 'reactstrap';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { getProjects } from '../../Redux/actions/project'

import './Project.css';

import TopSearch from '../../components/Layout/TopSearch' 
import Breadcrumbs from '../../components/Layout/Breadcrumbs'
import ProjectItem from '../../components/Project/ProjectItem'
import ProjectStatisticsModal from '../../components/Project/ProjectStatisticsModal';
import NoProjects from '../../components/Project/NoProjects';

import NewProjectModal from '../../components/Project/NewProjectModal';
import Spinner from '../../components/Layout/Spinner';

const Project = ({getProjects, project: { projects, loading }}) => {
	useEffect(() => {
		getProjects();
	}, [getProjects]);

  const [add_modal, setAddModal] = useState(false);
  const toggleAddModal = () => setAddModal(!add_modal);

	const [statistics_modal, setStatisticsModal] = useState(false);
  const toggleStatisticsModal = () => setStatisticsModal(!statistics_modal);

	const [selected_id, setProjectId] = useState(0);
	const setId = (id) => setProjectId(id);
	var selected_project = projects.filter((project) => (project.id === selected_id))[0];

  return (
    <Fragment>
			<section className="project-list">
				<Breadcrumbs />
				<TopSearch />
				<div className="project-items">
					<div className="table-responsive">
						<Table borderless>
							<thead>
								<tr>
									<th>Name/ID/Description</th>
									<th>Frequency</th>
									<th>Status</th>
									<th>Statistics</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{ loading ? ( 
										<Spinner/>
										// <h1>Loading...</h1>
									) : ( projects.length === 0 ? (
											<Fragment>
												<NoProjects toggle={toggleAddModal}/>
												<NewProjectModal isOpen={add_modal} toggle={toggleAddModal} />
											</Fragment>
										) : (
											<Fragment>
												{projects.map((project, id) => (
													<Fragment>
														<ProjectItem key={id} {...project} toggle={toggleStatisticsModal} setId={setId} />
													</Fragment>
												))}
												<ProjectStatisticsModal isOpen={statistics_modal} toggle={toggleStatisticsModal} {...selected_project}/>
											</Fragment>	
										)
									)
								}
							</tbody>
						</Table>
					</div>
				</div>

				<div className="pagination-block">
					<nav aria-label="Page navigation example">
						<ul class="pagination">
							<li class="page-item"><Link class="page-link" to="#"><span data-tip="First page">&laquo;</span> Previous</Link></li>
							<li class="page-item active"><Link class="page-link" to="#">1</Link></li>
							<li class="page-item"><Link class="page-link" to="#">2</Link></li>
							<li class="page-item"><Link class="page-link" to="#">3</Link></li>
							<li class="page-item"><Link class="page-link" to="#">4</Link></li>
							<li class="page-item"><Link class="page-link" to="#">5</Link></li>
							<li class="page-item"><Link class="page-link" to="#">Next <span data-tip="Last page">&raquo;</span></Link></li>
						</ul>
						<ReactTooltip/>
						<ReactTooltip/>
					</nav>
				</div>
			</section>

			{/* <ProjectStatisticsModal isOpen={statistic_modal} toggle={toggleStatisticModal}/> */}

			

			

    </Fragment> 
  );
}

Project.propTypes = {
	getProjects: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProjects })(Project);