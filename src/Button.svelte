<script lang="ts">
    export let name: string;
    export let link: string;

    function goToLink(): void {
        window.open(link, "_blank");
    }
</script>

<button on:click={goToLink}>{name}</button>

<style>
    button {
        overflow: hidden;
        transition: all 200ms ease;
        background-color: rgb(69, 144, 130);
        color: white;
        padding: 10px 10px;
        text-align: center;
        font-size: 12px;
        width: 20%;
        border: none;
        margin: 1rem;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
    }

    button:hover {
        background-color: rgb(72, 143, 155);
    }
</style>
