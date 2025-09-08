const candidates = [
    "BB1 10s 1", "BB1 10s 2", "BB1 90s 1", "BB1 Comp 1", "BB1 Comp 2", "BB1 Comp 3", "BB1 Comp 4", "BB1 Hit 1",
    "BB1 Hit 2", "BB1 Hit 3", "BB1 Hit 4", "BB1 Hit 5", "BB1 Hit 6", "BB1 Hit 7", "BB1 Hit 8", "BB1 Hit 9", "BB1 Hit 10",
    "BB1 Hit 11", "BB1 Hous 1", "BB1 Hous 2", "BB1 DVGT", "BB1 Queen", "BB1 TSFT", "BB1 GRMY 65", "BB2 10s 1",
    "BB2 10s 2", "BB2 Hit 1", "BB2 Hit 2", "BB2 Hit 3", "BB2 Hit 4", "BB2 Hit 5", "BB2 Hit 6", "BB2 Hit 7", "BB2 Hit 8",
    "BB2 Hit 9", "BB2 Hit 10", "BB2 Hit 11", "BB2 Hit 12", "BB2 Hit 13", "BB2 Hit 14", "BB2 Hit 15", "BB2 Hit 16",
    "BB2 Hit 17", "BB2 Hit 18", "BB2 Hit 19", "BB2 Hit 20", "BB2 Hit 21", "BB2 Hit 22", "BB2 Comp 1", "BB2 Comp 2",
    "BB2 Comp 3", "BB2 Comp 4", "BB2 Comp 5", "BB2 Comp 6", "BB2 90s 1", "BB2 90s 2", "BB2 UPGD 1", "BB2 UPGD 2",
    "BB2 UPGD 3", "BB2 HH 1", "BB2 HH 2", "BB2 Hous 1", "BB2 Hous 2", "BB2 Hous 3", "BB2 Hous 4", "BB2 Metal 1",
    "BB2 Metal 2", "BB2 Jazz 1", "BB2 Deep 1", "BB2 Deep 2", "BB2 Deep 3", "BB2 JONAS", "BB2 JUSTIN", "BB2 MDNA",
    "BB2 MJ 1", "BB2 MJ 2", "BB2 MJ 3", "BB2 MLN 1", "BB2 MLN 2", "BB2 MLN 3", "BB2 Soul 1", "BB2 Soul 2", "BB2 Rock 1",
    "BB2 Rock 2", "BB2 Movie 1", "BB2 Movie 2", "BB2 MTGX", "BB2 P!NK", "BB2 PTX", "BB2 QOP 1", "BB2 Queen",
    "BB2 Regg 1", "BB2 Regg 2", "BB2 RHNA", "BB2 SUMR 1", "BB2 SUMR 2", "BB2 Xmas 1", "BB2 Xmas 2", "BB2 Xmas 3",
    "BB2 BTLS 1", "BB2 BTLS 2", "BB2 BTLS 3", "BB2 ARGD", "BB2 ADELE", "BB2 BEYONCE", "BB2 BRJ", "BB2 BRMS",
    "BB2 BMLY", "BB2 Avicii", "BB2 DVGT", "BB2 EDM", "BB2 FLG", "BB2 GRDY", "BB2 ZEDD", "BB2 1D", "BB2 BNJV",
    "BB2 BRIT 2023", "BB2 BRMS 2", "BB2 CDPY", "BB2 CSBW", "BB2 CVHS", "BB2 Dua Lipa", "BB2 EDSR", "BB2 EMINEM",
    "BB2 FLOB", "BB2 HBHC", "BB2 KYGO", "BB2 LDGG", "BB2 Lizzo", "BB2 MRN5", "BB2 NE-YO", "BB2 USHER", "BB2 USHER 2",
    "BB2 SMST", "BB2 CDPY 2", "BB2 R&B 1", "BB2 R&B 2", "BB2 3Y-1", "BB2 3Y-2", "BB2 2016", "BB2 2017", "BB2 2018",
    "BB2 2019", "BB3 Hit 1", "BB3 Hit 2", "BB3 Hit 3", "BB3 Hit 4", "BB3 Hit 5", "BB3 Hit 6", "BB3 UPGD 1",
    "BB3 Comp 1", "BB3 HH 1", "BB3 HH 2", "BB3 Hous 1", "BB3 Hous 2", "BB3 Hous 3", "BB3 Deep 1", "BB3 Regg 1",
    "BB3 World 1", "BB3 Soul 1", "BB3 Rock 1", "BB3 Rock 2", "BB3 IRMD", "BEERCYCLE", "BSW Hit 1", "BSW Hit 2",
    "BSW Hit 3", "BSW Hit 4", "BSW Hit 5", "BSW Hit 6", "BSW Hit 7", "BSW Hit 8", "BSW Hous 1", "BSW Hous 2", "BSW Comp 1",
    "BSW Comp 2", "BSW Comp 3", "BSW Rock 1", "BSW Soul 1", "BSW Jazz 1", "BSW Regg 1", "BSB 10s 1", "BSB Hit 1",
    "BSB Hit 2", "BSB Hit 3", "BSB Hit 4", "BSB Hit 5", "BSB Hit 6", "BSB Hit 7", "BSB Hous 1", "BSB Comp 1", "BSB Rock 1",
    "BSB Deep 1", "BSB Jazz 1", "BSB Regg 1", "BSL Hit 1", "BSL Hit 2", "BSL Hit 3", "BSL Hit 4", "BSL Hit 5", "BSL Hit 6",
    "BSL Hit 7", "BSL Hit 8", "BSL Hous 1", "BSL Hous 2", "BSL Comp 1", "BSL Rock 1", "BSL Deep 1", "BSL Deep 2",
    "BSWi Hous 1", "BSWi Hous 2", "BSWi Hous 3", "BSWi HH 1", "BSWi Metal 1", "BSBi Hous 1", "BSBi Hous 2", "SKRILLEX",
    "FEEL NOW", "8th SP", "9th SP 1", "9th SP 2", "10th SP", "FEEL DEEP", "FEEL HIGH", "BSW R&B 1",
    "BB2 Hous 6", "BSW 10s 1", "BB2 GRMY 66", "L 24 FEEL", "L 24 FREE", "BB1 BRIT 2024", "BB2 Dua Lipa 2", "BSWi BMLY",
    "BSBi BMLY", "BB1 Hous 3", "BB3 Hous 4", "BB1 NOW 1", "BSL Deep 3", "BB2 10s 3", "L 24 FREE 2", "L 24 FEEL 2",
    "BB1 Hous 4", "BB2 Xmas 4", "BB2 CHARLI", "BB2 RDMC", "BB2 RHCP", "BB2 JMCL", "BB2 Jeff Beck", "BB2 SIGALA", 
    "BB2 CSBW 2", "BB2 NOW 1", "BSW L&S", "BB1 GRMY 67", "BB2 BRIT 2025", "BB2 LDGG 2", "BB2 NOW 2", "BB2 10s 4", "BSL Deep 4",
    "BSW Hous 3", "BB2 Hous 7", "BSB HH 2", "L 25 FEEL", "L 25 FREE", "BSWi Hous 4", "L 25 BTM", "BB3 10s 1", "BB1 NOW 2",
    "BSBi Deep 1",
  ];
  
