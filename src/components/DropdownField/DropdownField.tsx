import React from 'react';

import { Counter } from '../Counter/Counter';

import s from './DropdownField.module.scss';

type DropdownFieldI = {
  placeholder: string;
  counter?: number;
  toggleDropdown: () => void;
  isShow: boolean;
}

export const DropdownField: React.FC<DropdownFieldI> = ({ placeholder, counter, toggleDropdown, isShow }) => {

  return (
    <div 
      className={
        `${s.DropdownField} 
         ${counter !== 0 ? s.DropdownField_active : ''} 
         ${isShow ? s.DropdownField_open : ''}`
      } 
      onClick={toggleDropdown}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M7.5 13C10.5376 13 13 10.5376 13 7.5C13 4.46243 10.5376 2 7.5 2C4.46243 2 2 4.46243 2 7.5C2 10.5376 4.46243 13 7.5 13Z" stroke="#080908" strokeWidth="2" strokeLinecap="square"/>
        <path d="M12 12L14 14" stroke="#080908" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className={s.DropdownField__placeholder}>{placeholder}</span>
      {counter && counter !== 0 ? (
        <Counter count={counter} />
      ) : ''} 
    </div>
  );
};
