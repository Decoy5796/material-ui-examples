import React from 'react';

const Item = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;

  return <div>{`Item Page for pokemon #${id}`}</div>;
};

export default Item;
