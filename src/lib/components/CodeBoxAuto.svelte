<script lang="ts">
    import { HighlightAuto } from "svelte-highlight";
    import githubDark from "svelte-highlight/styles/github-dark";

    export let code = "const add = (a: number, b: number) => a + b;";
</script>

<svelte:head>
    {@html githubDark}
</svelte:head>

<div class="rounded-lg bg-[#0d1117] p-2">
    <HighlightAuto {code} />
</div>
