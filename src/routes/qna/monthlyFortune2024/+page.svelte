<script lang="ts">
    import "../qna.css";
    import ImageBox from "$lib/components/ImageBox.svelte";
    import CodeBox from "$lib/components/CodeBox.svelte";
    import {
        indexHTML,
        sketchJS,
        sketchJS_loadDB,
    } from "$lib/data/qna/supabaseDB";
    import CodeBoxAuto from "$lib/components/CodeBoxAuto.svelte";
    import {
        addFortune,
        computeMinMax,
        monthlyLifeForecast,
        overviewMonthly,
    } from "$lib/data/qna/monthlyFortune2024";
</script>

<div class="flex flex-col gap-6 mb-40">
    <div><b>월별 운세 확인하고, 요약 정보 보기</b></div>
    <div>
        1월부터 12월까지 월별 운세를 마지막에 요약 정보를 확인하는
        예시코드입니다.
    </div>
    <ImageBox
        src="/qna/monthlyFortune2024/0.png"
        alt="monthlyFortune2024_0"
        width={400}
    />
    <div>코드는 다음 링크에서 확인할 수 있습니다.</div>
    <div>
        - p5 editor: <a
            href="https://editor.p5js.org/eunjs9071/sketches/LTD8xM9cg"
            target="_blank"
        >
            [IICT 2024-1] Monthly Life Forecast ↗
        </a>
    </div>
    <div>
        운세는 3가지 숫자타입(건강운: <b>energy</b>, 재산운: <b>wealth</b>,
        행복운: <b>joy</b>)이 0~100 사이 값을 가지고, 그에 대해 설명하는 텍스트:
        <b>eventText</b> 가 있습니다.
    </div>
    <div>다음은 데이터 예시입니다. (ChatGPT 4o로 생성함)</div>
    <CodeBox code={monthlyLifeForecast} lang="js" />

    <div>
        예시 코드는 <b>시작</b> &rarr; <b>월별 운세보기(1-12월)</b> &rarr;
        <b>요약</b> &rarr; <b>운세 종합</b>, <b>월별 요약</b> &rarr; <b>시작</b>
        순으로 진행됩니다.
    </div>
    <div>[<b>시작</b>]</div>
    <div><b>fortunes</b>: 월별 운세를 저장하는 array입니다.</div>
    <div>
        <b>fortunes</b>을 빈 어레이로 만듭니다.
    </div>
    <div>[<b>월별 운세보기(1-12월)</b>]</div>
    <div>
        운세 데이터 <b>monthlyLifeForecast</b>에서 매월 랜덤으로 하나씩 선택하여
        <b>fortunes</b>에 넣습니다.
    </div>
    <CodeBox code={addFortune} lang="js" />
    <div>[<b>운세종합</b>]</div>
    <div>
        저장된 1~12월 건강운, 재산운, 행복운 중 최솟값, 최대값을 가지는 index를
        계산합니다.
    </div>
    <CodeBox code={computeMinMax} lang="js" />

    <div>[<b>월별 요약</b>]</div>
    <div>
        각 달에 해당하는 버튼에 마우스를 올리면 해당 운세 텍스트를 보여줍니다.
    </div>
    <CodeBox code={overviewMonthly} lang="js" />
</div>

<style>
    a {
        color: rgb(59 130 246);
    }
</style>
