import React from 'react'
import ExpectedImg from '../resources/img/Expected_Question_03.png'

import ButtonComponent from "./Question_03_Component";

/**
 * 【問３】コンポーネント呼出し
 *
 * React の関数コンポーネント呼出しを行ってください
 * ButtonComponent という名前で Question_03_Component.js の内容がすでに読み込まれています
 * このコンポーネントにプロパティを渡して描画してください
 *
 * 【ヒント】
 * コンポーネント呼出しは <コンポーネント名 /> でできます
 * 呼出したいコンポーネントは button と message というプロパティを待ち受けています
 */

export default function Question_03() {

  // コンポーネントに渡したい値
  const button = "なにもしないボタン";
  const message = "※押しても何も起きません";

  return (
    <div>
      <h1 className='question-title'>【問３】コンポーネント呼出し</h1>
      <div className='question-content'>
      {/* ↓↓↓ コンポーネント呼び出しを書く ↓↓↓ */}
      <ButtonComponent button={button} message={message} />
      {/* ↑↑↑ コンポーネント呼び出しを書く ↑↑↑ */}
      </div>
      <h1 className='question-title'>期待結果 (画像)</h1>
      <img src={ExpectedImg} />
    </div>
  );
}