import React from 'react';

import { Tag } from '../Tag/Tag';
import { Carousel } from '../../features/Carousel/Carousel';
import { ValuesI } from '../Dropdown/Dropdown';

import s from './TagsList.module.scss';

type TagsListI = {
  list: ValuesI[];
  toggleTags: (id: string, value: string) => void;
  checkItem: (item: string) => void;
}

export const TagsList: React.FC<TagsListI> = ({ list, toggleTags, checkItem }) => {
  return (
    <div className={s.TagsList}>
      <Carousel
        slidesPerView="auto"
        spaceBetween={4}
        loop={false}
        mousewheel={true}
      >
        {list.map((_, i) => (
          <Tag key={i} text={_.text} id={_.id} toggleTags={toggleTags} checkItem={checkItem} />
        ))}
      </Carousel>
    </div>
  );
};