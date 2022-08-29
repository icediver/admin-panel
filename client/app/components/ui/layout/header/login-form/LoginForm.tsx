import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegUserCircle } from 'react-icons/fa';

import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';

import { menuAnimation } from '@/utils/animation/fade';

import styles from './LoginForm.module.scss';
import { validEmail } from './login-auth.constants';
import { IAuthFields } from './login-form.interface';
import Button from '@/ui/button/Button';
import Field from '@/ui/field/Field';
import UserAvatar from '@/ui/user-avatar/UserAvatar';

const LoginForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false);

	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IAuthFields>({
		mode: 'onChange'
	});

	const { user, setUser } = useAuth();

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (type === 'login')
			setUser({
				id: 1,
				email: 'test@test.ru',
				avatarPath: '/avatar.webp',
				name: 'Art Dev'
			});
		// else if (type === 'register') registerSync(data);
		reset();
		setIsShow(false);
	};

	return (
		<div className={styles.wrapper} ref={ref}>
			{user ? (
				<UserAvatar
					link='/dashboard'
					title='Перейти в админку'
					avatarPath={user.avatarPath || ''}
				/>
			) : (
				<button onClick={() => setIsShow(!isShow)} className={styles.button}>
					<FaRegUserCircle />
				</button>
			)}

			<motion.div animate={isShow ? 'open' : 'closed'} variants={menuAnimation}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address'
							}
						})}
						placeholder='Email'
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should more 6 symbols'
							}
						})}
						placeholder='Password'
						error={errors.password}
						type={'password'}
					/>
					<div className={styles.loginButton}>
						<Button onClick={() => setType('login')}>Login</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			</motion.div>
		</div>
	);
};

export default LoginForm;
