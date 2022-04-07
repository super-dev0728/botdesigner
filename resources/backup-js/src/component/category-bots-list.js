import '../App.css';
import '../component/categories-bots-list.css';
import React from 'react';
import InnerHeader from '../component/InnerHeader'
import TopSearch from '../component/top-serarch' 
import { Table } from 'reactstrap';
import Breadcrumbs from '../component/breadcrumbs'
import ReactTooltip from 'react-tooltip';
import {Link} from "react-router-dom";
import icon27 from '../images/icon27.svg';
import icon28 from '../images/icon28.svg';
import icon29 from '../images/icon29.svg';
import icon30 from '../images/icon30.svg';

function categoryBotsList(props) {
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
						<li class="page-item"><a class="page-link" href="#"><span data-tip="First page">&laquo;</span> Previous</a></li>
						<li class="page-item active"><a class="page-link" href="#">1</a></li>
						<li class="page-item"><a class="page-link" href="#">2</a></li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item"><a class="page-link" href="#">4</a></li>
						<li class="page-item"><a class="page-link" href="#">5</a></li>
						<li class="page-item"><a class="page-link" href="#">Next <span data-tip="Last page">&raquo;</span></a></li>
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