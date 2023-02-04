import { useEffect } from 'react';
import './App.css';

import { getAllPokemon } from './utils/pokemon';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  // リロード時にポケモンのデータを全て取得
  // 呼び出しは一度だけなので、第二引数は空の配列で指定
  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      // awaitで、getAllPokemon(Promiseの処理)が終わるまで待たせる処理
      let res = await getAllPokemon(initialURL);
      console.log(res)
    };
    fetchPokemonData();
  }, [])


  return (
    <div className="App">
    </div>
  );
}

export default App;
