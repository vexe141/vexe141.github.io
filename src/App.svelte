<script lang="ts">
    import logo from "./assets/logo.png";
    import Button from "./Button.svelte";
    import Project from "./Project.svelte";
    import Footer from "./Footer.svelte";

    import clang from "./assets/clang.png";
    import crystal from "./assets/crystal.png";
    import html from "./assets/html.png";
    import css from "./assets/css.png";
    import js from "./assets/js.png";

    const notor_lang = [crystal];
    const libman_lang = [clang];
    const tic_tac_toe_lang = [html, css, js];
</script>

<main>
    <img src={logo} alt="vexe logo" />
    <h1>vexe</h1>

    <p>
        Hello, I'm a guy who writes random apps and stuff for fun, I guess.
        Here's a list of some stuff I've made so far.
    </p>

    <div class="projects">
        <Project
            name="notor"
            desc="A terminal app for writing down short notes."
            link="https://www.github.com/vexe141/notor"
            langImage={notor_lang}
        />
        <Project
            name="libman"
            desc="A little library management tool."
            link="https://www.github.com/vexe141/libman"
            langImage={libman_lang}
        />
        <Project
            name="tic_tac_toe"
            desc="A terrible tictactoe game I made a long time ago."
            link="https://www.github.com/vexe141/tic_tac_toe"
            langImage={tic_tac_toe_lang}
            published="https://vexe141.github.io/tic_tac_toe"
        />
    </div>

    <p>
        Oh, fun fact, I used to be an EDM producer. Here's a bunch of links if
        you wanna check out the music I used to make.
    </p>

    <Button
        name="YouTube"
        link="https://www.youtube.com/channel/UCwl42eTL4moStZOmHbFb8uQ"
    />
    <Button
        name="Spotify"
        link="https://open.spotify.com/artist/6R6EQZ91W97H5b7YvTjYRW"
    />
    <Button name="SoundCloud" link="https://www.soundcloud.com/iamnotcorona" />

    <Footer />
</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: rgb(20, 20, 20);
        color: white;
    }

    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    img {
        height: 6rem;
        width: 6rem;
    }

    .projects {
        padding: 1rem;
    }

    h1 {
        color: #4fefca;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 2rem auto;
        max-width: 50rem;
    }

    p {
        max-width: 14rem;
        margin: 1rem auto;
        line-height: 1.35;
    }

    @media (min-width: 480px) {
        h1 {
            max-width: none;
        }

        p {
            max-width: none;
        }
    }
</style>
