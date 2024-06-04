<script>
    import ExhibitionPoster from "$lib/components/ExhibitionPoster.svelte";
    let exhibitionWidth = 0;
    // $: exhibitionHeight = (exhibitionWidth * 1684) / 1191;
</script>

<div class="flex flex-col gap-6 mb-40">
    <div><b>EXIBITION</b></div>
    <div>
        <a href="https://www.ischive.com/2024jungmoon24" target="_blank">
            https://www.ischive.com/2024jungmoon24 ↗
        </a>
    </div>
    <div bind:clientWidth={exhibitionWidth}>
        <ExhibitionPoster width={exhibitionWidth} />
    </div>
</div>

<style>
    a {
        color: rgb(59 130 246);
    }
</style>
