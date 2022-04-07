
import React from 'react';
import { Table } from 'reactstrap';
import ReactTooltip from 'react-tooltip';
import {Link} from "react-router-dom";

import './CategoriesBotsList.css';

import Breadcrumbs from '../Layout/Breadcrumbs'
import InnerHeader from '../Layout/InnerHeader'
import TopSearch from '../Layout/TopSearch' 

import icon27 from '../../images/icon27.svg';
import icon28 from '../../images/icon28.svg';
import icon29 from '../../images/icon29.svg';
import icon30 from '../../images/icon30.svg';

function categoryBotsList() {
  return (
    <>
    <InnerHeader/>
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
								<th>Project</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td width="160">
									<div className="left-content">
										<div className="left-content-inner">
                      <h6>KCOM Colourpage</h6>  
                      <span>ID# 0000033</span>
                    </div>										
									</div>
								</td>
                <td>
                  <span>Here, you can read the description of your extraction bot/scraper. It can consist of a short sentence or a few paragraphs that help you identify the objective, data source, type of records and elements to extract.</span>
                </td>
                <td>
									<span>Not associated</span>
								</td>								
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
                    <Link data-tip="Duplicate" to="#0">
											<img src={icon30} alt="icon30" />
											<ReactTooltip />
										</Link>
										<Link to="/#0" data-tip="Export bot/scraper without data sets">
											<img src={icon29} alt="icon29" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>									
									</div>
								</td>
							</tr>
							<tr>
								<td width="160">
									<div className="left-content">
										<div className="left-content-inner">
                      <h6>KCOM Colourpage</h6>  
                      <span>ID# 0000033</span>
                    </div>										
									</div>
								</td>
                <td>
                  <span>Here, you can read the description of your extraction bot/scraper. It can consist of a short sentence or a few paragraphs that help you identify the objective, data source, type of records and elements to extract.</span>
                </td>
                <td>
									<span>Not associated</span>
								</td>								
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
                    <Link data-tip="Duplicate" to="#0">
											<img src={icon30} alt="icon30" />
											<ReactTooltip />
										</Link>
										<Link to="/#0" data-tip="Export bot/scraper without data sets">
											<img src={icon29} alt="icon29" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>									
									</div>
								</td>
							</tr>
							<tr>
								<td width="160">
									<div className="left-content">
										<div className="left-content-inner">
                      <h6>KCOM Colourpage</h6>  
                      <span>ID# 0000033</span>
                    </div>										
									</div>
								</td>
                <td>
                  <span>Here, you can read the description of your extraction bot/scraper. It can consist of a short sentence or a few paragraphs that help you identify the objective, data source, type of records and elements to extract.</span>
                </td>
                <td>
									<span>Not associated</span>
								</td>								
								<td>
									<div className="action-group">
										<Link to="/#0">
											<img src={icon27} alt="icon27" />
										</Link>
                    <Link data-tip="Duplicate" to="#0">
											<img src={icon30} alt="icon30" />
											<ReactTooltip />
										</Link>
										<Link to="/#0" data-tip="Export bot/scraper without data sets">
											<img src={icon29} alt="icon29" />
											<ReactTooltip />
										</Link>
										<Link to="/#0">
											<img src={icon28} alt="icon28" />
										</Link>									
									</div>
								</td>
							</tr>
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
    
    </>    
  );
}
export default categoryBotsList;