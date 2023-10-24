import React, { useState, useRef, useEffect } from 'react';

import { DataI } from '../../data';

import { TabList } from '../TabList/TabList';
import { TagsList } from '../TagsList/TagsList';
import { DropdownList } from '../DropdownList/DropdownList';
import { ValuesI } from '../Dropdown/Dropdown';

import s from './DropdownContent.module.scss';

type DropdownContentI = {
  tags?: ValuesI[];
  tabs: string[];
  data: DataI;
  toggleTags: (id: string, value: string) => void;
  isShow: boolean;
}

export const DropdownContent: React.FC<DropdownContentI> = ({ tags, toggleTags, data, tabs, isShow = false }) => {
  const [list, changeList] = useState(data.map(_ => _.list));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const content = useRef<HTMLDivElement>(null);

  const openTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof HTMLElement && e.target.dataset.index) {
      setActiveIndex(+e.target.dataset.index);
    }
  };

  const checkItem = (id: string) => {
    const changedList = list.map((partList, index) => {
      const currentItem = partList?.filter(_ => _.id === id);
      if (currentItem) {
        partList.map(_ => {
          if (_.id === id) _.isSelect = !_.isSelect;
          return _;
        });
      }
      return partList;
    });
    changeList(changedList);
  };

  useEffect(() => {
    if (isShow) {
      content.current !== null && (content.current.style.maxHeight = `${content.current?.scrollHeight + 26}px`);
    } else {
      content.current !== null && (content.current.style.maxHeight = '');
    }
  }, [isShow]);

  return (
    <div className={`${s.DropdownContent} ${isShow ? s.DropdownContent_show : ''}`} ref={content} >
      <TabList list={tabs} openTab={openTab} active={activeIndex} />
      {tags && tags.length > 0 && <TagsList list={tags} toggleTags={toggleTags} checkItem={checkItem} />}
      <DropdownList list={list[activeIndex]} toggleTags={toggleTags} checkItem={checkItem} changeHeight={tags && tags.length > 0 ? true : false}/>
    </div>
  );
};