const resultElement = document.getElementById('result');
const drawButton = document.getElementById('drawButton');
const historyList = document.getElementById('historyList');

let availableCandidates = [...candidates]; // 抽選可能な候補リスト
let history = []; // 過去の結果を保存する配列

// 文字列に応じてスタイル（背景色と文字色）を適用する関数
function applyStyle(element, text) {
  // デフォルトスタイルをリセット
  element.style.background = 'transparent';
  element.style.color = 'white';
  element.style.padding = '20px 40px'; // 帯のように見せるためのpadding
  
  // 優先順位の高い順にチェック
  if (text.includes("FEEL NOW G")) {
    element.style.background = '#B08A3A';
    element.style.color = 'white';
  } else if (text.includes("FEEL NOW S")) {
    element.style.background = '#666666';
    element.style.color = 'white';
  } else if (text.includes("FEEL NOW B")) {
    element.style.background = '#00121C';
    element.style.color = 'white';
  } else if (text.includes("FEEL HIGH")) {
    element.style.background = 'white';
    element.style.color = 'black';
  } else if (text.includes("FEEL DEEP")) {
    element.style.background = 'white';
    element.style.color = 'black';
  } else if (text.includes("ITS")) {
    element.style.background = 'black';
    element.style.color = 'white';
  } else if (text.includes("BEERCYCLE")) {
    element.style.background = '#7A3202';
    element.style.color = 'white';
  } else if (text.includes("SKRILLEX")) {
    element.style.background = 'white';
    element.style.color = 'black';
  } else if (text.includes("BTM")) {
    element.style.background = '#00121C';
    element.style.color = '#BD3EA4';
  } else if (text.includes("FREE")) {
    element.style.background = '#00121C';
    element.style.color = '#D61C1C';
  } else if (text.includes("FEEL")) {
    element.style.background = '#00121C';
    element.style.color = '#0761F1';
  } else if (text.includes("SP")) {
    element.style.background = '#00121C';
    element.style.color = 'white';
  } else if (text.includes("BSBi")) {
    element.style.background = '#336699';
    element.style.color = '#DEFF66';
  } else if (text.includes("BSB")) {
    element.style.background = '#00CCFF';
    element.style.color = 'black';
  } else if (text.includes("BSWi")) {
    element.style.background = '#990099';
    element.style.color = '#FFEF7F';
  } else if (text.includes("BSW")) {
    element.style.background = '#CC66FF';
    element.style.color = 'white';
  } else if (text.includes("BSL")) {
    element.style.background = '#0000CC';
    element.style.color = 'white';
  } else if (text.includes("BB3")) {
    element.style.background = '#FF3300';
    element.style.color = 'black';
  } else if (text.includes("BB2")) {
    element.style.background = '#FF9933';
    element.style.color = 'black';
  } else if (text.includes("BB1")) {
    element.style.background = '#FFFF66';
    element.style.color = 'black';
  }
}

