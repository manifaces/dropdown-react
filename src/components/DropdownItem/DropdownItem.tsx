import React from 'react';

import { Checkbox } from '../Checkbox/Checkbox';

import s from './DropdownItem.module.scss';

type DropdownItemI = {
  text: string;
  id: string;
  isSelect: boolean;
  toggleTags: (id: string, value: string) => void;
  checkItem: (item: string) => void;
}

export const DropdownItem: React.FC<DropdownItemI> = ({ text, toggleTags, isSelect, checkItem, id }) => {
  const handleClick = () => {
    toggleTags(id, text);
    checkItem(id);
  };

  return (
    <div 
      className={s.DropdownItem}
      onClick={handleClick}
    >
      {text}
      <Checkbox isSelect={isSelect} />
    </div>
  );
};