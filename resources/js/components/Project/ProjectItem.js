import React, {useState} from 'react'
import {Link} from "react-router-dom";
import ReactTooltip from 'react-tooltip';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProject } from '../../Redux/actions/project';

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


const ProjectItem = (props) => {
  const onDelete = (e) => {
    e.preventDefault();
    deleteProject(props.id);
  }

  const openStatisticsModal = (e) => {
    e.preventDefault();
    props.setId(props.id);
    props.toggle();
  }

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

	const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  const imgUrl = "../../../images/item1.jpg";

  return (
    <tr>
      <td>
        <div className="left-content">
          <ImageBlock url={imgUrl}/>
          <div className="item-info">
            <h6>{props.name}</h6>
            <span className="item-id">ID# {props.id}</span>
            <p>{props.description}</p>
            <Link to={"/projects/" + props.id + "/bots"} data-tip="Click here or on the title to see the list of bots and datasets">Project details</Link>
            <ReactTooltip />
          </div>
        </div>
      </td>
      <td>
        <span className="blue-btn">
          {
            {
              '1': "One-Time",
              '2': "Hourly",
              '3': "Daily",
              '4': "Weekly",
              '5': "Biweekly",
              '6': "Monthly",
            }[props.frequency]
          }
        </span>
      </td>
      <td>
        {
          {
            '1': <span className="gray-btn">Empty</span>,
            '2': <span className="gray-btn">In progress</span>,
            '3': <span className="gray-btn">Paused</span>,
            '4': <span className="gray-btn">Completely</span>,
            '5': <span className="gray-btn">Scheduled</span>,
          }[props.status]
        }
      </td>
      <td>
        <span className="projectInfoBtn" onClick={(e) => openStatisticsModal(e)}><img data-tip="Click to see project info: creation date, latest extraction, scheduled start &amp; end date, nr. scrapers, nr. data sets, nr. records this month." src={Img1} alt="Img" /></span>
        <ReactTooltip />
      </td>
      <td>
        <div className="action-group">
          <Link to="/#0">
            <img src={icon25} alt="icon25" />
          </Link>
          <Link to="/#0">
            <img src={icon26} alt="icon26" />
          </Link>
          <Link to="/#0">
            <img src={icon27} alt="icon27" />
          </Link>
          <button onClick={(e) => onDelete(e)}>
            <img src={icon28} alt="icon28" />
          </button>
          <br/>
          <span className="hover-tool">
            <img src={icon29} alt="icon29" />
            <div className="action-option">
              <span data-tip="It opens the import /associate bot modal" >Export project data sets</span>
              <span data-tip="It opens the 'New Scraper' tab">Export project bots/scrapers</span>
              <ReactTooltip />
              <ReactTooltip />
            </div>
          </span>
          <Link data-tip="Duplicate" to="/#0">
            <img src={icon30} alt="icon30" />
            <ReactTooltip />
          </Link>
          <span onClick={toggle1}  data-tip="Import bots/scrapers (without datasets)">
            <img src={icon31} alt="icon31" />
            <ReactTooltip />
          </span>
          <span className="hover-tool">
            <img src={icon32} alt="icon32" />
            <div className="action-option">
              <span onClick={toggle2} data-tip="It opens the import /associate bot modal" >Existing bots/scrapers</span>
              <span data-tip="It opens the 'New Scraper' tab">New bots/scrapers</span>
              <ReactTooltip />
              <ReactTooltip />
            </div>
          </span>
        </div>
      </td>
    </tr>
    
  )
}

export default ProjectItem;