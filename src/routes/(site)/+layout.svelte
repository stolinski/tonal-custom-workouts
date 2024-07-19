<script lang="ts">
	import Header from '$routes/(app)/Header.svelte';
	import Footer from '$routes/(app)/Footer.svelte';
	import { app_guard } from '$utils/app_guard';
	let { children } = $props()
 
	// Everything in the app route tree is protected behind user accounts.
	$effect.pre(app_guard);
</script>


<Header />

<main class="layout">
	{@render children()}
</main>

<Footer />