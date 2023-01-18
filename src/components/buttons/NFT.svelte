<script lang="ts">
  import type { NFT } from "../../domain/nft";
  import truncateDescription from "../../utils/truncateDescription";
import parseImageURL from "../../utils/parseImageURL";

    export let nft: NFT;
</script>

<div class="nft">
{nft.name} <br />
{truncateDescription(nft.description)} <br />
<img src={parseImageURL(nft.imageURL)} /> <br />
</div>

<style>
    img {
        height: 100px;
        width: 100px;
    } 

    .nft {
        margin: 0 auto;
    }
</style>