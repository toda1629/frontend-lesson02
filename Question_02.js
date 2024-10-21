import React from 'react'
import ExpectedImg from '../resources/img/Expected_Question_02.png'

/**
 * 【問２】Array（配列） 操作
 *
 * 定数 kyusyu には九州地方の各県の情報が保存されています
 * 現状は配列の先頭から順番に情報を表示している状態です
 * ここで、以下の指示に従って表示内容を変更してください
 *
 * 1. 各項目の先頭に番号（１始まり）を付与すること
 * 2. 人口の降順で表示するように変更すること
 *
 * 【ヒント】
 * Array.map 関数のコールバックには配列の添字番号を受け取る引数 index がある
 * Array.sort 関数を利用すると配列の並べ替えが実現できる
 */

export default function Question_02() {

  // 定数群
  const kyusyu = [
    { "name" : "福岡県", "population" : 5135214 },
    { "name" : "佐賀県", "population" : 811442 },
    { "name" : "長崎県", "population" : 1312317 },
    { "name" : "熊本県", "population" : 1738301 },
    { "name" : "大分県", "population" : 1123852 },
    { "name" : "宮崎県", "population" : 1069576 },
    { "name" : "鹿児島県", "population" : 1588256 },
    { "name" : "沖縄県", "population" : 1467480 }
  ];

  const result = kyusyu.map((el, index) => {
    return (
      <li key={index}>
       
      </li>
    );
  });

  return (
    <div>
      <h1 className='question-title'>【問２】Array 操作</h1>
      <div className='question-content q2'>
        <ul>
        {/* ここに表示させる */}
        
        </ul>
      </div>
      <h1 className='question-title'>期待結果 (画像)</h1>
      <img src={ExpectedImg} />
    </div>
  );
}