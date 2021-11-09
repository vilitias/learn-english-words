import "./App.css";
// import bgTexture from "./images/bg-texture.jpg";style={{ backgroundImage: `url(${bgTexture})` }}
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Learning from "./components/Learning/Learning";

function App() {
  const [themes, setThemes] = useState(["body", "appearance"]);
  const [allWords, setAllWords] = useState([
    {
      _id: "618248281db151eec6767f87",
      englWord: "man",
      englTranscription: "[mæn]",
      ruslWord: "человек, мужчина",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f89",
      englWord: "body",
      englTranscription: "[‘bɔdɪ]",
      ruslWord: "тело",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f88",
      englWord: "woman",
      englTranscription: "[‘wumən]",
      ruslWord: "женщина",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f8c",
      englWord: "arm",
      englTranscription: "[ɑːm]",
      ruslWord: "рука",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f8b",
      englWord: "shoulder",
      englTranscription: "[‘ʃəuldə]",
      ruslWord: "плечо",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f8a",
      englWord: "head",
      englTranscription: "[hed]",
      ruslWord: "голова",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f8f",
      englWord: "chest",
      englTranscription: "[ʧest]",
      ruslWord: "грудная клетка",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f8e",
      englWord: "elbow",
      englTranscription: "[‘elbəu]",
      ruslWord: "локоть",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f90",
      englWord: "stomach",
      englTranscription: "[‘stʌmək]",
      ruslWord: "живот, желудок",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f8d",
      englWord: "hand",
      englTranscription: "[hænd]",
      ruslWord: "рука (кисть)",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f92",
      englWord: "bottom",
      englTranscription: "[‘bɔtəm]",
      ruslWord: "зад",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f93",
      englWord: "thigh",
      englTranscription: "[θaɪ]",
      ruslWord: "бедро",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f95",
      englWord: "leg",
      englTranscription: "[leg]",
      ruslWord: "нога",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f94",
      englWord: "waist",
      englTranscription: "[weɪst]",
      ruslWord: "талия",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f91",
      englWord: "back",
      englTranscription: "[bæk]",
      ruslWord: "спина",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f97",
      englWord: "calf (calves)",
      englTranscription: "[kɑːf] [kɑːvz]",
      ruslWord: "икра (икры ног)",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f98",
      englWord: "foot (feet)",
      englTranscription: "[fut] [fiːt]",
      ruslWord: "ступня (ступни)",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f99",
      englWord: "ankle",
      englTranscription: "[‘æŋkl]",
      ruslWord: "лодыжка",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f9a",
      englWord: "heel",
      englTranscription: "[hiːl]",
      ruslWord: "пятка",
      theme: "body",
    },
    {
      _id: "618248281db151eec6767f96",
      englWord: "knee",
      englTranscription: "[niː]",
      ruslWord: "колено",
      theme: "body",
    },
    {
      _id: "61824bb7f7c72eaf940bbfb8",
      englWord: "appearance",
      englTranscription: "[ə’pɪər(ə)n(t)s]",
      ruslWord: "внешность",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfba",
      englWord: "fat",
      englTranscription: "[fæt]",
      ruslWord: "толстый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfb9",
      englWord: "thin",
      englTranscription: "[θɪn]",
      ruslWord: "худой",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfbc",
      englWord: "short",
      englTranscription: "[ʃɔːt]",
      ruslWord: "невысокий",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfbd",
      englWord: "weak",
      englTranscription: "[wiːk]",
      ruslWord: "слабый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfbb",
      englWord: "tall",
      englTranscription: "[tɔːl]",
      ruslWord: "высокий",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfbf",
      englWord: "slim",
      englTranscription: "[slɪm]",
      ruslWord: "стройный",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfc1",
      englWord: "skinny",
      englTranscription: "[ˈskɪnɪ]",
      ruslWord: "тощий",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfc0",
      englWord: "plump",
      englTranscription: "[plʌmp]",
      ruslWord: "полный",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfbe",
      englWord: "strong",
      englTranscription: "[strɔŋ]",
      ruslWord: "сильный",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfc3",
      englWord: "young",
      englTranscription: "[jʌŋ]",
      ruslWord: "молодой",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfc4",
      englWord: "hairy",
      englTranscription: "[‘heərɪ]",
      ruslWord: "волосатый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfc5",
      englWord: "bald",
      englTranscription: "[bɔːld]",
      ruslWord: "лысый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfc6",
      englWord: "curly",
      englTranscription: "[ˈkɜːlɪ]",
      ruslWord: "кудрявый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfc2",
      englWord: "old",
      englTranscription: "[əuld]",
      ruslWord: "старый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfc8",
      englWord: "pretty",
      englTranscription: "[ˈprɪtɪ]",
      ruslWord: "красивая",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfc9",
      englWord: "handsome",
      englTranscription: "[ˈhæn(d)səm]",
      ruslWord: "красивый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfcb",
      englWord: "character",
      englTranscription: "[‘kærəktə]",
      ruslWord: "характер",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfca",
      englWord: "ugly",
      englTranscription: "[ˈʌɡlɪ]",
      ruslWord: "уродливый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfcc",
      englWord: "clever",
      englTranscription: "[‘klevə]",
      ruslWord: "умный",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfc7",
      englWord: "straight",
      englTranscription: "[streɪt]",
      ruslWord: "прямые",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfce",
      englWord: "active",
      englTranscription: "[ˈæktɪv]",
      ruslWord: "активный",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfd1",
      englWord: "stupid",
      englTranscription: "[‘stjuːpɪd]",
      ruslWord: "глупый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfd0",
      englWord: "energetic",
      englTranscription: "[ˌɛnəˈdʒɛtɪk]",
      ruslWord: "энергичный",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfcf",
      englWord: "creative",
      englTranscription: "[krɪˈeɪtɪv]",
      ruslWord: "творческий",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfd2",
      englWord: "considerate",
      englTranscription: "[kən’sɪd(ə)rət]",
      ruslWord: "внимательный",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfd3",
      englWord: "cruel",
      englTranscription: "[‘kruːəl]",
      ruslWord: "жестокий",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfcd",
      englWord: "talented",
      englTranscription: "[‘tæləntɪd]",
      ruslWord: "талантливый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfd7",
      englWord: "kind",
      englTranscription: "[kaɪnd]",
      ruslWord: "добрый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfd9",
      englWord: "married",
      englTranscription: "[ˈmærɪd]",
      ruslWord: "женатый, замужняя",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfd5",
      englWord: "polite",
      englTranscription: "[pə’laɪt]",
      ruslWord: "вежливый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfda",
      englWord: "single",
      englTranscription: "[ˈsɪŋɡ(ə)l]",
      ruslWord: "холостяк, незамужняя",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfdb",
      englWord: "generous",
      englTranscription: "[‘ʤen(ə)rəs]",
      ruslWord: "щедрый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfd8",
      englWord: "tactful",
      englTranscription: "[ˈtæktf(ə)l]",
      ruslWord: "тактичный",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfd6",
      englWord: "rude",
      englTranscription: "[ruːd]",
      ruslWord: "грубый",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfd4",
      englWord: "unkind",
      englTranscription: "[ʌn’kaɪnd]",
      ruslWord: "злой",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfdd",
      englWord: "rich",
      englTranscription: "[rɪtʃ]",
      ruslWord: "богатый, состоятельный",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfde",
      englWord: "poor",
      englTranscription: "[pʊə]",
      ruslWord: "бедный, малоимущий",
      theme: "Appearance and character",
    },
    {
      _id: "61824bb7f7c72eaf940bbfdc",
      englWord: "greedy",
      englTranscription: "[‘griːdɪ]",
      ruslWord: "жадный",
      theme: "Appearance and character",
    },
  ]);
  const [learnedWords, setLearnedWords] = useState([]);
  // useEffect(() => {
  //   fetch(`https://engl-tab.herokuapp.com/themes`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const updateThemes = [...themes];
  //       for (let i = 0; i < data.length; i++) {
  //         updateThemes.push(data[i].theme);
  //       }
  //       setThemes(updateThemes);
  //     });

  //   fetch(`https://engl-tab.herokuapp.com`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const updateWords = [];
  //       for (let i = 0; i < data.length; i++) {
  //         updateWords.push(data[i]);
  //       }
  //       setAllWords(updateWords);
  //     });
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage themes={themes} />} />

        <Route path="/learning/all" element={<Learning words={allWords} />} />

        {themes.map((theme) => {
          return <Route path={`/learning/${theme}`} element={<Learning />} />;
        })}
        {/* <Route path="/learning/body" element={<Learning />} />
        <Route path="/learning/appearance" element={<Learning />} /> */}
      </Routes>
    </div>
  );
}

export default App;
