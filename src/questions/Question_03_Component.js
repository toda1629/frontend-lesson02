import React from 'react'

/**
 * 【問３】コンポーネント呼出し
 *
 * ボタンコンポーネント
 */

export default function Question_03_Component(props) {
  return (
    <div>
      <h3>Question_03_Component</h3>
      <button>{props.button}</button>
      <span>{props.message}</span>
    </div>
  );
}