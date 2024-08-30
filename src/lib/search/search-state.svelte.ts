import type { Tree } from './search';

export function create_search() {
	let status: 'SEARCHING' | 'IDLE' = $state('IDLE');
	let query: string = $state('');
	let results: Tree[] = $state([]);
	$inspect(results);

	return {
		get status() {
			return status;
		},
		set status(new_status: 'SEARCHING' | 'IDLE') {
			status = new_status;
		},
		get query() {
			return query;
		},
		set query(new_query: string) {
			query = new_query;
		},
		get results() {
			return results;
		},
		set results(new_results: Tree[]) {
			results = [...new_results];
		},
	};
}
export type SearchState = ReturnType<typeof create_search>;
