const subgenreMap = {
  "エレクトロ": {
    "説明": "1980年代初頭に登場した電子音楽のスタイルで、ファンクやヒップホップの影響を受けたリズムマシン主体のサウンドが特徴。ロボットボイスやシンセベースを多用し、後のエレクトロニカやEDMに多大な影響を与えた。",
    "代表アーティスト": [
      "Kraftwerk",
      "Egyptian Lover",
      "Aux 88",
      "Drexciya",
      "石野卓球"
    ],
    "代表曲": [
      "Kraftwerk - Numbers",
      "Egyptian Lover - Egypt, Egypt",
      "Aux 88 - Direct Drive",
      "Drexciya - Wavejumper"
    ]
  },
  "エレクトロクラッシュ": {
    "説明": "2000年代初頭に流行したサブジャンルで、エレクトロの復古的な要素にパンク、ニューウェーブ、シンセポップの感性を融合。荒削りなビートとレトロなシンセ音が特徴で、ファッション性やアート性も重視された。",
    "代表アーティスト": [
      "Fischerspooner",
      "Miss Kittin & The Hacker",
      "Peaches",
      "Adult."
    ],
    "代表曲": [
      "Fischerspooner - Emerge",
      "Miss Kittin & The Hacker - 1982",
      "Peaches - Set It Off",
      "Adult. - Hand to Phone"
    ]
  },
  "フューチャーベース": {
    "説明": "2010年代半ばに隆盛したEDMの一派で、柔らかく空間的なシンセサウンド、浮遊感のあるコード進行、ピッチ加工されたボーカルサンプルが特徴。エモーショナルでドリーミーな雰囲気を持ち、YouTubeやSoundCloudを通じて急速に広まった。",
    "代表アーティスト": [
      "Flume",
      "San Holo",
      "ILLENIUM",
      "Wave Racer",
      "Snail’s House"
    ],
    "代表曲": [
      "Flume - Never Be Like You",
      "San Holo - Light",
      "ILLENIUM - Good Things Fall Apart",
      "Wave Racer - Flash Drive"
    ]
  },
  "EDMポップ": {
    "説明": "エレクトロニック・ダンス・ミュージックとポップミュージックを融合したサウンドで、2010年代以降のチャートを席巻。明るくキャッチーなメロディに、EDMのビルドアップやドロップを組み合わせた構成が特徴。ラジオやストリーミング向きで、多くのポップアーティストがこのスタイルを取り入れた。",
    "代表アーティスト": [
      "Calvin Harris",
      "Zedd",
      "The Chainsmokers",
      "David Guetta",
      "中田ヤスタカ"
    ],
    "代表曲": [
      "Calvin Harris - Summer",
      "Zedd - Clarity",
      "The Chainsmokers - Closer",
      "David Guetta - Titanium"
    ]
  },
  "ビッグルーム": {
    "説明": "フェスやアリーナを意識したEDMの一派で、2010年代前半に大ブーム。4つ打ちのキック、大音量のドロップ、シンプルで爆発的な構成が特徴で、観客を煽ることに特化したサウンド。主にオランダやスウェーデンを拠点に活動するDJたちが牽引した。",
    "代表アーティスト": [
      "Martin Garrix",
      "Hardwell",
      "Blasterjaxx",
      "Dimitri Vegas & Like Mike",
      "banvox"
    ],
    "代表曲": [
      "Martin Garrix - Animals",
      "Hardwell - Spaceman",
      "Blasterjaxx - Faith",
      "Dimitri Vegas & Like Mike - Mammoth"
    ]
  },
  "ブロステップ": {
    "説明": "ダブステップから派生した攻撃的なサブジャンルで、重低音のワブルベース、激しいドロップ、金属的で歪んだサウンドが特徴。主にアメリカを中心に広まり、ヘッドバンギング系のクラブシーンで人気を博した。視覚的演出との親和性も高く、フェスやライブで映える。",
    "代表アーティスト": [
      "Skrillex",
      "Zomboy",
      "Excision",
      "Virtual Riot",
      "Dubscribe"
    ],
    "代表曲": [
      "Skrillex - Bangarang",
      "Zomboy - Terror Squad",
      "Excision - The Paradox",
      "Virtual Riot - Energy Drink"
    ]
  },
  "グリッチホップ": {
    "説明": "グリッチ（意図的な音の欠落やノイズ）とヒップホップ、ブレイクビーツを組み合わせた実験的なエレクトロ系ジャンル。独特なリズム構造と複雑な音響加工が特徴で、インスト系のビートメイカーに人気。ベースラインは太く、BPMは中速が多い。",
    "代表アーティスト": [
      "The Glitch Mob",
      "Opiuo",
      "Tipper",
      "Haywyre",
      "PARKGOLF"
    ],
    "代表曲": [
      "The Glitch Mob - We Can Make the World Stop",
      "Opiuo - Jelly",
      "Tipper - Surrounded",
      "Haywyre - Insight"
    ]
  },
  "トラップEDM": {
    "説明": "南部アメリカ発祥のヒップホップの“トラップ”から影響を受け、EDMに融合させたサブジャンル。特徴的なハイハット連打、808ベース、攻撃的なドロップが目立ち、フェスシーンでも爆発的人気を誇った。ダブステップやヒップホップとのクロスオーバーも活発。",
    "代表アーティスト": [
      "RL Grime",
      "Baauer",
      "TroyBoi",
      "Yellow Claw",
      "Taku Inoue"
    ],
    "代表曲": [
      "RL Grime - Stay For It",
      "Baauer - Harlem Shake",
      "TroyBoi - Afterhours",
      "Yellow Claw - Till It Hurts"
    ]
  }
};