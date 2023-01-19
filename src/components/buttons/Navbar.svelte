<script lang="ts">
    import account from "../../store/account";
  import displayEthereumAddres from "../../utils/displayEthereumAddress";
    import ConnectWallet from "./ConnectWallet.svelte";
    </script>

    <nav class="navbar">
        <div class="logo">
            NFT Viewor
        </div>

        <div class="nav-links">
            {#if $account}
            {displayEthereumAddres ($account)}
            {:else}
    <ConnectWallet />
    {/if}
    </div>
    </nav>

    <style>
        /* NAVBAR STYLING STARTS */

.navbar {

display: flex;

align-items: center;

justify-content: space-between;

padding: 20px;

background-color: rgb(0, 0, 0);

color: #fff;

}

.nav-links a {

color: #fff;

}

/* LOGO */

.logo {

font-size: 32px;

}

/* NAVBAR MENU */

.menu {

display: flex;

gap: 1em;

font-size: 18px;

}

.menu li:hover {

background-color: #9e4c4c;

border-radius: 5px;

transition: 0.3s ease;

}

.menu li {

padding: 5px 14px;

}

/* DROPDOWN MENU */

.services {

position: relative; 

}

.dropdown {

background-color: rgb(1, 139, 139);

padding: 1em 0;

position: absolute; /*WITH RESPECT TO PARENT*/

display: none;

border-radius: 8px;

top: 35px;

}

.dropdown li + li {

margin-top: 10px;

}

.dropdown li {

padding: 0.5em 1em;

width: 8em;

text-align: center;

}

.dropdown li:hover {

background-color: #4c9e9e;

}

.services:hover .dropdown {

display: block;

}
    </style>