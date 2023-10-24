import React from 'react';

import { DropdownField } from '../DropdownField/DropdownField';
import { ValuesI } from '../Dropdown/Dropdown';

import s from './DropdownHeadline.module.scss';

type DropdownHeadlineI ={
  caption: string;
  tabs: string[];
  tags?: ValuesI[];
  toggleDropdown: () => void;
  isShow: boolean;
}

export const DropdownHeadline: React.FC<DropdownHeadlineI> = ({ caption, tabs, tags, toggleDropdown, isShow }) => {
  const placeholder = tabs.join(', ');
  const counter: number | undefined = tags?.length;
  return (
    <div className={s.DropdownHeadline} >
      <p className={s.DropdownHeadline__caption}>{caption}</p>
      <DropdownField 
        placeholder={placeholder} 
        counter={counter} 
        toggleDropdown={toggleDropdown} 
        isShow={isShow} 
      />
    </div>
  );
};