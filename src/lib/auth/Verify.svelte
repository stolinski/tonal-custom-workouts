<script lang="ts">
	import { users } from '$/pocketbase';
	import type { UsersResponse } from '$/types/pocketbase';
	const { user }: { user: UsersResponse } = $props();

	let verified_sent = $state(false);

	async function onclick() {
		await users.requestVerification(user.email);
		verified_sent = true;
	}
</script>

<div>
	{#if !verified_sent}
		<p>
			Your email is not verified.
			<button class="btn-small button" {onclick}> Send Verification </button>
		</p>
	{:else}
		<p>Verification email sent to {user.email}. Please check your email.</p>
	{/if}
</div>

<style>
	div {
		padding: 20px;
	}
	p {
		margin: 0;
		font-size: var(--fs-xs);
		text-align: center;
	}
	button {
		display: inline-block;
		margin: 0;
	}
</style>
