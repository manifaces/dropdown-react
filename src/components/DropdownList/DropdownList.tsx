import React from 'react';
import { Scrollbar } from 'react-scrollbars-custom';

import { DropdownItem } from '../DropdownItem/DropdownItem';

import m from '../DropdownContent/DropdownContent.module.scss';

import s from './DropdownList.module.scss';

type DropdownListI = {
  list: {
    text: string;
    isSelect: boolean;
    id: string;
  }[];
  toggleTags: (id: string, value: string) => void;
  checkItem: (item: string) => void;
  changeHeight: boolean;
}

export const DropdownList: React.FC<DropdownListI> = ({ list, toggleTags, checkItem, changeHeight }) => {
  const style = {
    width: 320,
    height: changeHeight ? 256 : 288
  };

  return (
    <Scrollbar 
      style={style}
      native={false}
      trackYProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return <span {...restProps} ref={elementRef} className={m.DropdownContent__scrollbar} />;
        },
      }}
      thumbYProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return <span {...restProps} ref={elementRef} className={m.DropdownContent__thumb} />;
        },
      }}
    >
      <div className={s.DropdownList}>
        {list.map((_, i) => (
          <DropdownItem key={i} text={_.text} isSelect={_.isSelect} toggleTags={toggleTags} checkItem={checkItem} id={_.id} />
        ))}
      </div>
      
    </Scrollbar> 
    
  );
};
