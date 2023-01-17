<script lang="ts">
    import { ethers } from "ethers";
  import account from "../../store/account";
    type EthereumWindow = {
        ethereum: any; //todo: get rid of any typing
    };
    async function connect() {
        const provider = new ethers.providers.Web3Provider(
            (window as any as EthereumWindow).ethereum
            );

            const accounts = await provider.send("eth_requestAccounts", []);
            const providedAccount = accounts[0];
            // set account into a store, so that we can use it elsewhere
            account.set(providedAccount)
    }
</script>

<button on:click={async () => await connect()}>
Connect Wallet
</button>

<style>
</style>