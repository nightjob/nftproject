<script lang="ts">
    import nfts from "../../store/nfts";
    import Nft from "./NFT.svelte";
</script>

{#if $nfts && $nfts.length}
<div class="nfts-grid">
{#each $nfts as nft}
<Nft {nft} />
{/each}
</div>
{:else}
<div class="loader">Loading...</div>
{/if}

<style>
    .nfts-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        gap: 1rem;
    }

    @media (min-width: 600px) {
        .nfts-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (min-width: 900px) {
        .nfts-grid {
            grid-template-columns: repeat(5, 1fr);
        }
    }

    .loader,
.loader:before,
.loader:after {
  background: #ffffff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

</style>