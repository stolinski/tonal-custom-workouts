import { pb } from '$/pocketbase';
import type { UsersResponse, WorkoutsResponse } from '$/types/pocketbase';

export const load = async function ({ depends }) {
	depends('app:user');

	return {
		user: pb.authStore.isValid ? (pb.authStore.model as UsersResponse) : undefined,
	};
};
