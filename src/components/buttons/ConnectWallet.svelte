<script lang="ts">

    async function connect() {
        console.log("connect");
    }
</script>

<button on:click={async () => await connect()}>
Connect Wallet
</button>

<style>
</style>