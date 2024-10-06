import React from 'react'
import ExpectedImg from '../resources/img/Expected_Question_01.png'

/**
 * 【問１】React要素の作成
 *
 * 定数 message, date, id の内容をもとにReact要素を作成し、画面に描画してください
 * なお、以下の条件を満たすように要素を作成してください
 *
 * 1. コメントの指示に従い、定数の内容を修正すること
 * 2. import されている React モジュールを利用し、Reactの要素を生成すること
 * 3. message の内容は、 h1 タグで表示すること
 * 4. date の内容は、 div タグで表示すること
 * 5. id の内容は、 p タグで表示すること
 *
 * 【ヒント】
 * React 要素の生成は React.createElement でできる
 * JS の変数や定数を描画するときは {} で囲う必要がある
 * JSX 記法で直接記載してもOKとする
 */

export default function Question_01() {

  // 定数群
  const message = "Hello World!";   // 変更しない
  const date = "2024/10/06";    // 本日の日付 (YYYY/MM/DD)
  const id = "001";         // 出席番号

  return (
    <div>
      <h1 className='question-title'>【問１】React要素の作成</h1>
      <div className='question-content'>
      {/* ↓↓↓ 描画する内容を書く ↓↓↓ */}
      <h1>{message}</h1>
      <div>{date}</div>
      <p>{id}</p>

      {/* ↑↑↑ 描画する内容を書く ↑↑↑ */}
      </div>
      <h1 className='question-title'>期待結果 (画像)</h1>
      <img src={ExpectedImg} />
    </div>
  );
}