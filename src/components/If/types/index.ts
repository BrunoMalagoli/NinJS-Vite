import { ReactElement } from 'react';

export type IfProps = {
	predicate: boolean;
	children: ReactElement[];
};

export type BodyProps = {
	predicate?: boolean;
	children: ReactElement;
};
