<script lang="ts">
	import Pill from '$/lib/Pill.svelte';
	import QR from '$/lib/QR.svelte';
	import { pb } from '$/pocketbase.js';

	let { data } = $props();

	async function bookmark(workout_id: string) {
		try {
			const user = pb.authStore.model;
			console.log('user', user);
			if (!user) {
				throw new Error('No authenticated user found');
			}

			if (pb?.authStore?.model?.saved?.includes(data.workout.id)) {
				await pb.collection('users').update(user.id, {
					'saved-': workout_id,
				});
			} else {
				await pb.collection('users').update(user.id, {
					'saved+': workout_id,
				});
			}
		} catch (error) {
			console.error('Error adding workout to user:', error);
			throw error;
		}
	}
</script>

<section class="layout content">
	<div class="content">
		<Pill link="/?level={data.workout.level}">{data.workout.level}</Pill>
		<h1>{data.workout.name}</h1>

		<p>{data.workout.description}</p>
		<p>{data.workout.long_description}</p>

		<div class="actions">
			<a class="button" href={data.workout.link}>Get this workout</a>
			<button
				onclick={() => bookmark(data.workout.id)}
				class:ghost={!pb?.authStore?.model?.saved?.includes(data.workout.id)}
				>Bookmark{#if pb?.authStore?.model?.saved?.includes(data.workout.id)}ed{/if}</button
			>
		</div>
		<QR link={data.workout.link} />
	</div>
</section>

<style>
	.actions {
		margin-bottom: 2rem;
		button,
		a {
			width: auto;
		}
	}
</style>
