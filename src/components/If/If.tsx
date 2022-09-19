import { Children, cloneElement, FC, ReactElement } from 'react';
import { IfProps, BodyProps } from './types';

const If: FC<IfProps> = ({ children, predicate }): any => {
	return Children.map(children, (child: ReactElement) => {
		return cloneElement(child, { predicate });
	});
};

const Then: FC<BodyProps> = ({ children, predicate }) => {
	return predicate ? <>{children}</> : <></>;
};

const Else: FC<BodyProps> = ({ children, predicate }) => {
	return !predicate ? <>{children}</> : <></>;
};

export { If, Then, Else };
