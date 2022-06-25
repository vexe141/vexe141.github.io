<script lang="ts">
    export let name: string;
    export let desc: string;
    export let link: string;
    export let langImage: string[];
    export let published: string = "";
</script>

<div class="wrapper">
    <h2>{name}</h2>

    <p>
        {desc}
        <br />
        Repo: <a href={link} target="_blank">{link}</a>
        <br />

        {#if published.length !== 0}
            Published at: <a href={published} target="_blank">{published}</a>
        {/if}
        <br />

        {#each langImage as lang}
            <img class="langImage" src={lang} alt="Language used for project" />
        {/each}
    </p>

    <p />
</div>

<style>
    .wrapper {
        background-color: rgb(45, 45, 45);
        margin: 1rem auto;
        padding: 1rem;
        padding-left: 2rem;
        border-radius: 5px;
    }

    .langImage {
        height: 2.5rem;
        width: 2.5rem;
        margin: 2rem 5px 5px 5px;
        user-select: none;
    }

    h2 {
        color: #4fefca;
        text-align: left;
        font-size: 2rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 1rem auto;
    }

    p {
        text-align: left;
        margin: 1.5rem auto;
        line-height: 1.35;
    }
</style>
