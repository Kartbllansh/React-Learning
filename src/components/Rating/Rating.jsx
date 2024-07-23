import Image from 'next/image';
import BlackStar from './image/star-black.svg';
import GoldStar from './image/star-gold.svg';
import styles from './rating.module.scss';

export function Rating({ maxRating, value, className }) {
	return (
		<div className={className}>
			{/*{createRatingArray(maxRating, value).map(item => {
        item ? <GoldStar /> : <BlackStar />;
      })}*/}
			{maxRating > 0 &&
				new Array(maxRating)
					.fill(null)
					.map((_, index) => (
						<Image
							src={`/star${index >= value ? '-black' : '-gold'}.png`}
							key={index}
							alt={index >= value ? 'black' : 'gold'}
							width={32}
							height={32}
							className={styles.star}
						/>
					))}
		</div>
	);
}

function createRatingArray(maxRating, value) {
	const ratingArray = Array.from(
		{ length: maxRating },
		(_, index) => index < value
	);
	return ratingArray;
}
