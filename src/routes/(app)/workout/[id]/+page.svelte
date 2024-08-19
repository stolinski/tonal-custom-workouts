<script lang="ts">
	import Pill from '$/lib/Pill.svelte';
	import QR from '$/lib/QR.svelte';

	let { data } = $props();
</script>

<section class="layout content">
	<div class="content">
		<Pill link="/?level={data.workout.level}">{data.workout.level}</Pill>
		<h1>{data.workout.name}</h1>

		<p>{data.workout.description}</p>

		<a class="button" href={data.workout.link}>Get this workout</a>
		<QR link={data.workout.link} />
	</div>
</section>
