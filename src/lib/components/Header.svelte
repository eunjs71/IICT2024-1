<script>
    import { page } from "$app/stores";
    $: path = $page.url.pathname;
</script>

<div class="w-full flex flex-col items-center">
    <a href="/" class=""><div class="w-full py-20">IICT 2024-1</div></a>
    <div class="w-full px-4 lg:w-[896px] flex flex-row justify-between mb-8">
        <a href="/" class:active={path === "/"}>HOME</a>
        <a href="/qna" class:active={path.startsWith("/qna")}>Q&A</a>
        <a href="/exhibition" class:active={path.startsWith("/exhibition")}>
            EXHIBITION
        </a>
        <a href="/archive" class:active={path.startsWith("/archive")}>ARCHIVE</a
        >
    </div>
</div>

<style>
    .active {
        /* bold */
        font-weight: 700;
    }
    .active::before {
        content: "[";
    }
    .active::after {
        content: "]";
    }
</style>
