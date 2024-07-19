<script lang="ts">
	import type { WorkoutsResponse } from '$/types/pocketbase';

	let { workout }: { workout: WorkoutsResponse } = $props();
</script>

<a href="/workout/{workout.id}" class={workout.group + ' ' + workout.level}>
	<article>
		<h2>
			{workout.name}
		</h2>
		<p>{workout.description}</p>
	</article>
</a>

<style>
	a {
		--top-right: var(--lime);
		--bottom-left: var(--green);
		text-decoration: none;
		display: block;
		border-radius: 5px;
		overflow: hidden;
		border: 4px solid rgb(255 255 255 / 0.1);
		color: white;
		box-shadow:
			rgba(17, 17, 26, 0.05) 0px 1px 0px,
			rgba(17, 17, 26, 0.1) 0px 0px 8px;
		transition: box-shadow 0.5s ease-in-out;
		&:hover {
			box-shadow:
				rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
				rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
		}
	}

	a.upper_body {
		--bottom-left: var(--purple);
	}

	a.lower_body {
		--bottom-left: var(--purple);
	}

	a.full_body {
		--bottom-left: var(--teal);
	}

	a.advanced {
		--top-right: var(--yellow);
	}

	a.intermediate {
		--top-right: var(--blue);
	}

	a.beginner {
		--top-right: var(--green);
	}

	article {
		border-radius: 1px;
		padding: 20px;
		background: linear-gradient(-45deg, var(--top-right), var(--bottom-left));
	}

	h2 {
		margin-top: 0;
		font-size: var(--fs-base);
	}

	p {
		font-size: var(--fs-xxs);
		margin-bottom: 0;
	}
</style>
