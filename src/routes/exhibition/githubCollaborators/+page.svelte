<script>
    import ImageBox from "$lib/components/ImageBox.svelte";
</script>

<div class="flex flex-col gap-6 mb-40">
    <div><b>GitHub Repository 팀원과 공유하기</b></div>
    <div>
        모든 팀원이 GitHub에 가입을 한 이후, GitHub Repository 만들기를 완료한
        사람(조장)이 나머지 팀원을 <b>Collaborators</b>로 지정해주세요.
        <a href="https://github.com/" target="_blank">Github ↗</a> 에 들어가 정보문화기술입문
        최종 과제 Repoitory에 들어갑니다.
    </div>
    <ImageBox
        src="/exhibition/githubCollaborators/0.png"
        alt="githubCollaborators_0"
    />
    <div class="leading-loose">
        <b>Settings</b> &gt; <b>Collaborators</b>를 선택합니다. (추가 인증이
        필요할 수 있습니다.)
        <span class="bg-[#1C8139] text-white px-4 py-2 rounded-lg"
            >Add people</span
        > 버튼을 누릅니다.
    </div>
    <ImageBox
        src="/exhibition/githubCollaborators/1.png"
        alt="githubCollaborators_1"
        width={400}
    />
    <div>
        팀원들의 아이디 혹은 이메일을 입력합니다. 팀원이 수락하면 접근 권한을
        갖게 됩니다.
    </div>
</div>

<style>
    a {
        color: rgb(59 130 246);
    }
</style>
