import logo from '../../assets/logo.png';
import styles from './index.module.scss';

export const AppLogo = () => {
  return <img src={logo} className={styles.logo} />;
};
