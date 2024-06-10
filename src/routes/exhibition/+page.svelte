<script>
    import ExhibitionPoster from "$lib/components/ExhibitionPoster.svelte";
    let exhibitionWidth = 0;
    // $: exhibitionHeight = (exhibitionWidth * 1684) / 1191;
</script>

<div class="flex flex-col gap-6 mb-40">
    <div><b>EXIBITION</b></div>
    <div>과제전 준비</div>
    <div class="flex flex-col mb-4">
        <div>
            - <a href="/exhibition/githubUpload">
                GitHub Repository에 코드 업로드하기
            </a>
        </div>
        <div>
            - <a href="/exhibition/githubCollaborators">
                GitHub Repository 팀원과 공유하기
            </a>
        </div>
        <div>
            - <a href="/exhibition/deployGithubPages">
                GitHub Pages에 배포하기
            </a>
        </div>
        <div>
            - <a href="/exhibition/writeREADMEmd"> README.md 작성하기 </a>
        </div>
    </div>
    <div>과제전</div>
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
