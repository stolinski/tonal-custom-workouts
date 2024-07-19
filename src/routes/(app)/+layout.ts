import { pb } from '$/pocketbase';
import type { UsersResponse, WorkoutsResponse } from '$/types/pocketbase';

export const load = async function ({ depends }) {
	depends('app:user');
	depends('app:workouts');

	let workouts: WorkoutsResponse[] | undefined = await pb
		.collection('workouts')
		.getFullList<WorkoutsResponse>({
			sort: '-created',
		});

	return {
		workouts,
		user: pb.authStore.isValid ? (pb.authStore.model as UsersResponse) : undefined,
	};
};
