export const getAllPokemon = (url) => {
  // 非同期処理で実行するため、Promiseを使用
  return new Promise((resolve, reject) => {
    // fetchでデータを取得する
    fetch(url)
      // データを取得できたらJSON形式で返す
      .then((res) => res.json())
      // JSON形式になったものをデータとして受けとり、resolve関数で「成功した」とデータを返す
      .then((data) => resolve(data));
  });
};