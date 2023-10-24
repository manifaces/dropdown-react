import s from './TabList.module.scss';

type TabListI = {
  list: string[];
  openTab: (e: React.MouseEvent<HTMLButtonElement>) => void;
  active: number;
}

export const TabList: React.FC<TabListI> = ({ list, openTab, active }) => {
  return (
    <div className={s.TabList}>
      {list.map((tab, index) => (
        <button 
          key={index}
          className={`${s.TabList__item} ${index === active ? s.TabList__item_active : ''}`}
          data-index={index}
          onClick={openTab}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};