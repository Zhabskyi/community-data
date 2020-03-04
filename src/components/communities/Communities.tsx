import React from 'react';
import classes from './Communities.module.scss';
import { CommunitiesInterface } from '../../models/communities';
import { Community } from './community/Community';
import { useAppData } from '../../hooks/useAppData';
import { Spinner } from '../spinner/Spinner';

export const Communities = () => {
  const { state } = useAppData();

  return (
    <>
      <section className={classes.community}>
        {state.communities !== undefined && !state.loading ? (
          state.communities.map((item: CommunitiesInterface) => (
            <Community
              state={state}
              id={item.id}
              name={item.name}
              imgUrl={item.imgUrl}
              group={item.group}
              key={item.id}
            />
          ))
        ) : (
          <div className={classes.spinner_container}>
            <Spinner />
          </div>
        )}
      </section>
    </>
  );
};
