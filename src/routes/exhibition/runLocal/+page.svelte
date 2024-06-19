<script>
    import ImageBox from "$lib/components/ImageBox.svelte";
    import CodeBox from "$lib/components/CodeBox.svelte";
    import { addPrompt } from "$lib/data/exhibition/hideAPIkey";
    import CodeBoxAuto from "$lib/components/CodeBoxAuto.svelte";
    import { cdCommand, runPythonServer } from "$lib/data/exhibition/runLocal";
</script>

<div class="flex flex-col gap-6 mb-40">
    <div><b>VSCode 없이 로컬에서 실행하기</b></div>
    <div>
        수업 시간에는 VSCode의 Live Server를 사용하여 로컬에서 웹 페이지를
        실행했습니다.
    </div>
    <div>VSCode 없이 로컬에서 웹 페이지를 실행하는 방법은 다음과 같습니다.</div>
    <div>
        mac에서 터미널 앱을 열고 <b>cd</b> 명령어를 통해 프로젝트 파일이 있는 디렉토리로
        이동해주세요.
    </div>
    <div>(예: my-app 폴더가 Desktop에 있을 경우)</div>
    <CodeBoxAuto code={cdCommand} />

    <div>
        이후에 <b>python</b>을 통해 로컬 서버를 실행할 수 있습니다.
    </div>
    <CodeBoxAuto code={runPythonServer} />
    <div>숫자는 포트 번호입니다.</div>
    <div>
        <b>localhost:3000</b>으로 접속하면 웹 페이지를 확인할 수 있습니다.
    </div>
</div>

<style>
    a {
        color: rgb(59 130 246);
    }
</style>
