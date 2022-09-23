import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import React, { useState } from 'react';
import isNavBarOpenOrNot from './NavBarContext';

const NavBarContextProvider = ({ children }: { children: ReactJSXElement }) => {
	const [isOpenNavBar, setIsOpenNavBar] = useState(true);
	return (
		<isNavBarOpenOrNot.Provider value={{ isOpenNavBar, setIsOpenNavBar }}>
			{children}
		</isNavBarOpenOrNot.Provider>
	);
};

export default NavBarContextProvider;
