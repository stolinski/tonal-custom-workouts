<script lang="ts">
	import Header from '$/routes/(app)/Header.svelte';
	import Footer from '$routes/(app)/Footer.svelte';
	import Verify from '$/lib/auth/Verify.svelte';
	import { pb } from '$/pocketbase.js';
	import { invalidate } from '$app/navigation'
	let { children, data } = $props()

	// This is like useEffect, but you don't need dependancies 
	$effect(() => {
		if(pb?.authStore?.model?.id) {
			return pb.collection('users').subscribe(pb.authStore.model.id, async () => {
				await pb.collection('users').authRefresh();
				invalidate('app:user');
			});
		}
	});
</script>


<!-- App and Site both use the Header and Footer, but you can make separate ones if you want -->

{#if data.user && !data.user.verified}
	<Verify user={data.user} />
{/if}

<Header user={data.user} />

<main class="layout">
	{@render children()}
</main>

<Footer />
