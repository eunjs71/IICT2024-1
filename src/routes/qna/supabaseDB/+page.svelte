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
</script>

<div class="flex flex-col gap-6 mb-40">
    <div><b>Supabase DB에 텍스트 데이터 저장하기/불러오기</b></div>
    <div>
        [<b>GitHub 가입</b>], [<b>Supabase 가입</b>], [<b>프로젝트 생성</b>], [<b
            >Project URL, API Key 복사</b
        >]까지는 아래 링크를 참고하세요.
    </div>
    <div>
        - <a href="https://iict-2023-2.vercel.app/qna/QRcode1" target="_blank">
            이미지 QR코드로 보여주기 - 1. 이미지 supabase에 업로드 ↗
        </a>
    </div>
    <div>[<b>Table 생성하기</b>]</div>
    <div>왼쪽 메뉴에서 <b>Database</b>를 선택하세요.</div>
    <ImageBox src="/qna/supabaseDB/0.png" alt="supabaseDB_0" />
    <div>
        <span class="px-4 py-2 bg-[#37996B] text-white rounded-lg mr-2"
            >+ New table</span
        > 버튼을 클릭하세요.
    </div>
    <ImageBox src="/qna/supabaseDB/1.png" alt="supabaseDB_1" />
    <div class="flex flex-col gap-2">
        <div>'<b>post</b>'라는 새로운 테이블을 생성합니다.</div>
        <div>
            <b>post</b> 테이블에는 텍스트 데이터를 저장합니다.
        </div>
        <div class="my-2 leading-loose">
            <span class="px-4 py-2 border rounded-lg mr-2">Add column</span>
            버튼을 눌러 <b>Name</b>은 <b>content</b>로 입력하고, <b>Type</b>은
            <b>text</b>를 선택합니다.
        </div>
        <div>
            추가로 저장하고 싶은 변수가 있으면 이름과 타입을 설정하면됩니다.
        </div>
        <div>
            <b>id</b>는 테이블에 저장될 아이템 각각의 고유번호,
            <b>created_at</b>은 데이터가 테이블에 저장된 시간으로, 테이블을 만들
            때 먼저 생성되어 있으며, 데이터를 입력할 때에도 자동으로 생성됩니다.
        </div>
    </div>
    <ImageBox src="/qna/supabaseDB/2.png" alt="supabaseDB_2" />
    <div class="flex flex-col gap-2">
        <div>데이터베이스에서 테이블을 만들었습니다.</div>
    </div>
    <div>[<b>DB 권한 설정하기</b>]</div>
    <div class="flex flex-col gap-2">
        <div>이제 외부에서 접속할 수 있도록 정책을 설정합니다.</div>
        <div>왼쪽 메뉴에서 <b>Authentication</b>를 선택하세요.</div>
    </div>
    <ImageBox src="/qna/supabaseDB/3.png" alt="supabaseDB_3" />
    <div class="flex flex-col gap-2">
        <div><b>Polices</b> 탭을 누릅니다.</div>
        <div class="my-2">
            오른쪽에 있는 <span class="px-4 py-2 border rounded-lg mr-2"
                >Create policy</span
            > 버튼을 누릅니다.
        </div>
    </div>
    <ImageBox src="/qna/supabaseDB/4.png" alt="supabaseDB_4" />
    <div class="flex flex-col gap-2">
        <div>
            <b>policy</b>에서는 데이터베이스의 여러 기능에 대한 각 권한을
            누구에게 어느 정도 허용할 것인가에 대해 기술합니다.
        </div>
        <div>
            직접 작성할 수도 있으나 여기에서는 미리 작성된 Template를
            사용합니다.
        </div>
        <div class="my-2">
            오른쪽에 있는 Template 중 <span
                class="px-4 py-2 border rounded-lg mr-2">ALL</span
            >을 선택합니다.
        </div>
    </div>
    <ImageBox src="/qna/supabaseDB/5.png" alt="supabaseDB_5" />
    <div>
        <span class="text-blue-400">using</span><span class="text-yellow-500"
            >()</span
        >
        안의 내용을
        <span class="text-blue-700"><b>true</b></span>로 수정합니다.
    </div>
    <ImageBox src="/qna/supabaseDB/6.png" alt="supabaseDB_6" />
    <div>
        이제 DB URL, API Key를 이용하여 데이터를 저장하고 불러올 수 있습니다.
    </div>
    <div>[<b>데이터 입력하기</b>]</div>
    <div>
        <b>index.html</b>에 Supabase 라이브러리를 추가하고, <b>createClient</b> 변수를
        선언해줍니다.
    </div>
    <CodeBoxAuto code={indexHTML} />
    <div>다음은 화면을 클릭할 때 텍스트를 DB에 저장하는 예제입니다.</div>
    <div>
        <span class="bg-black text-[#a5d6ff]"
            >&nbsp;&lbrace; PROJECT_URL &rbrace;&nbsp;</span
        >,
        <span class="bg-black text-[#a5d6ff]"
            >&nbsp;&lbrace; API_KEY &rbrace;&nbsp;</span
        > 대신 저장해 둔 값을 넣어주세요.
    </div>
    <CodeBoxAuto code={sketchJS} />
    <div>
        실행 후 캔버스를 클릭하면 '<b>post uploaded successfully</b>'라는
        메세지와 함께 DB에 데이터가 저장 된 것을 확인할 수 있습니다.
    </div>
    <ImageBox src="/qna/supabaseDB/7.png" alt="supabaseDB_7" />
    <div>
        예시에서는 테이블 칼럼을 <b>content</b> 하나만 텍스트 타입으로 추가했기
        때문에,
        <span class="bg-black text-white"
            >.<span class="text-[#d2a8ff]">insert</span>(&lbrace;
            <span class="text-[#79c0ff]">content</span>:
            <span class="text-[#a5d6ff]">'11111'</span> &rbrace;)</span
        >과 같이 한 변수만 넣어주면 됩니다. 테이블에 추가로 변수를 넣었다면,
        변수명과 값을 추가해주면 됩니다.
    </div>

    <ImageBox src="/qna/supabaseDB/8.png" alt="supabaseDB_8" />
    <div>[<b>데이터 불러오기</b>]</div>
    <div>
        <b>setup</b>에서 <b>post</b> 테이블에 있는 모든 데이터를 한번 불러오는 예시입니다.
    </div>
    <div>
        <b>index.html</b> 내용은 [<b>데이터 입력하기</b>] 부분과 동일하며,
        <b>sketch.js</b>는 다음과 같습니다.
    </div>

    <CodeBoxAuto code={sketchJS_loadDB} />
</div>

<style>
    a {
        color: rgb(59 130 246);
    }
</style>
