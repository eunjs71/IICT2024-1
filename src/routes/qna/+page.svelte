<script>
    import { qnaInLinks, qnaOutLinks } from "$lib/data/qna";
</script>

<div class="flex flex-col gap-6 qna">
    <div><b>Q&A</b></div>
    <div>
        {#each qnaInLinks as linkInfo}
            <div>
                - <a href={linkInfo.link}>{linkInfo.title}</a>
            </div>
        {/each}
    </div>
    {#each Object.keys(qnaOutLinks) as semester}
        <div>{semester}</div>
        <div>
            {#each qnaOutLinks[semester] as linkInfo}
                <div>
                    - <a href={linkInfo.link} target="_blank">
                        {linkInfo.title} ↗
                    </a>
                </div>
            {/each}
        </div>
    {/each}
</div>
