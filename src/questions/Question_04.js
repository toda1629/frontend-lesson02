import React from 'react'
import ExpectedImg from '../resources/img/Expected_Question_04.png'

/**
 * 【問４】 イベントリスナの設定
 *
 * 表示されているボタンにイベントリスナの設定を行ってください
 * ボタン本体と、ボタンが押されたときに実行したい処理 handleOnClick は定義済みです
 * これらを接続しボタンが押されたときにアラートが表示されるように修正してください
 *
 * 【ヒント】
 * onClick を設定することでボタンが押されたときの処理が設定できます
 */

export default function Question_04() {

  // ボタンが押されたときに実行したい処理
  function handleOnClick() {
    alert("ボタンが押されました！！");
  }

  return (
    <div>
      <h1 className='question-title'>【問４】 イベントリスナの設定</h1>
      <div className='question-content'>
      {/* ↓↓↓ イベントリスナの設定を書く ↓↓↓ */}
      <button onClick={handleOnClick}>押してね</button>
      {/* ↑↑↑ イベントリスナの設定を書く ↑↑↑ */}
      </div>
      <h1 className='question-title'>期待結果 (画像)</h1>
      <img src={ExpectedImg} />
    </div>
  );
}