import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { BiUserCircle } from 'react-icons/bi';
import borderError from '../../../helpers/borderError';
import showErrorMessage from '../../../helpers/showErrorMessage';
import useHandleBlurAndFocus from '../../../hooks/useHandleBlurAndFocus';
import theme from '../../../styles/theme';
import { ProfileInfo } from '../types';
import profileSchema from '../validation/schema';
import AvatarRadioGroup from './AvatarRadioGroup';

const UsernameInput = () => {
	const initialValues: ProfileInfo = {
		username: ''
	};
	const { handleFocusUser, handleBlurUser, focus } = useHandleBlurAndFocus({
		username: false
	});
	const onSubmit = (values: ProfileInfo) => {
		console.log(values);
	};
	const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
		useFormik({
			initialValues: initialValues,
			validationSchema: profileSchema,
			onSubmit
		});
	return (
		<form
			onSubmit={handleSubmit}
			style={{
				marginTop: '8px',
				backgroundColor: theme.colors.primaryBGShade,
				padding: '8px',
				borderRadius: '16px',
				marginBottom: '56px'
			}}
		>
			<InputGroup color='white'>
				<InputLeftElement
					mt='1'
					pointerEvents='none'
					color={focus.username ? 'primaryYellow' : 'secondaryColor'}
				>
					<BiUserCircle />
				</InputLeftElement>
				<Input
					type='text'
					name='username'
					placeholder='Nombre de usuario'
					value={values.username}
					focusBorderColor='primaryYellow'
					mt='1'
					borderColor={borderError({ prop: 'username', errors, touched })}
					onChange={handleChange}
					onBlur={e => {
						handleBlur(e);
						handleBlurUser(e);
					}}
					onFocus={handleFocusUser}
				/>
			</InputGroup>
			{showErrorMessage({ prop: 'username', errors, touched, focus })}
			<AvatarRadioGroup />
			<Button
				w='100%'
				type='submit'
				bg='primaryYellow'
				color='black'
				marginBottom={'10px'}
			>
				Guardar
			</Button>
		</form>
	);
};

export default UsernameInput;
