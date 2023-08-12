import React from 'react';
import { Loader } from '../Loader';
import { AllBooksItem } from '../AllBooksItem';

export const AllBooksList = ({ items, isLoading }) => {
  if (isLoading) {
    return <Loader text="Loading" />;
  }

  return (
    <>
      {items.map((item) => (
        <AllBooksItem
          src={item.imageUrl}
          ratio={item.ratio}
          title={item.name}
          subTitle={`by ${item.author}`}
          key={item.id}
          {...item}
        />
      ))}
    </>
  );
};
AllBooksList.defaultProps = {
  items: [],
};
