<script>
    export let width = 0;
    $: height = (width * 1684) / 1191;
    $: qrX = width * 0.05;
    $: qrY = width * 0.233;
    $: qrW = width * 0.045;
    $: qrH = width * 0.045;
    let opacity = 0;
</script>

<div class="flex" style={`width: ${width}px; height: ${height}px`}>
    <div class="relative w-full">
        <div class="absolute">
            <img src="/exhibition/exhibition.png" alt="exhibition" />
        </div>
        <button
            class={`absolute opacity-${opacity} cursor-none`}
            style={`left: ${qrX}px; top: ${qrY}px; width: ${qrW}px; height: ${qrH}px;`}
            on:mouseenter={() => {
                qrW = width * 0.17;
                opacity = 1;
            }}
            on:mouseleave={() => {
                qrW = width * 0.045;
                opacity = 0;
            }}
        >
            <img src="/exhibition/qrcode.png" alt="qrcode" />
        </button>
        <div class="opacity-0"></div>
        <div class="opacity-1"></div>
    </div>
</div>
