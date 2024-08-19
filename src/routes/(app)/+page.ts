import { pb } from '$/pocketbase';
import type { WorkoutsResponse } from '$/types/pocketbase';

export const load = async function ({ url, depends }) {
	depends('app:workouts');
	const level = url.searchParams.get('level');
	const limit = parseInt(url.searchParams.get('limit') || '20');

	const queryOptions: Record<string, any> = {
		sort: '-created',
		perPage: limit,
	};

	if (level) {
		queryOptions.filter = `level = "${level}"`;
	}

	let workouts: WorkoutsResponse[] | undefined = await pb
		.collection('workouts')
		.getFullList<WorkoutsResponse>(queryOptions);

	url.searchParams.get('order');
	return {
		workouts,
		level,
	};
};
