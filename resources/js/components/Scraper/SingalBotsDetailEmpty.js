import React from 'react';
import { Table } from 'reactstrap';

import '../Project/ProjectDetailEmpty.css';

import Breadcrumbs from '../Layout/Breadcrumbs'
import InnerHeader from '../Layout/InnerHeader'
import TopSearch from '../Layout/TopSearch' 

function SingalBotsDetailEmpty() {
  return (
    <>
      <InnerHeader/>
      <section className="project-detail-empty">
        <Breadcrumbs />
        <TopSearch />
        <div className="project-items">
          <div className="table-responsive">
            <Table borderless>
              <thead>
                <tr>
                  <th>Extraction date</th>
                  <th>Nr. of Records</th>
                  <th>Statistics</th>
                  <th>URLs List</th>
                  <th>Actions</th>
                </tr>
              </thead>                       
            </Table>
            <div className="project-empty-content">
              <p>There are no data sets available yet. Your bot/scraper will start extracting data soon.</p>
            </div>
          </div>
        </div>
      </section>
    </>    
  );
}
export default SingalBotsDetailEmpty;