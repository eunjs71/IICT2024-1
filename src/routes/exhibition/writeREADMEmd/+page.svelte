<script>
    import ImageBox from "$lib/components/ImageBox.svelte";
</script>

<div class="flex flex-col gap-6 mb-40">
    <div><b>README.md 작성하기</b></div>
    <div>
        최종 과제에 대한 설명을 <b>README.md</b> 파일에 작성합니다. <b>.md</b>
        파일은 markdown 문법을 사용합니다. (<a
            href="https://gist.github.com/ihoneymon/652be052a0727ad59601"
            target="_blank">마크다운 사용법 ↗</a
        >) <a href="https://github.com/" target="_blank">Github ↗</a>에 들어가
        정보문화기술입문 최종 과제 Repoitory에 들어갑니다.
    </div>
    <ImageBox src="/exhibition/writeREADMEmd/0.png" alt="writeREADMEmd_0" />
    <div class="flex items-center">
        <b>README</b>&nbsp;오른쪽에 있는
        <div class="mx-2">
            <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-pencil"
                ><path
                    d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"
                ></path></svg
            >
        </div>
        버튼을 클릭합니다.
    </div>
    <ImageBox src="/exhibition/writeREADMEmd/1.png" alt="writeREADMEmd_1" />
    <div class="ledaing-loose">
        <b>Preview</b> 버튼을 통해 작성한 내용의 결과를 미리볼 수 있습니다.
        내용을 작성한 후
        <span class="bg-[#1C8139] text-white px-4 py-2 rounded-lg"
            >Commit changes...</span
        > 버튼을 누릅니다.
    </div>
    <ImageBox src="/exhibition/writeREADMEmd/2.png" alt="writeREADMEmd_2" />
    <div class="leading-loose">
        <span class="bg-[#1C8139] text-white px-4 py-2 rounded-lg"
            >Commit changes</span
        > 버튼을 누릅니다.
    </div>
    <div>
        수정한 내용이 Github Repository에 적용된 모습을 확인할 수 있습니다.
    </div>
    <ImageBox src="/exhibition/writeREADMEmd/3.png" alt="writeREADMEmd_3" />
</div>

<style>
    a {
        color: rgb(59 130 246);
    }
</style>
