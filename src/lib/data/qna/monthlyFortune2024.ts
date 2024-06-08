export const monthlyLifeForecast = `const monthlyLifeForecast = [
    { energy: 81, wealth: 14, joy: 3, eventText: "이번 달은 에너지가 최고조에 달해 새로운 목표를 세우기에 좋습니다." },
    { energy: 94, wealth: 35, joy: 31, eventText: "적당한 에너지가 당신을 균형 있게 유지시켜줄 것입니다." },
    { energy: 28, wealth: 17, joy: 94, eventText: "에너지가 낮아지면 휴식과 재충전을 우선시하세요." },
    { energy: 13, wealth: 86, joy: 69, eventText: "활력이 넘쳐 새로운 프로젝트를 시작하기에 최적의 시기입니다." },
    { energy: 94, wealth: 69, joy: 11, eventText: "규칙적인 운동으로 현재의 에너지를 유지하세요." },
    { energy: 75, wealth: 54, joy: 4, eventText: "에너지가 떨어지면 천천히 쉬면서 회복할 시간이 필요합니다." },
    { energy: 3, wealth: 11, joy: 27, eventText: "높은 에너지가 목표 달성을 도와줄 것입니다." },
    { energy: 29, wealth: 64, joy: 77, eventText: "에너지가 안정적이어서 꾸준한 진전을 이루기 좋은 때입니다." },
    { energy: 25, wealth: 91, joy: 83, eventText: "무기력함을 느끼나요? 이번 달에는 수면과 건강한 식사를 우선시하세요." },
    { energy: 89, wealth: 69, joy: 53, eventText: "활력이 넘쳐 어떤 도전도 해낼 준비가 되어 있습니다." },
    { energy: 92, wealth: 8, joy: 48, eventText: "금전적인 행운이 다가오고 있으니 주의를 기울이세요." },
    { energy: 56, wealth: 19, joy: 20, eventText: "이번 달은 안정적인 재정 상태를 유지하여 저축하기 좋습니다." },
    { energy: 36, wealth: 37, joy: 44, eventText: "지출을 조심하세요, 예상치 못한 비용이 발생할 수 있습니다." },
    { energy: 69, wealth: 61, joy: 77, eventText: "투자 기회가 유망해 보입니다. 다양화하는 것을 고려하세요." },
    { energy: 13, wealth: 100, joy: 1, eventText: "재정적으로 안정되어 있어 몇 가지 사치를 누릴 수 있습니다." },
    { energy: 86, wealth: 83, joy: 89, eventText: "이번 달은 금전적으로 어려움이 있을 수 있으니 예산을 잘 관리하세요." },
    { energy: 17, wealth: 3, joy: 28, eventText: "새로운 수익 창출 방법을 찾아 미래를 확보할 수 있을 것입니다." },
    { energy: 89, wealth: 69, joy: 53, eventText: "예상치 못한 지출이 발생할 수 있으니 비상금을 준비해 두세요." },
    { energy: 29, wealth: 64, joy: 77, eventText: "재정 상태가 좋아져 전략적 투자가 가능해집니다." },
    { energy: 92, wealth: 8, joy: 48, eventText: "과거의 노력 덕분에 재정적 보상이 따릅니다." },
    { energy: 25, wealth: 91, joy: 83, eventText: "이번 달은 행복이 가득해 관계에 행복을 가져다줍니다." },
    { energy: 75, wealth: 54, joy: 4, eventText: "균형 잡힌 행복이 목표 달성을 돕습니다." },
    { energy: 13, wealth: 86, joy: 69, eventText: "행복 지수가 낮아질 수 있으니 자신을 돌보는 시간을 가지세요." },
    { energy: 94, wealth: 35, joy: 31, eventText: "행복이 넘쳐나는 달입니다. 긍정적인 에너지를 주변에 전파하세요." },
    { energy: 81, wealth: 14, joy: 3, eventText: "작은 것에서 큰 행복을 느낄 수 있는 달입니다." },
    { energy: 94, wealth: 69, joy: 11, eventText: "가족과 함께하는 시간이 많아져 행복을 느낄 수 있습니다." },
    { energy: 36, wealth: 37, joy: 44, eventText: "행복이 안정적이어서 평온한 시간을 보낼 수 있습니다." },
    { energy: 86, wealth: 83, joy: 89, eventText: "감정적인 기복이 있을 수 있으니 마음의 평화를 유지하세요." },
    { energy: 28, wealth: 17, joy: 94, eventText: "기쁨을 느끼며 하루하루를 즐길 수 있는 달입니다." },
    { energy: 56, wealth: 19, joy: 20, eventText: "행복한 순간들이 많아 기억에 남을 한 달이 될 것입니다." }
];`

export const addFortune = `const randomIndex = Math.floor(
    Math.random() * monthlyLifeForecast.length
);
fortunes.push(monthlyLifeForecast[randomIndex]`

export const computeMinMax = `function findMaxMinIndices(data, name) {
  let maxIndex = 0;
  let minIndex = 0;
  let maxValue = data[0][name];
  let minValue = data[0][name];

  for (let i = 1; i < data.length; i++) {
    if (data[i][name] > maxValue) {
      maxValue = data[i][name];
      maxIndex = i;
    }
    if (data[i][name] < minValue) {
      minValue = data[i][name];
      minIndex = i;
    }
  }
  return { maxIndex, minIndex };
}

energyMinMax = findMaxMinIndices(fortunes, "energy");
wealthMinMax = findMaxMinIndices(fortunes, "wealth");
joyMinMax = findMaxMinIndices(fortunes, "joy");
`

export const overviewMonthly = `function drawOverviewMonthly() {
  background(0);
  fill(255);
  text("2024년 요약", width / 2, 100);
  for(let i in monthlyButtons){
    let btn = monthlyButtons[i]
    btn.draw()
    if(btn.isMouseOver()){
      fill(255)
      text(fortunes[i].eventText, width/2, 210)
    }
  }
}`