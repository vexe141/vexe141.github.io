<script lang="ts">
    export let name: string;
    export let desc: string;
    export let link: string;
</script>

<div class="wrapper">
    <h2>{name}</h2>

    <p>{desc}</p>
    <p>The repo is <a href={link} target="_blank">here</a>.</p>
</div>

<style>
    .wrapper {
        padding: 1rem;
    }

    h2 {
        color: #4fefca;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 1rem auto;
    }

    p {
        max-width: 50rem;
        margin: 2rem auto;
        line-height: 1.35;
    }
</style>
