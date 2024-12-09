const candidates = [
    "BB1 10s1", "BB1 10s2", "BB1 90s1", "BB1 Comp1", "BB1 Comp2", "BB1 Comp3", "BB1 Comp4", "BB1 Hit1",
    "BB1 Hit2", "BB1 Hit3", "BB1 Hit4", "BB1 Hit5", "BB1 Hit6", "BB1 Hit7", "BB1 Hit8", "BB1 Hit9", "BB1 Hit10",
    "BB1 Hit11", "BB1 Hous1", "BB1 Hous2", "BB1 DVGT", "BB1 Queen", "BB1 TSFT", "BB1 GRMY65", "BB2 10s1",
    "BB2 10s2", "BB2 Hit1", "BB2 Hit2", "BB2 Hit3", "BB2 Hit4", "BB2 Hit5", "BB2 Hit6", "BB2 Hit7", "BB2 Hit8",
    "BB2 Hit9", "BB2 Hit10", "BB2 Hit11", "BB2 Hit12", "BB2 Hit13", "BB2 Hit14", "BB2 Hit15", "BB2 Hit16",
    "BB2 Hit17", "BB2 Hit18", "BB2 Hit19", "BB2 Hit20", "BB2 Hit21", "BB2 Hit22", "BB2 Comp1", "BB2 Comp2",
    "BB2 Comp3", "BB2 Comp4", "BB2 Comp5", "BB2 Comp6", "BB2 90s1", "BB2 90s2", "BB2 UPGD1", "BB2 UPGD2",
    "BB2 UPGD3", "BB2 HH1", "BB2 HH2", "BB2 Hous1", "BB2 Hous2", "BB2 Hous3", "BB2 Hous4", "BB2 Metal1",
    "BB2 Metal2", "BB2 Jazz1", "BB2 Deep1", "BB2 Deep2", "BB2 Deep3", "BB2 Jonas", "BB2 Justin", "BB2 MDNA",
    "BB2 MJ1", "BB2 MJ2", "BB2 MJ3", "BB2 MLN1", "BB2 MLN2", "BB2 MLN3", "BB2 Soul1", "BB2 Soul2", "BB2 Rock1",
    "BB2 Rock2", "BB2 Movie1", "BB2 Movie2", "BB2 MTGX", "BB2 P!NK", "BB2 PTX", "BB2 QOP1", "BB2 Queen",
    "BB2 Regg1", "BB2 Regg2", "BB2 RHNA", "BB2 SUMR1", "BB2 SUMR2", "BB2 Xmas1", "BB2 Xmas2", "BB2 Xmas3",
    "BB2 BTLS1", "BB2 BTLS2", "BB2 BTLS3", "BB2 ARGD", "BB2 ADELE", "BB2 Beyonce", "BB2 BRJ", "BB2 BRMS1",
    "BB2 BM1", "BB2 Avicii", "BB2 DVGT", "BB2 EDM", "BB2 FLG", "BB2 GRDY", "BB2 ZEDD", "BB2 1D", "BB2 BNJV",
    "BB2 BRIT2023", "BB2 BRMS2", "BB2 CDPY", "BB2 CSBW", "BB2 CVHS", "BB2 Dua Lipa", "BB2 EDSR", "BB2 EMINEM",
    "BB2 FLOB", "BB2 HBHC", "BB2 Kygo", "BB2 Lady Gaga", "BB2 LIZZO", "BB2 Mroon5", "BB2 Ne-yo", "BB2 USHER",
    "BB2 SMST", "BB2 CDPY", "BB2 R&B1", "BB2 R&B2", "BB2 3Y-1", "BB2 3Y-2", "BB2 2016", "BB2 2017", "BB2 2018",
    "BB2 2019", "BB2 10s1", "BB3 Hit1", "BB3 Hit2", "BB3 Hit3", "BB3 Hit4", "BB3 Hit5", "BB3 Hit6", "BB3 UPGD1",
    "BB3 Comp1", "BB3 HH1", "BB3 HH2", "BB3 Hous1", "BB3 Hous2", "BB3 Hous3", "BB3 Deep1", "BB3 Regg1",
    "BB3 World1", "BB3 Soul1", "BB3 Rock1", "BB3 Rock2", "BB3 IRMD", "BEERCYCLE", "BSW Hit1", "BSW Hit2",
    "BSW Hit3", "BSW Hit4", "BSW Hit5", "BSW Hit6", "BSW Hit7", "BSW Hit8", "BSW Hous1", "BSW Hous2", "BSW Comp1",
    "BSW Comp2", "BSW Comp3", "BSW Rock1", "BSW Soul1", "BSW Jazz1", "BSW Regg1", "BSB 10s1", "BSB Hit1",
    "BSB Hit2", "BSB Hit3", "BSB Hit4", "BSB Hit5", "BSB Hit6", "BSB Hit7", "BSB Hous1", "BSB Comp1", "BSB Rock1",
    "BSB Deep1", "BSB Jazz1", "BSB Regg1", "BSL Hit1", "BSL Hit2", "BSL Hit3", "BSL Hit4", "BSL Hit5", "BSL Hit6",
    "BSL Hit7", "BSL Hit8", "BSL Hous1", "BSL Hous2", "BSL Comp1", "BSL Rock1", "BSL Deep1", "BSL Deep2",
    "BSWi Hous1", "BSWi Hous2", "BSWi Hous3", "BSWi HH1", "BSWi Metal1", "BSBi Hous1", "BSBi Hous2", "SKRILLEX",
    "FEEL NOW", "7th SP", "8th SP", "9th SP1", "9th SP2", "10th SP", "FEEL DEEP", "FEEL HIGH", "BSW R&B1",
    "BB2 Hous6", "BSW 10s1", "BB2 GRMY66", "L24 FEEL", "L24 FREE", "BB1 BRIT2024", "BB2 Dua Lipa2", "BSWi BMLY",
    "BSBi BMLY", "BB1 Hous3", "BB3 Hous4", "BB1 NOW1", "BSL Deep3", "BB2 10s3", "L24 FREE2", "L24 FEEL2",
    "BB1 Hous4", "BB2 Xmas4", "BB2 CHARLI"
  ];
  
const resultElement = document.getElementById('result');
const drawButton = document.getElementById('drawButton');
const historyList = document.getElementById('historyList');

let history = []; // 過去の結果を保存する配列

drawButton.addEventListener('click', function () {
  let interval = setInterval(() => {
    resultElement.textContent = candidates[Math.floor(Math.random() * candidates.length)];
  }, 400); // 0.4秒ごとにランダム候補を表示

  setTimeout(() => {
    clearInterval(interval); // 3秒後にランダム表示を停止
    const finalResult = candidates[Math.floor(Math.random() * candidates.length)];
    resultElement.textContent = finalResult;
    addToHistory(finalResult); // 過去の結果に追加
  }, 3000); // 最終結果を表示
});

// 過去の結果をリストに追加し、最大10件まで表示
function addToHistory(result) {
  history.unshift(result); // 新しい結果を先頭に追加
  if (history.length > 5) history.pop(); // 5件を超えたら最後の要素を削除

  // リストを更新
  historyList.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}
