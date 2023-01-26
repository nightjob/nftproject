<script lang="ts">
  import Navbar from "./components/buttons/Navbar.svelte";
  import NftView from "./components/buttons/NFTView.svelte";
  import account from "./store/account";
  import LandingPage from './components/buttons/LandingPage.svelte';

  import { Buffer } from "buffer";
  import Process from "process";
  globalThis.process = Process;
  globalThis.Buffer = Buffer;
</script>

<LandingPage />

<Navbar />


{#if $account}
<NftView />
{:else}
Connect Wallet to see your nfts
{/if}
<style>
</style>