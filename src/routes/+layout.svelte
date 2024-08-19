<script lang="ts">
	import "@drop-in/theme";
	import { Toast, toast } from '@drop-in/toast';
	let { children } = $props()

</script>

<!-- If you would like to use the same layout in app and site, use this file -->
{@render children()}

<Toast position={{ inline: 'end', block: 'end' }} offset={{ inline: '20px', block: '20px' }} />
