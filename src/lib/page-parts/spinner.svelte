<script lang='ts'>

    export let height = "2rem";
    export let width = "2rem";
    export let padding = ".5rem";
    export let color = "#008C95"

</script>

<div class="loading-indicator" style="height:{height}; width:{width};padding:{padding}">
    <i class="loader --7" style="--color: {color}"></i>
</div>

<style>

    .loading-indicator {
    }

    .loader {
        --size-mid: 6vmin;
        --size-dot: 1.5vmin;
        --size-bar: 0.4vmin;
        --size-square: 50%;

        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
    }

    .loader::before,
    .loader::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
    }

    @keyframes loader-6 {
	0%, 100% {
		transform: none;
	}
	
	25% {
		transform: translateX(100%);
	}
	
	50% {
		transform: translateX(100%) translateY(100%);
	}
	
	75% {
		transform: translateY(100%);
	}
}

    /**
        loader --7
    **/
    .loader.--7::before,
    .loader.--7::after {
        width: var(--size-square);
        height: var(--size-square);
        background-color: var(--color);
    }

    .loader.--7::before {
        top: calc(50% - var(--size-square));
        left: calc(50% - var(--size-square));
        animation: loader-6 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
    }

    .loader.--7::after {
        top: 50%;
        left: 50%;
        animation: loader-7 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
    }

    @keyframes loader-7 {
        0%, 100% {
            transform: none;
        }
        
        25% {
            transform: translateX(-100%);
        }
        
        50% {
            transform: translateX(-100%) translateY(-100%);
        }
        
        75% {
            transform: translateY(-100%);
        }
    }

    /**
        miscs
    **/

    .container {
        display: grid;
        grid-template-columns: repeat(3, 18vmin);
        grid-template-rows: repeat(3, 18vmin);
        grid-gap: 1vmin;
    }

    .item	{
        background: rgba(255, 255, 255, 0.1);
        display: grid;
        place-items: center;
        border-radius: 4px;
        transition: opacity 0.4s ease;
    }

    .container:hover .item {
        opacity: 0.3;
    }

    .container:hover .item:hover {
        opacity: 1;
    }

    .page {
        margin: auto;
    }

    .header {
        margin-bottom: 4vmin;
    }

    .header-title {
        font-size: 3.75vmin;
    }

    .header-subtitle {
        font-size: 2vmin;
        text-transform: uppercase;
        opacity: 0.6;
    }

    html, body {
        display: flex;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
        font-family: 'Noto Sans', sans-serif;
        color: pink;
        text-align: center;
        letter-spacing: 0.3px;
    }

</style>