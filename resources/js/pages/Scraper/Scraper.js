import React, { Fragment, useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import { Table } from 'reactstrap';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { getProject } from '../../Redux/actions/project';
import { getScrapers } from '../../Redux/actions/scraper'

// import './Project.css';

import Spinner from '../../components/Layout/Spinner';
import TopSearch from '../../components/Layout/TopSearch';
import Breadcrumbs from '../../components/Layout/Breadcrumbs';

import ScraperItem from '../../components/Scraper/ScraperItem';
import ProjectStatisticsModal from '../../components/Project/ProjectStatisticsModal';
import NewProject from '../../components/Project/NewProject';
import NewProjectModal from '../../components/Project/NewProjectModal';
import ImportModal from '../../components/Project/ImportScraperModal';

const Scraper = ({getProject, getScrapers, project: { project }, scraper: { scrapers, loading }}) => {
	const projectId = useParams().id;
  useEffect(() => {
    getProject(projectId);
		getScrapers(projectId);
	}, [getProject, getScrapers, projectId]);

  const [add_modal, setAddModal] = useState(false);
  const toggleAddModal = () => setAddModal(!add_modal);

	const [statistics_modal, setStatisticsModal] = useState(false);
  const toggleStatisticsModal = () => setStatisticsModal(!statistics_modal);

	const [import_modal, setImportModal] = useState(false);
  const toggleImportModal = () => setImportModal(!import_modal);

	const [selected_id, setProjectId] = useState(0);
	const setId = (id) => setProjectId(id);
	var selected_scraper = scrapers.filter((scraper) => (scraper.id === selected_id))[0];

  return (
    <Fragment>
			<section className="project-list cat-bot-list">
				<Breadcrumbs />
				<TopSearch />
				<div className="project-items">
					<div className="table-responsive">
						<Table borderless>
							<thead>
								<tr>
                  <th>Name/ID</th>
                  <th>Description</th>
                  <th>Statistics</th>
                  <th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{ loading ? ( 
										<Spinner/>
									) : ( scrapers.length === 0 ? (
											<Fragment>
												<NewProject toggleAddModal={toggleAddModal}/>
												<NewProjectModal isOpen={add_modal} toggleAddModal={toggleAddModal} />
											</Fragment>
										) : (
											<Fragment>
												{scrapers.map((project, id) => (
													<Fragment>
														<ScraperItem
															key={id}
															project={project}
															toggleStatisticsModal={toggleStatisticsModal}
															toggleImportModal={toggleImportModal}
															setId={setId}
														/>
													</Fragment>
												))}
												<ProjectStatisticsModal isOpen={statistics_modal} toggle={toggleStatisticsModal} {...selected_scraper}/>
												<ImportModal isOpen={import_modal} toggle={toggleImportModal} {...selected_scraper}/>
											</Fragment>	
										)
									)
								}
							</tbody>
						</Table>
					</div>
				</div>
				{
					loading === false && scrapers !== null ? (
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
					) : ( 
						<Fragment></Fragment>
					)
				}
			</section>
    </Fragment> 
  );
}

Scraper.propTypes = {
  getProject: PropTypes.func.isRequired,
	getScrapers: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired,
  scraper: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  project: state.project,
  scraper: state.scraper
});

export default connect(mapStateToProps, { getProject, getScrapers })(Scraper);