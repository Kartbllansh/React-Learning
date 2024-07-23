import { useReducer, useState } from 'react';

const initialState = {
	name: '',
	text: '',
	rating: 5,
};

const reducer = (state, action) => {
	switch (action?.type) {
		case 'setName':
			return { ...state, name: action.payload };
		case 'setText':
			return { ...state, text: action.payload };
		case 'setRating':
			return { ...state, rating: Number(action.payload) || 5 };

		default:
			return state;
	}
};

export function NewFormMessage() {
	const [formMessage, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<div>
				<label>Name</label>
				<input
					value={formMessage.name}
					onChange={event =>
						dispatch({ type: 'setName', payload: event.target.value })
					}
				/>
			</div>
			<div>
				<label>Text</label>
				<input
					value={formMessage.text}
					onChange={event =>
						setFormMessage({ ...formMessage, text: event.target.value })
					}
				/>
			</div>
			<div>
				<label>Rating</label>
				<input
					value={formMessage.rating}
					onChange={event =>
						setFormMessage({ ...formMessage, rating: event.target.value })
					}
				/>
			</div>
		</div>
	);
}
