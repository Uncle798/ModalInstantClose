<script lang="ts">
    import type { PageData } from "./$types";
    import { Modal } from '@skeletonlabs/skeleton-svelte';
   interface Props {
      data: PageData
      modalOpen: boolean
   }
   let { data, modalOpen }: Props = $props()
</script>

{#if data.things}
   {#each data.things as thing}
      <Modal
         bind:open={modalOpen}
         triggerBase="btn preset-tonal"
         contentBase="card bg-surface-400-600 p-4 space-y-4 shadow-xl max-w-screen-sm"
         backdropClasses="backdrop-blur-sm"
      >
         {#snippet trigger()}
            Open modal 
         {/snippet}
         {#snippet content()}
            {thing.value1}
            {thing.value2}
            <button class="btn " onclick={()=>modalOpen=false}>Close</button>
         {/snippet}
      </Modal>
   {/each}
{/if}