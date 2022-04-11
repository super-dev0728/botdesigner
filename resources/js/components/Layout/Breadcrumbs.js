import React from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from "react-router-dom";

import './Breadcrumbs.css';

function breadcrumbs() {
	
  return (
	<>
        <Breadcrumb>
            <BreadcrumbItem>
                <Link to="/#0">
                    <span>Project</span>
                </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link to="/#0">
                    <span>Smart TVs price comparison (ID# 0001234)</span>
                </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link to="/#0">
                    <span>Scrapers</span>
                </Link>
            </BreadcrumbItem>
        </Breadcrumb> 
    </>
  );
}

export default breadcrumbs;
