import { pb } from '$/pocketbase';
import type { WorkoutsResponse } from '$/types/pocketbase';

interface Block {
	breadcrumbs: string[];
	content: string;
	href: string;
}

export async function content() {
	const blocks: (Block & WorkoutsResponse)[] = [];
	const workouts = await pb.collection('workouts').getFullList<WorkoutsResponse>({
		sort: '-created',
	});

	workouts.forEach((workout) => {
		blocks.push({
			breadcrumbs: [workout.name],
			content: workout.description,
			href: `/workout/${workout.id}`,
			...workout,
		});
	});
	return blocks;
}
