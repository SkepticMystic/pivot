<script lang="ts">
	export let disabled = false;
	export let btnCls: string | undefined = undefined;
	export let clickOutsideToClose = true;
	export let modal: HTMLDialogElement;
</script>

<!-- Open the modal using ID.showModal() method -->
<button class={btnCls ?? ''} {disabled} on:click={() => modal.showModal()}>
	<slot name="open" />
</button>

<!-- Modal goes bottom on mobile screen and goes middle on desktop -->
<dialog class="modal modal-bottom sm:modal-middle" bind:this={modal}>
	<form method="dialog" class="modal-box">
		<slot name="content" />

		<div class="modal-action justify-between">
			<div>
				<slot name="action" />
			</div>

			<!-- if there is a button in form, it will close the modal -->
			<button class="btn-warning btn">Close</button>
		</div>
	</form>

	{#if clickOutsideToClose}
		<!-- 'modal-backdrop' covers the screen so we can close the modal when clicked outside -->
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	{/if}
</dialog>
