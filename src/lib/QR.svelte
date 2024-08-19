<script lang="ts">
	import QRCode from 'qrcode';
	let { link } = $props();

	let canvas = $state();

	$effect(() => {
		QRCode.toCanvas(canvas, link);
	});
</script>

<canvas bind:this={canvas} id="qrcode"></canvas>
