<script>
    import Header from "$lib/components/Header.svelte";
    import "../app.css";
</script>

<div class="w-full flex justify-center">
    <div class="w-full lg:max-w-4xl">
        <Header />
        <div class="p-4 lg:p-8">
            <slot />
        </div>
    </div>
</div>
