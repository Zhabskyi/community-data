import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Community.module.scss';
import { useAppData } from '../../../hooks/useAppData';
import { CommunitiesInterface } from '../../../models/communities';
import { homeAveragePrice } from '../../../utils/helpers';

export const Community = (props: CommunitiesInterface) => {
  const { id, name, imgUrl, group } = props;
  const { state } = useAppData();

  let averagePrice:number = 0;

  if (!state.loading) {
    averagePrice = homeAveragePrice(state, id);
  }

  return (
    <div className={classes.container}>
      <article className={classes.container__article}>
        <Link className={classes.link} to={`homes/${id}`}>
          <figure className={classes.container__article__figure}>
            <img
              src={imgUrl}
              alt='community'
              className={classes.container__article__figure_img}
            />
          </figure>
        </Link>
        <div className={classes.container__article__title}>
          <div className={classes.container__article__title_text}>{name}</div>
        </div>
      </article>
      <div className={classes.container__description}>
        <ul className={classes.container__description__list}>
          <li className={classes.container__description__list_item}>
            Community name: {name}
          </li>
          <li className={classes.container__description__list_item}>
            Group of the community: {group}
          </li>
          <li className={classes.container__description__list_item}>
            Average homes price:{' '}
            {averagePrice !== 0 ? `${averagePrice} $` : 'Not enough data'}
          </li>
        </ul>
      </div>
    </div>
  );
};
