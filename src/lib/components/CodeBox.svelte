<script lang="ts">
    import Highlight from "svelte-highlight";
    import vbscriptHtml from "svelte-highlight/languages/vbscript-html";
    import css from "svelte-highlight/languages/css";
    import javascript from "svelte-highlight/languages/javascript";
    import type { LanguageType } from "svelte-highlight/languages";
    import githubDark from "svelte-highlight/styles/github-dark";

    // import github-dark from "svelte-highlight/themes/github-dark";

    export let lang = "js" as string | LanguageType<string>;
    export let code = "const add = (a: number, b: number) => a + b;";

    let language = javascript as LanguageType<string>;
    if (lang === "html") {
        language = vbscriptHtml;
    } else if (lang === "css") {
        language = css;
    } else if (lang === "js") {
        language = javascript;
    }
</script>

<svelte:head>
    {@html githubDark}
</svelte:head>

<div class="rounded-lg bg-[#0d1117] p-2">
    <Highlight {language} {code} />
</div>
