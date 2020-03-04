import React from 'react';
import classes from './Communities.module.scss';
import { CommunitiesInterface } from '../../models/communities';
import { Community } from './community/Community';
import { useAppData } from '../../hooks/useAppData';

export const Communities = () => {
  const { state } = useAppData();

  return (
    <>
      <section className={classes.community}>
        {state.communities !== undefined
          ? state.communities.map((item: CommunitiesInterface) => (
              <Community
                id={item.id}
                name={item.name}
                imgUrl={item.imgUrl}
                group={item.group}
                key={item.id}
              />
            ))
          : null}
      </section>
    </>
  );
};
