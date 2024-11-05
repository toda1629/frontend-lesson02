import React from 'react'
import { useState } from 'react';
import ExpectedImg from '../resources/img/Expected_Question_05.png'

/**
 * 【問５】 State の管理
 *
 * テキストインプットと、その入力値を表示する領域 (spanタグ) が用意されています
 * テキストを入力したとき、それぞれの内容が入力した値で更新されるように修正してください
 *
 * 【ヒント】
 * テキストインプットには state 変数が設定されていますが、その更新が行われていない状態です
 * state 変数は他の変数同様に {} で値を展開できます
 * テキストを入力したとき の処理は handleChange で定義されています
 */

export default function Question_04() {

  // state 変数
  const [text, setText] = useState("");

  // 入力値に変更が生じたときの処理
  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1 className='question-title'>【問５】 State の管理</h1>
      <div className='question-content'>
       
      </div>
      <h1 className='question-title'>期待結果 (画像)</h1>
      <img src={ExpectedImg} />
    </div>
  );
}