drawButton.addEventListener('click', function () {
  if (availableCandidates.length === 0) {
    resultElement.textContent = "すべて選ばれました！";
    applyStyle(resultElement, "");
    return;
  }

  let interval = setInterval(() => {
    const randomCandidate = availableCandidates[Math.floor(Math.random() * availableCandidates.length)];
    resultElement.textContent = randomCandidate;
    applyStyle(resultElement, randomCandidate);
  }, 150); // 0.15秒ごとにランダム候補を表示

  setTimeout(() => {
    clearInterval(interval); // 3秒後にランダム表示を停止
    const finalResult = drawRandomCandidate(); // 候補を1つ選択
    resultElement.textContent = finalResult;
    applyStyle(resultElement, finalResult);
    addToHistory(finalResult); // 過去の結果に追加
  }, 3000); // 最終結果を表示
});

// 候補をランダムに1つ選び、リストから削除
function drawRandomCandidate() {
  const index = Math.floor(Math.random() * availableCandidates.length);
  const selectedCandidate = availableCandidates[index];
  availableCandidates.splice(index, 1); // 選択した候補をリストから削除
  return selectedCandidate;
}

// 過去の結果をリストに追加し、最大5件まで表示
function addToHistory(result) {
  history.unshift(result); // 新しい結果を先頭に追加
  if (history.length > 5) history.pop(); // 5件を超えたら最後の要素を削除

  // リストを更新
  historyList.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.style.padding = '5px 15px';
    li.style.display = 'inline-block';
    li.style.margin = '5px'; // 上下左右に同じ間隔
    applyStyle(li, item); // 履歴にも同じスタイルを適用
    historyList.appendChild(li);
  });
}
