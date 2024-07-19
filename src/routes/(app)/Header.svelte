<script lang="ts">
	import { settings } from '$settings';
	let { user } = $props();
</script>

<header class="layout">
	<div>
		<p><a href="/">{settings.app_name}</a></p>
		<nav>
			{#if !user}
				<a href="/auth/login">Login</a>
			{/if}
		</nav>
	</div>
</header>

<style>
	header {
		border-bottom: 1px solid #eee;
		padding: 15px 10px;
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		p {
			margin: 0;
		}
	}
</style>
