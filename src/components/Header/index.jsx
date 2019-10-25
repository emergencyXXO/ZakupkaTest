import React from 'react';
import cls from './style.module.scss';

function Header(props) {
	return (
		<header>
			<div className="container">
				<div className={`line ${cls.line}`}>
					<div className="left">
						<div
							className={cls.logo}
							style={{
								backgroundImage: 'url(https://www.freeiconspng.com/uploads/flame-logo-png-30.png)',
							}}
						/>
						<p className={cls.header}>ZakupkaTest</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
