import { Dropdown } from './components/Dropdown/Dropdown';
import s from './AppDropdown.module.scss';

export const AppDropdown = () => {
  return (
    <section className={s.AppDropdown}>
      <Dropdown />
    </section>
  );
};