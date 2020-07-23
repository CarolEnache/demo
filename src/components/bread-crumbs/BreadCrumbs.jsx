import React from 'react';

const BreadCrumbs = ({ props }) => {
  const { sectionCategory, categoryView } = props;
  return (
    <div>
      <h3>{sectionCategory}</h3>
      <p>{categoryView.length} items</p>
    </div>
  );
};

export default BreadCrumbs;
