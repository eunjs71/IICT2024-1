type LinkInfo = {
    title: string;
    link: string;
};

type QnaOutLinks = {
    [key: string]: LinkInfo[];
};

export const qnaInLinks = [
    {
        title: "Supabase DB에 텍스트 데이터 저장하기/불러오기",
        link: "/qna/supabaseDB",
    },

] as LinkInfo[];

export const qnaOutLinks = {
    "2023-2": [
        {
            title: "이미지 QR코드로 보여주기 - 1. 이미지 supabase에 업로드",
            link: "https://iict-2023-2.vercel.app/qna/QRcode1",
        },
        {
            title: "이미지 QR코드로 보여주기 - 2. 이미지 링크 QR코드로 변환하기",
            link: "https://iict-2023-2.vercel.app/qna/QRcode2",
        },
    ],
    "2023-1": [
        {
            title: "음성인식 라이브러리로 마이크를 통해 한국어 문장 가져오기",
            link: "https://eunjs71.github.io/IICT2023-1/#/qna/speechRec",
        },
        {
            title: "자연스럽게 팔로 방향 가리키기",
            link: "https://eunjs71.github.io/IICT2023-1/#/qna/pointingArm",
        },
        {
            title: "Impressionistic Filter",
            link: "https://eunjs71.github.io/IICT2023-1/#/qna/impression",
        },
        {
            title: "The Art of Living Filter - 1. Increasing Capture Contrast",
            link: "https://eunjs71.github.io/IICT2023-1/#/qna/highContrast",
        },
        {
            title: "The Art of Living Filter - 2. Face Masking (with ml5 Facemesh)",
            link: "https://eunjs71.github.io/IICT2023-1/#/qna/faceMasking",
        },
    ],
    "2022-2": [
        {
            title: "canvas 기준으로 Input 위치시키기",
            link: "https://eunjs71.github.io/ISC2022-2/Q&A/dom_input_positioning.html",
        },
        {
            title: "Input show(), hide() 제어하기",
            link: "https://eunjs71.github.io/ISC2022-2/Q&A/dom_input_control.html",
        },
        {
            title: "플랫폼 게임에서 이동 및 점프",
            link: "https://eunjs71.github.io/ISC2022-2/Q&A/move_queue.html",
        },
        {
            title: "블록 단위로 랜덤하게 Object 생성",
            link: "https://eunjs71.github.io/ISC2022-2/Q&A/block_generator.html",
        },
        {
            title: "캐릭터가 커지고 작아지는 잔상 효과 만들기",
            link: "https://eunjs71.github.io/ISC2022-2/Q&A/dash_shadow.html",
        },
        {
            title: "[HTML, CSS] 스케치 옆에 설명서 붙이기",
            link: "https://eunjs71.github.io/ISC2022-2/Q&A/how_to_use.html",
        },
        {
            title: "ml5.js의 Handpose 모델을 사용하여 원하는 순간에 손 위치 탐지하기",
            link: "https://eunjs71.github.io/ISC2022-2/Q&A/ml5_handpose.html",
        },
        {
            title: "draw() 함수 내에서 그림 그리기",
            link: "https://eunjs71.github.io/ISC2022-2/Q&A/drawing_pen.html",
        },
        {
            title: "스코어보드 만들기",
            link: "https://eunjs71.github.io/ISC2022-2/Q&A/score_board.html",
        },
        {
            title: "새로고침을 해도 유지되는 스코어보드 만들기",
            link: "https://eunjs71.github.io/ISC2022-2/Q&A/localstorage_score_board.html",
        },
    ],
} as QnaOutLinks;
