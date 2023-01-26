<script>
    import { onMount } from 'svelte';

    let message = 'I have NFTs'
    let modalOpen = true;
    let mainContentText = '';

    onMount(() => {
        document.body.classList.add('modal-open');
    });

    const handleClick = () => {
        message = 'Button clicked';
        modalOpen = false;
        document.body.classList.remove('modal-open');
        mainContentText = 'Want to add the "no wallets" text here? Or do I want to have a seperate page if someone has NO wallets and explain what NFTs a wallet/crypto is? Error here? TBD';
    }
</script>

<svelte:head>
    <style>

        body {
            background: linear-gradient(to bottom, #ff0000, #0000ff);
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-open .main-content {
            display: none;
        }

        button {
            font-size: 18px;
            background-color: #4CAF50;
            color: white;
            border: none;
            margin:5px;
        }
        .text-up-top{
            text-align: center;
            font-size: 4em;
            animation: text-animation 2s ease-in-out;
            animation-fill-mode: forwards;
        }

        @keyframes text-animation {
            0% {
                opacity: 0;
                transform: translateY(-50px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .box-container {
            display: flex;
            justify-content: center;
        }
        .box {
            padding: 15px;
            border-radius: 5px;
            margin: 10px;
        }

        .hello-text {
            display: none;
            text-align: center;
            font-size: 4em;
        }

        .show-text .hello-text {
            display: block;
            animation: text-animation 2s ease-in-out;
            animation-fill-mode: forwards;
        }
    </style>
</svelte:head>

{#if modalOpen}
<div class="modal">
<p class="text-up-top">My NFTs</p>
<div class="box-container">
<div class="box">
<p>I have NFTs</p>
<button on:click={handleClick}>Get Started!</button>
</div>
<div class="box">
<p>What is a NFT?</p>
<a href="https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-nft" target="_blank"> <button>Learn More about NFT</button></a>
</div>
</div>
</div>
{/if}

<div class="main-content">
{#if !modalOpen}
    <p>{mainContentText}</p>
{/if}
</div>
