<script lang="ts">
	let { data } = $props();
</script>

<section class="layout-sidebar-inverse content">
	<div class="content">
		<p>{data.workout.level}</p>
		<h1>{data.workout.name}</h1>

		<p>{data.workout.description}</p>

		<a class="button" href={data.workout.link}>Get this workout</a>
	</div>
</section>
