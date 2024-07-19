<script lang="ts">
	import { pb } from '$/pocketbase';
	import type { WorkoutsRecord } from '$/types/pocketbase';

	let form_data = $state({
		name: '',
		link: '',
		group: 'full_body' as 'full_body' | 'lower_body' | 'upper_body',
		length: 0,
		description: '',
		user: pb.authStore.model?.id,
	});

	function create_workout(e: Event) {
		e.preventDefault();
		console.log(form_data);
		pb.collection('workouts').create<WorkoutsRecord>(form_data);
	}
</script>

<h1>Add your workout</h1>

<form onsubmit={create_workout}>
	<div>
		<label for="name">Name</label>
		<input type="text" name="name" id="name" bind:value={form_data.name} />
	</div>
	<div>
		<label for="link">Link</label>
		<input type="text" name="link" id="link" bind:value={form_data.link} />
	</div>
	<div>
		<label for="group">Group</label>
		<select name="group" id="group" bind:value={form_data.group}>
			<option value="full_body">Full Body</option>
			<option value="lower_body">Lower Body</option>
			<option value="upper_body">Upper Body</option>
		</select>
	</div>
	<div>
		<label for="length">Length</label>
		<input type="number" name="length" id="length" bind:value={form_data.length} />
	</div>
	<div>
		<label for="description">Description</label>
		<textarea name="description" id="description" bind:value={form_data.description}></textarea>
	</div>
	<div>
		<button type="submit">Add Workout</button>
	</div>
</form>

<details>
	<summary>Why do I need to manually fill in all of this info? </summary>
	This is a non-official web app that is not affiliated with Tonal. While we are working to get auto
	importing working, for now we need to do enter your own workouts.
</details>
