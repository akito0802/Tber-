
document.addEventListener("DOMContentLoaded", function () {
  const genreSelect = document.getElementById("genre");
  const subgenreSelect = document.getElementById("subgenre");
  const detailDisplay = document.getElementById("genreDetail");

  const subgenreMap = {
    "K-POP": [
      "ガールクラッシュ系",
      "ボーイズグループ系",
      "ダンスK-POP",
      "バラード系K-POP",
      "トロットK-POP",
      "EDM系K-POP",
      "K-バンドサウンド"
    ]
  };

  const genreData = {
    "ガールクラッシュ系": {
      description: "力強さ、カリスマ性、独立した女性像を前面に押し出すスタイル。ビジュアル・ダンス・歌詞の全体がパワフルで自信に満ちているのが特徴。",
      artist: "BLACKPINK、ITZY、LE SSERAFIM",
      song: "BLACKPINK - Kill This Love"
    },
    "ボーイズグループ系": {
      description: "男性アイドルグループによるK-POPスタイル。ジャンルは多様だが、ビジュアル、パフォーマンス、ストーリー性などが一体となっている。",
      artist: "BTS、EXO、SEVENTEEN、Stray Kids",
      song: "BTS - Dynamite"
    },
    "ダンスK-POP": {
      description: "中毒性のある振付やビートが中心で、パフォーマンス映えする楽曲が多い。EDMやヒップホップの要素を取り入れていることが多い。",
      artist: "TWICE、NCT 127、IVE",
      song: "TWICE - Fancy"
    },
    "バラード系K-POP": {
      description: "感情豊かで叙情的なメロディを中心に、恋愛や別れ、希望などを描いたバラードスタイル。歌唱力が重視される。",
      artist: "EXO（D.O.）、IU、Baekhyun",
      song: "IU - Through the Night"
    },
    "トロットK-POP": {
      description: "韓国伝統のトロット音楽を現代風にアレンジしたスタイル。年配層だけでなく若年層にも再評価されている。",
      artist: "Jang Yoon-jeong、Young Tak、Lim Young-woong",
      song: "Jang Yoon-jeong - Omona"
    },
    "EDM系K-POP": {
      description: "K-POPにエレクトロニック・ダンス・ミュージックの要素を取り入れたスタイルで、クラブ映え・フェス映えする曲が多い。",
      artist: "aespa、BIGBANG、MONSTA X",
      song: "aespa - Next Level"
    },
    "K-バンドサウンド": {
      description: "K-POPにおいて、バンド編成による演奏を主体としたスタイル。ポップ、ロック、オルタナティブなど多彩。",
      artist: "DAY6、N.Flying、The Rose",
      song: "DAY6 - You Were Beautiful"
    }
  };

  genreSelect.addEventListener("change", function () {
    const selectedGenre = genreSelect.value;
    subgenreSelect.innerHTML = "";

    if (subgenreMap[selectedGenre]) {
      subgenreMap[selectedGenre].forEach(function (sub) {
        const option = document.createElement("option");
        option.value = sub;
        option.textContent = sub;
        subgenreSelect.appendChild(option);
      });
    }

    detailDisplay.innerHTML = "";
  });

  subgenreSelect.addEventListener("change", function () {
    const selectedSub = subgenreSelect.value;
    const data = genreData[selectedSub];

    if (data) {
      detailDisplay.innerHTML = `
        <h2>${selectedSub}</h2>
        <p><strong>説明：</strong>${data.description}</p>
        <p><strong>代表アーティスト：</strong>${data.artist}</p>
        <p><strong>代表曲：</strong>${data.song}</p>
      `;
    } else {
      detailDisplay.innerHTML = "<p>ジャンル情報は現在準備中です。</p>";
    }
  });

  // 初期表示でイベント発火させる
  genreSelect.dispatchEvent(new Event("change"));
});
