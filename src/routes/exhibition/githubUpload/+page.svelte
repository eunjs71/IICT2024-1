<script>
    import ImageBox from "$lib/components/ImageBox.svelte";
</script>

<div class="flex flex-col gap-6 mb-40">
    <div><b>GitHub Repository에 코드 업로드</b></div>
    <div>[<b>Github를 쓰는 이유</b>]</div>
    <div class="flex flex-col gap-2">
        <div>
            &nbsp; - <b>버전 관리 (Git)</b>: 코드 변경 사항 추적, 이전 버전
            되돌리기
        </div>
        <div>
            &nbsp; - <b>코드 공유</b>: Github Repository에 코드를 업로드해
            협업하기
        </div>
        <div>&nbsp; - <b>배포</b>: Github Page를 통해 웹 페이지 배포</div>
    </div>
    <div>[<b>GitHub 회원 가입</b>]</div>
    <div>
        GitHub 홈페이지에 들어가셔서 회원가입을 해주세요. → <a
            href="https://github.com/"
            target="_blank">Go gitHub.com ↗</a
        >
    </div>
    <div>[<b>Github Desktop 설치</b>]</div>
    <div>
        GitHub Desktop 홈페이지에 들어가셔서 프로그램을 다운 받으세요. → <a
            href="https://desktop.github.com/"
            target="_blank">Go desktop.github.com ↗</a
        >
    </div>
    <div>
        (❗️ GitHub 업로드는 팀에서 한 명(팀장)만 하면 되며, 이후에 팀원을
        초대합니다.)
    </div>
    <div>[<b>새 Repository 만들기</b>]</div>
    <div>
        GitHub에 로그인을 한 후,
        <span class="bg-[#1C8139] text-white px-4 py-2 rounded-lg">New</span>
        버튼을 클릭하여 새 Repository를 만듭니다.
    </div>
    <ImageBox
        src="/exhibition/githubUpload/0.png"
        alt="githubUpload_0"
        width={400}
    />
    <div>
        Repository 이름, 설명을 적습니다. Repository 이름은 나중에 GitHub Page를
        만들 때 주소 이름이 되기도 합니다.
    </div>
    <div class="flex flex-col gap-2">
        <div>예: IICT2023-1</div>
        <div>
            Repository 주소: <a href="https://github.com/eunjs71/IICT2023-1"
                >https://github.com/eunjs71/IICT2023-1</a
            >
        </div>
        <div>
            Github Page 주소: <a href="https://eunjs71.github.io/IICT2023-1"
                >https://eunjs71.github.io/IICT2023-1</a
            >
        </div>
    </div>
    <ImageBox src="/exhibition/githubUpload/1.png" alt="githubUpload_1" />

    <div class="leading-loose">
        과제에 대한 설명까지 적기 위해, <b>Add a README file</b>을 체크한 후
        <span class="bg-[#1C8139] text-white px-4 py-2 rounded-lg"
            >Create repository</span
        > 버튼을 눌러 Repository를 생성합니다. 새 Repository가 생성되면 GitHub Desktop
        응용프로그림을 통해 이 Repository를 관리합니다.
    </div>
    <div>[<b>GitHub Desktop으로 Repository 관리하기 </b>]</div>
    <div>
        다운로드 받은 Github Desktop을 실행하고 <b>Settings...</b>에 들어가 계정
        로그인을 합니다.
    </div>
    <ImageBox
        src="/exhibition/githubUpload/2.png"
        alt="githubUpload_2"
        width={400}
    />
    <ImageBox
        src="/exhibition/githubUpload/3.png"
        alt="githubUpload_3"
        width={400}
    />
    <div>
        Current Repository &gt; Add &gt; Clone Repository...를 선택합니다.
    </div>
    <ImageBox
        src="/exhibition/githubUpload/4.png"
        alt="githubUpload_4"
        width={400}
    />
    <div>
        내 컴퓨터에 Repository를 저장할 위치를 지정하고 Clone 버튼을 누르면,
        지정된 위치에 Repository가 복제됩니다.
    </div>
    <ImageBox
        src="/exhibition/githubUpload/5.png"
        alt="githubUpload_5"
        width={400}
    />
    <div>p5.js 프로젝트 파일을 복사합니다.</div>
    <ImageBox
        src="/exhibition/githubUpload/6.png"
        alt="githubUpload_6"
        width={400}
    />
    <div>
        다시 GitHub Desktop으로 돌아가면 Repository의 변경 내역을 확인할 수
        있습니다.
    </div>
    <ImageBox src="/exhibition/githubUpload/7.png" alt="githubUpload_7" />
    <div>좌측하단에는 변경 내역에 대해 적습니다.</div>
    <ImageBox
        src="/exhibition/githubUpload/8.png"
        alt="githubUpload_8"
        width={400}
    />
    <div class="leading-loose">
        변경된 내용을 설명을 포함에 묶는 것을 <b>commit</b>이라고 합니다.
        Description에는 상세 내용을 적습니다. 적지 않으셔도 됩니다.
        <b>commit</b>은 한번에 많은 내용을 수정하기 보다는 기능 단위로 수정하고
        <b>commit</b>을 진행하는 것이 바람직합니다. 내용을 기입했으면,
        <span class="bg-[#2664c8] text-white rounded-lg px-4 py-2"
            >Commit to <b>main</b></span
        >
        버튼을 누릅니다. Repository 안에 파일이나 파일의 내용이 변경(추가, 제거)되고
        이를 <b>commit</b>하면 다음과 같은 화면이 뜹니다.
    </div>
    <ImageBox src="/exhibition/githubUpload/9.png" alt="githubUpload_9" />
    <div class="leading-loose">
        <span class="bg-[#2664c8] text-white rounded-lg px-4 py-2"
            >Push origin</span
        > 버튼을 누르면 github.com에 있는 Repository에 변경 내용이 적용됩니다. github.com에서
        본인의 Repository에 들어가보면 추가한 파일이 업로드 된 것을 확인할 수 있습니다.
    </div>
    <ImageBox src="/exhibition/githubUpload/10.png" alt="githubUpload_10" />
    <div>
        이후에도 변경된 사항이 있을 때마다, GitHub Desktop에서 <b>commit</b>
        &gt;
        <b>push</b>를 통해 github.com에 있는 Repository에 변경 사항을 적용할 수
        있습니다.
    </div>
    <div>
        Repository를 공유하는 다른 팀원이 <b>push</b>를 하면 다음과 같이
        나타나는
        <span class="bg-[#2664c8] text-white rounded-lg px-4 py-2"
            >Pull origin</span
        > 버튼을 눌러 github.com에 있는 Repository에 변경 내용이 적용시킬 수 있습니다.
    </div>
    <ImageBox src="/exhibition/githubUpload/11.png" alt="githubUpload_11" />
</div>

<style>
    a {
        color: rgb(59 130 246);
    }
</style>
