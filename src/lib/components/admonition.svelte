<script lang="ts">
	import CheckCircle from './icons/checkCircle.svelte';
	import ExclamationTriangle from './icons/exclamationTriangle.svelte';
	import InformationCircle from './icons/informationCircle.svelte';

	export let type: keyof typeof admonitions;
	export let title: string | undefined = undefined;

	const admonitions = {
		warning: { name: 'Warning', icon: ExclamationTriangle },
		success: { name: 'Success', icon: CheckCircle },
		info: { name: 'Info', icon: InformationCircle },
		example: { name: 'Example', icon: '' }
	};

	const { icon, name } = admonitions[type];
</script>

<div
	class="p-3 my-4 flex flex-col gap-2 border-l-2 border-l-primary rounded-box"
	class:bg-warning={type === 'warning'}
	class:bg-success={type === 'success'}
	class:bg-info={type === 'info'}
>
	<div class="flex gap-2 items-center">
		<svelte:component this={icon} />
		<span class="text-lg">
			{title || name}
		</span>
	</div>
	<div>
		<slot />
	</div>
</div>
