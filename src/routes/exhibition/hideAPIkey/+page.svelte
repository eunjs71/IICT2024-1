<script>
    import ImageBox from "$lib/components/ImageBox.svelte";
    import CodeBox from "$lib/components/CodeBox.svelte";
    import { addPrompt } from "$lib/data/exhibition/hideAPIkey";
</script>

<div class="flex flex-col gap-6 mb-40">
    <div><b>OPENAI_API_KEY 숨기기</b></div>
    <div>
        github에 코드를 public으로 업로드 할 경우 모든 코드의 내용이 공개되기
        때문에, openAI API, supabase 등의 외부 라이브러리의 API KEY를 코드 내에
        작성할 경우 유출될 위험이 있습니다.
    </div>
    <div>
        한번이라도 코드에 key를 넣은 채로 업로드하면 기록이 모두 남기 때문에
        특히 유의하시기 바랍니다.
    </div>
    <div>
        과제 제출을 위해 github에 업로드 하실 때에는 API_KEY 파트를 완전히
        제외하시기 바랍니다.
    </div>
    <div>supabase를 사용하시는 경우 관련 변수를 따로 보내주시기 바랍니다.</div>
    <div>
        github에 KEY를 올리지 않은 채로 github pages에 배포하고 싶은 경우 다음의
        방식으로 브라우저에서 키를 입력받도록합니다.
    </div>
    <CodeBox code={addPrompt} lang="js" />
    <div>
        <b>prompt()</b>를 사용하면 브라우저에서 string 변수를 받을 수 있습니다.
    </div>
    <ImageBox
        src="/exhibition/hideAPIkey/0.png"
        alt="hideAPIkey_0"
        width={400}
    />
</div>

<style>
    a {
        color: rgb(59 130 246);
    }
</style>
