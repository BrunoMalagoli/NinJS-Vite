import React from 'react';
import './matrix.styles.css';
const Matrix = () => {
	return (
		<div id='matrix'>
			<div className='d1 c1 de' style={{ left: '5px' }}>
				q8w<span>1</span>ertyuioklsdfgh<span>j</span>zxc
			</div>
			<div className='d3 f1' style={{ left: '30px' }}>
				hgd4ldhbc9kpugccsr<span>q</span>
			</div>
			<div className='d1 f2 c1' style={{ left: '60px' }}>
				tr<span>z</span>ews0yfkldf4cvgbhj<span>n</span>
			</div>
			<div className='d2 f1' style={{ left: '80px' }}>
				sodhr49wh<span>u</span>yfbsrnlepjh
			</div>
			<div className='d4 c3 de' style={{ left: '110px' }}>
				fue73<span>s</span>jf0tbkxpowf<span>v</span>n
			</div>
		</div>
	);
};

export default Matrix;
