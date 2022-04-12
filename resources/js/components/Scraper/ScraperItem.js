import React, {useState} from 'react'
import {Link} from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteScraper } from '../../Redux/actions/scraper';

import ImageBlock from '../Layout/ImageBlock';

import Img1 from '../../../images/img1.svg';
import icon25 from '../../../images/icon25.svg';
import icon26 from '../../../images/icon26.svg';
import icon27 from '../../../images/icon27.svg';
import icon28 from '../../../images/icon28.svg';
import icon29 from '../../../images/icon29.svg';
import icon30 from '../../../images/icon30.svg';
import icon31 from '../../../images/icon31.svg';
import icon32 from '../../../images/icon32.svg';

const ScraperItem = ({
  toggleStatisticsModal,
  setId,
  deleteScraper,
  project: { id, name, description }
}) => {
  const openStatisticsModal = (e) => {
    e.preventDefault();
    setId(id);
    toggleStatisticsModal();
  }

	const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  const imgUrl = "../../../images/item1.jpg";

  return (
    <tr>
      <td width="160">
        <div className="left-content">
          <div className="left-content-inner">
            <h6><Link to="/scraper/:id/datasets">Walmart Smart TVs</Link></h6>  
            <span>ID# 0000047</span>
          </div>										
        </div>
      </td>
      <td width="580">
        <div className="item-info">
          <p>Here, you can read the description of your extraction bot/scraper. It can consist of a short sentence or a few paragraphs that help you identify the objective, data source, type of records and elements to extract.</p>
          <Link to="/scraper/:id/datasets" data-tip="Click here or on the title to see the list of bots and datasets">Bot/scraper details/data sets</Link>
          <ReactTooltip />
        </div>
      </td>
      <td>
        <img onClick={toggle1} data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month." src={Img1} alt="Img" />
        <ReactTooltip />
      </td>
      <td>
        <div className="action-group">
          <Link to="/designer-simple-filters">
            <img src={icon27} alt="icon27" />
          </Link>
          <Link data-tip="Duplicate" to="/#0">
            <img src={icon30} alt="icon30" />
            <ReactTooltip />
          </Link>
          <Link to="#0">
            <img src={icon28} alt="icon28" />
          </Link>
          <span className="hover-tool">
            <img src={icon29} alt="icon29" />
            <div className="action-option">
              <span>Export all data sets</span>
              <span>Export latest data set</span>
              <span>Export bot/scraper only</span>
              <ReactTooltip />
              <ReactTooltip />
            </div>
          </span>
        </div>
      </td>
    </tr>
  )
}

ScraperItem.propTypes = {
	deleteScraper: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired
};

export default connect(null, { deleteScraper })(ScraperItem);
