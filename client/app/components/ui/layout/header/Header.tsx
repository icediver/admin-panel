import { FC } from 'react';

import styles from './Header.module.scss';
import Logo from '@/ui/layout/header/Logo';
import LoginForm from '@/ui/layout/header/login-form/LoginForm';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<LoginForm />
		</header>
	);
};

export default Header;
