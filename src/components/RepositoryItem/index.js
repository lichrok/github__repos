import React from 'react';
import { Link } from 'react-router-dom';
import {ReactSVG} from 'react-svg';
import StarIcon from '../../assets/svg/star.svg';
import {RepositoryItemProps} from '../../types';
import './styles.scss';

function RepositoryItem({ repo }: RepositoryItemProps) {
	const {
		node: {
			name,
			descriptionHTML,
			owner: { login, avatarUrl },
			stargazers: { totalCount: totalStarCount },

		}
	} = repo;

	return (
		<article className="repository-item">
			<Link to={`/repository/${name}|${login}`} className="repository-item__title">
				{name}
			</Link>
			<p dangerouslySetInnerHTML={{__html: descriptionHTML}} />
			<div className="repository-item__footer">
				<div className="repository-item__footer-item">
					<img className="repository-item__img" src={avatarUrl} alt={login}/>
					<small>{login}</small>
				</div>
				<div className="repository-item__footer-item">
					<ReactSVG
						src={StarIcon}
						beforeInjection={svg => svg.classList.add('repository-item__icon')}
						wrapper="span"
					/>
					<small>{totalStarCount}</small>
				</div>
			</div>
		</article>
	)
}

export default RepositoryItem;
