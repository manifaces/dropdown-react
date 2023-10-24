import React, { useState } from 'react';

import { DropdownHeadline } from '../DropdownHeadline/DropdownHeadline';
import { DropdownContent } from '../DropdownContent/DropdownContent';
import { data } from '../../data';

import s from './Dropdown.module.scss';

export type ValuesI = {
  text: string;
  id: string;
}

export const Dropdown = () => {
  const tabs = data.map(_ => _.tab);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [values, setValues] = useState<Array<ValuesI>>([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleTags = (id: string, value: string) => {
    const currentValue = values?.filter(_ => _.id === id);

    if (currentValue.length) {
      const newValues = values?.filter(_ => _.id !== id);
      setValues(newValues);
    } else {
      const newValues = [...values, {
        id: id,
        text: value,
      }
      ];
      setValues(newValues);
    }
  };

  return (
    <div className={s.Dropdown}>
      <DropdownHeadline 
        tabs={tabs} 
        tags={values} 
        caption="Локация" 
        toggleDropdown={toggleDropdown} 
        isShow={showDropdown} 
      />
      <DropdownContent 
        tabs={tabs} 
        tags={values} 
        data={data} 
        toggleTags={toggleTags} 
        isShow={showDropdown} 
      />
    </div>
  );
};