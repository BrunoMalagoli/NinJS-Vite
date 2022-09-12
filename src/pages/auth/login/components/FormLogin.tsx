import {
	Button,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
	Stack
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useState } from 'react';

//icons
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai/';
import { MdAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

//hooks
import useHandleBlurAndFocus from '../../../../hooks/useHandleBlurAndFocus';

//helpers
import borderError from '../../../../helpers/borderError';
import showErrorMessage from '../../../../helpers/showErrorMessage';

import { useNavigate } from 'react-router-dom';
import { INITIAL_VALUES_FORM } from '../../utils/constants/initialValuesForm';
import { userLoginSchema } from '../validation/schema';

import handleErrorSweetAlert from '../utils/handleErrorSweetAlert';
import handleSuccessLogin from '../utils/handleSuccessLogin';

const Form = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const handleShowHidePassword = () => setShowPassword(!showPassword);

	const { handleFocusUser, handleBlurUser, focus } = useHandleBlurAndFocus({
		email: false,
		password: false
	});

	function onSubmit() {
		console.log('hola');
		fetch(`${import.meta.env.VITE_URL_CONECT_BACKEND}api/user/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				password: values.password,
				email: values.email
			})
		})
			.then(response => {
				if (response.ok) {
					response.json().then(data => {
						console.log(data);
						localStorage.setItem('token', data?.token);
						localStorage.setItem('username', data?.username);
						localStorage.setItem('variant', data?.variant);
						handleSuccessLogin();
						navigate('/home/', { replace: true });
					});
				} else {
					response
						.json()
						.then(a => {
							handleErrorSweetAlert(a.ErrorMessage);
							throw new Error(a.ErrorMessage);
						})
						.catch(err => {
							console.error(err);
						});
				}
			})
			.catch(err => {
				console.error(err);
			});
	}
	const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
		useFormik({
			initialValues: INITIAL_VALUES_FORM,
			validationSchema: userLoginSchema,
			onSubmit
		});

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Stack spacing={4}>
					{/* <FormControl> */}
					<InputGroup>
						<InputLeftElement
							pointerEvents='none'
							color={focus.email ? 'primaryYellow' : 'secondaryColor'}
						>
							<MdAlternateEmail />
						</InputLeftElement>
						<Input
							type='email'
							name='email'
							placeholder='Email'
							value={values.email}
							color='white'
							focusBorderColor='primaryYellow'
							borderColor={borderError({ prop: 'email', errors, touched })}
							autoComplete='off'
							onChange={handleChange}
							onBlur={e => {
								handleBlur(e);
								handleBlurUser(e);
							}}
							onFocus={handleFocusUser}
						/>
					</InputGroup>
					{showErrorMessage({ prop: 'email', errors, touched, focus })}
					{/* </FormControl> */}

					{/* <FormControl id="password"> */}
					<InputGroup>
						<InputLeftElement
							color={focus.password ? 'primaryYellow' : 'secondaryColor'}
							pointerEvents='none'
						>
							<RiLockPasswordLine />
						</InputLeftElement>

						<Input
							name='password'
							type={showPassword ? 'text' : 'password'}
							placeholder='Password'
							value={values.password}
							color='white'
							focusBorderColor='primaryYellow'
							borderColor={borderError({
								prop: 'password',
								errors,
								touched
							})}
							onChange={handleChange}
							onBlur={e => {
								handleBlur(e);
								handleBlurUser(e);
							}}
							onFocus={handleFocusUser}
						/>
						<InputRightElement>
							<Icon
								color='secondaryColor'
								as={showPassword ? AiFillEyeInvisible : AiFillEye}
								onClick={handleShowHidePassword}
							/>
						</InputRightElement>
					</InputGroup>
					{showErrorMessage({ prop: 'password', errors, touched, focus })}
					{/* </FormControl> */}

					<Link fontSize='14' textAlign={'right'} color='secondaryColor'>
						Forgot Password?
					</Link>
				</Stack>

				<Button mt={5} w='100%' type='submit' bg='primaryYellow' color='black'>
					Login
				</Button>
			</form>
		</>
	);
};

export default Form;
