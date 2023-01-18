<script lang="ts">
  import Navbar from "./components/buttons/Navbar.svelte";
  import NftView from "./components/buttons/NFTView.svelte";
  import account from "./store/account";
</script>

<Navbar />

{#if $account}
<NftView />
{:else}
Connect Wallet to see your nfts
{/if}
<style>
</style>