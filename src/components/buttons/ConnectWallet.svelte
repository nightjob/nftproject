<script lang="ts">
  import { onMount } from "svelte";
  import connectGME from "../../utils/connectGME";
import connectMetamask from "../../utils/connectMetamask";
  import connectPhantom from "../../utils/connectPhantom";
import detectGamestopProvider from "@gamestopnft/detect-gamestop-provider";


let isMetamaskInstalled: boolean = false;
let isGamestopInstalled: boolean = false;
let isPhantomInstalled: boolean = false;

onMount(async () => {
  const ethereum = (window as any as EthereumWindow).ethereum;
  if(ethereum) {
    isMetamaskInstalled = true;
  }

  const phantom = (window as any as EthereumWindow).solana.phantom;
  if (phantom) {
    isPhantomInstalled = true;
  }

  const gmeProvider = await detectGamestopProvider();
  if (gmeProvider) {
    isGamestopInstalled = true;
  }
})

  type EthereumWindow = {
  ethereum: any; //todo: get rid of any typing
  solana: { phantom: any};
};

  async function connect(walletType: string, fn: () => Promise<void>) {
    if (walletType === "metamask") {
      if(!isMetamaskInstalled) {
        const metamaskinstallUrl = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en";
        window.open(metamaskinstallUrl, "_blank");
      }
    } else if (walletType === "gme") {
      if (!isGamestopInstalled) {
        const gamestopInstallUrl = "https://chrome.google.com/webstore/detail/gamestop-wallet/pkkjjapmlcncipeecdmlhaipahfdphkd?hl=en";
        window.open(gamestopInstallUrl, "_blank");
      }
    } else if (walletType === "phantom") {
      if(!isPhantomInstalled) {
        const phantomInstallUrl = "https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?hl=en";
        window.open(phantomInstallUrl, "_blank");
      }
    }
await fn();
  }
</script>

<button class='metamaskb' on:click={async () => await connect("metamask", connectMetamask)}>
{#if isMetamaskInstalled}
Connect Metamask
{:else}
Install Metamask
{/if}
</button>
<button class="gamestopb" on:click={async () => await connect("gme", connectGME)}>
  {#if isGamestopInstalled}
  Connect GameStop
  {:else}
  Install GameStop
  {/if}
</button>
<button class="phantomb" on:click={async () => await connect("phantom", connectPhantom)}>
  {#if isPhantomInstalled}
  Connect Phantom
  {:else}
  Install Phantom
  {/if}
</button>

<style>
  /* .metamaskb {
    background-image: url('picture_assets/metamask.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100px;
    height: 40px;
}

  .gamestopb {
    background-image: url('picture_assets/gamestop.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100px;
    height: 40px;
  }

  .phantomb {
    background-image: url('picture_assets/phantom.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100px;
    height: 40px;
  } */

</style>