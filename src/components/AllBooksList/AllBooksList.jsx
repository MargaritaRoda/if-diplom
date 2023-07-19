import React from 'react';
import { Loader } from '../Loader';
import { AllBooksItem } from '../AllBooksItem';

export const AllBooksList = ({ items, isLoading, numberOfBooks }) => {
  if (isLoading) {
    return <Loader text="Loading" />;
  }

  if (!items.length) {
    return <Loader text="Loading" />;
  }

  return (
    <>
      {items
        .map((item) => (
          <AllBooksItem
            src={item.imageUrl}
            ratio="ratio"
            title={item.name}
            subTitle={`by ${item.author}`}
            key={item.id}
            {...item}
          />
        ))
        .slice(0, numberOfBooks)}
    </>
  );
};
AllBooksList.defaultProps = {
  items: [],
};
