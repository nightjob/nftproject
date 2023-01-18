<script lang="ts">
    import nfts from "../../store/nfts";
</script>

{#if $nfts && $nfts.length}
{#each $nfts as nft}
{nft.name}
{/each}
{:else}
Loading...
{/if}