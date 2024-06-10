<script>
    import ImageBox from "$lib/components/ImageBox.svelte";
</script>

<div class="flex flex-col gap-6 mb-40">
    <div><b>GitHub Pages에 배포하기</b></div>
    <div>
        GitHub Repository에 저장한 웹 페이지를 <b>Github Pages</b>에 배포하는
        방법에 대해 안내드립니다. 로컬에서 실행했을 때와는 달리, 일단 배포를
        하면 url을 통해 어디서든 접속하실 수 있습니다.
        <a href="https://github.com/" target="_blank">Github ↗</a> 에 들어가
        정보문화기술입문 최종 과제 Repoitory에 들어가서 <b>Settings</b> &gt;
        <b>Pages</b>를 선택합니다.
    </div>
    <ImageBox
        src="/exhibition/deployGithubPages/0.png"
        alt="deployGithubPages_0"
    />
    <div class="leading-loose">
        <b>Branch</b>를 None에서 main으로 변경한 후
        <span class="bg-[#F7F8FA] border border-[#D0D7Df] px-4 py-2 rounded-lg"
            >Save</span
        > 버튼을 누릅니다.
    </div>
    <ImageBox
        src="/exhibition/deployGithubPages/1.png"
        alt="deployGithubPages_1"
        width={400}
    />
    <div>
        새로 고침을 계속하면서 기다리다 보면(5분 이내) 링크가 생성되는 것을
        확인할 수 있습니다.
    </div>
    <ImageBox
        src="/exhibition/deployGithubPages/2.png"
        alt="deployGithubPages_2"
    />
</div>

<style>
    a {
        color: rgb(59 130 246);
    }
</style>
