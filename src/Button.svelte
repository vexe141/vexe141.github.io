<script lang="ts">
    export let name: string;
    export let link: string;
</script>

<a href={link} target="_blank"><button>{name}</button></a>

<style>
    button {
        background-color: rgb(66, 121, 111);
        color: white;
        padding: 10px 10px;
        text-align: center;
        font-size: 15px;
        width: 20%;
        border: none;
        margin: 1rem;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: rgb(50, 96, 90);
    }
</style>
