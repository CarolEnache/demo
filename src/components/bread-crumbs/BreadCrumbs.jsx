import React from 'react';
import { Count, Title } from './styledComponents';

const BreadCrumbs = ({ props = {} }) => {
  const { sectionCategory, categoryView = [] } = props;
  return (
    <div>
      <Title>{sectionCategory}</Title>
      <Count>{categoryView.length} items</Count>
    </div>
  );
};

export default BreadCrumbs;
