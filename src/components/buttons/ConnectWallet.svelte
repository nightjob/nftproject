<script lang="ts">
  import connectGME from "../../utils/connectGME";
import connectMetamask from "../../utils/connectMetamask";
  import connectPhantom from "../../utils/connectPhantom";
</script>

<button on:click={async () => await connectMetamask()}>
Metamask
</button>
<button on:click={async () => await connectGME()}>
    GME Wallet
    </button>
    <button on:click={async () => await connectPhantom()}>
        Phantom
        </button>

<style>
</style>