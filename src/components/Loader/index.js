import React from 'react';
import { ReactSVG } from 'react-svg';
import GithubLogo from '../../assets/svg/github.svg';
import './styles.scss';

const Loader = () => (
	<div className="loader">
		<ReactSVG src={GithubLogo}/>
	</div>
);

export default Loader;
