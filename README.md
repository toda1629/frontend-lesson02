# Web科 前期末テスト

## 概要

前期で実施した内容について実技形式で試験を行う。  
下記の手順にそってリポジトリを複製し、各問題の回答を作成すること。  

回答の提出はPullRequestの作成をもって完了とみなす。  
また、コミット日時がテスト終了時間以降の修正に関しては評価対象外とするので注意すること。  
`※あとからPR修正するのはダメです。`

**時間**　：　50min  


## 項目

| 試験項目 | 領域 | 想定時間 (min) |
| - | - | - |
|リポジトリのフォーク (Fork)|GitHub|2.5|
|リポジトリのクローン (clone)|git|5|
|【問１】 React要素の作成|React|5|
|【問２】 Array 操作|JavaScript|5|
|【問３】 コンポーネント呼出し|React|5|
|【問４】 イベントリスナの設定|React|5|
|【問５】 State の管理|React|10|
|コミットの作成 (commit)|git|5|
|ブランチのプッシュ (push)|git|5|
|プルリクエストの作成 (PullRequest)|GitHub|2.5|

`※プルリク提出で評価対象とする`

## 手順

① リポジトリ複製

Fork ボタンを押下し、リポジトリを複製してください。  
ただし Fork したリポジトリの名称は `frontend-test-fork` とすること。  

次に Fork したリポジトリをローカルに clone してください。  
clone が完了した後、ソースを編集するためにリポジトリを VSCode で開いてください。  

`※cloneするとリポジトリ名と同じフォルダがローカルに作成されます`

② 動作確認

以下のコマンドを実行してください。  
少々時間がかかる可能性があるため、コマンド実行後は次の手順へ進んで問題ありません。  
処理の完了後ブラウザが立ち上がります。  

```
npm install -s ; npm run start
```

停止させるにはターミナル上で Command + C を押してください。  
再度実行したい場合は `npm run start` を実行してください。  


③ 回答作成

/src/questions/ 配下に各問題とソースが配置されています。  
問題をよく読み、指定された動作が実行されるように修正を行ってください。  


④ コミットの作成とプッシュ

回答内容をコミットしてください。  
コミットは複数回に分けても構いません。  

コミットが作成できたらプッシュを行い、修正内容を GitHub へ反映してください。  

⑤ プルリクエストの作成

Fork 元リポジトリの master ブランチへプルリクエストを作成してください。  
title や description は自由に記載してOKです、デフォルトで構いません。  



## ヒント

#### Fork するボタン

![](/src/resources/img/btn-fork.png)

### clone するための情報

![](/src/resources/img/info-clone.png)

### git 操作

- リポジトリの複製

```
git clone [リポジトリのアドレス]

【例】
git clone git@github.com:roar-ar/learning-react.git 
```

- リポジトリの状態を確認

```
git status
```

- コミット作成

```
git add [コミット対象にしたいファイルパス]
git commit -m "コミットメッセージ"

【例】
git add src/new-file.txt
git commit -m "new-file.txtを追加した"
```

- ブランチのプッシュ

```
git push [remote名] [ブランチ名]

【例】
git push origin my-branch-name
```




### プルリクエスト作成を始めるボタン

![](/src/resources/img/btn-contribute.png)