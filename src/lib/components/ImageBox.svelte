<script>
    export let src = "";
    export let alt = "";
    export let width = 0;
</script>

{#if width > 0}
    <div class="flex w-full justify-center">
        <div class="p-2 border rounded-lg">
            <img {src} {alt} class="drop-shadow" style="width: {width}px" />
        </div>
    </div>
{:else}
    <div class="w-full p-2 border rounded-lg">
        <img {src} {alt} class="w-full drop-shadow" />
    </div>
{/if}
