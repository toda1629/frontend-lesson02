## 表示の確認　ローカルサーバーで起動
```
    npm run start
```


## 時間を表示させる

    const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0'); // 時間
      const minutes = String(now.getMinutes()).padStart(2, '0'); // 分
      const currentTime = `${hours}:${minutes}`; // "HH:MM:SS" 形式で表示
