import { pb } from '$/pocketbase';
import type { WorkoutsResponse } from '$/types/pocketbase';

export const load = async function ({ params }) {
	const workout = await pb.collection('workouts').getOne<WorkoutsResponse>(params.id);
	return {
		workout,
	};
};
