<script lang="ts">
    import Button from "./Button.svelte";
    import Project from "./Project.svelte";
    import Footer from "./Footer.svelte";

    import clang from "./assets/clang.svg";
    import crystal from "./assets/crystal.svg";
    import html from "./assets/html.svg";
    import css from "./assets/css.svg";
    import js from "./assets/js.svg";

    const props = {
        notorProps: {
            name: "notor",
            desc: "A terminal app for writing down short notes.",
            link: "https://github.com/vexe141/notor",
            langImage: [crystal]
        },
        libmanProps: {
            name: "libman",
            desc: "A little library management tool.",
            link: "https://github.com/vexe141/libman",
            langImage: [clang]
        },
        ticTacToeProps: {
            name: "tic_tac_toe",
            desc: "A terrible recreation of tictactoe.",
            link: "https://www.github.com/vexe141/tic_tac_toe",
            langImage: [html, css, js],
            published: "https://vexe141.github.io/tic_tac_toe"
        }
    }
</script>

<main>
    <h1>vexe</h1>

    <p>
        Your average spaghetti coder. Also a former music producer.
    </p>

    <div class="projects">
        <Project {...props.notorProps} />
        <Project {...props.libmanProps} />
        <Project {...props.ticTacToeProps} />
    </div>

    <p>
        Here's a bunch of links to my channels where you'll find some EDM tracks I produced as "virus.exe".
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
        font-family: -apple-system, BlinkMacSystemFont, "Finlandica","Segoe UI", Roboto, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: rgb(20, 20, 20);
        color: white;
    }

    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    .projects {
        padding: 1rem;
    }

    h1 {
        color: #4fefca;
        font-size: 4rem;
        letter-spacing: 0.3rem;
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
