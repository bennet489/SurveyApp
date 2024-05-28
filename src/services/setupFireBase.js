import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_APP_ID,
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
  };

  
  initializeApp(firebaseConfig);
  const db = getFirestore();
  
  import "./App.css";
  import { db } from "./services/setupFireBase";
  import { addDoc, collection, deleteDoc, getDocs } from "firebase/firestore";
  
  const col = collection(db, "SurveyData");
  
  function App() {
    const [data,setData] = useState()
    let TitleRef = useRef()
    let DescRef = useRef()
    let OptionRef = useRef()
  
    const  getDataFromFireBase = async () =>
      {
        try {
          let data = await getDocs(col)
          let filtredData = data.docs.map((smallData)=>({...smallData.data(),id:smallData.id}))
          console.log(filtredData)
          setData(filtredData)
        } catch (error) {
          console.error(error)
        }
      }
  
    let handleClcil = (e) =>
      {
        e.preventDefault()
        const obj = {
          Title : TitleRef.current.value,
          Descreption : DescRef.current.value,
          Qestion: Array.from(OptionRef.current.querySelectorAll('option')).map(option => option.value)
        }
        console.log(obj)
        addDoc(col,obj)
        getDataFromFireBase()
        TitleRef.current.value = ""
        DescRef.current.value = ""
        OptionRef.current.value = ""
  
    }
  
    const DeleteIt = async (id) =>
      {
        let sepeseficDocs = getDocs(db,id)
        await deleteDoc()
  
      }
    useEffect(()=>
      {
          getDataFromFireBase()
      },[])
  
    return (
      <>
        <h1>data from fireBase</h1>
        <ul>
          {data && data.map((e)=>
          (
            <>
              <h1>{e.Title}</h1>
              <p>Descreption : {e.Descreption}</p>
              <h3>qestion</h3>
              <ul>
                {/* {e.Qestion.map(q=>(
                  <li>{q}</li>
                ))} */}
              </ul>
              <button onClick={()=>DeleteIt(e.id)}>Deletee</button>
  
            </>
          ))}
        </ul>
        <form onSubmit={handleClcil}>
          <label>
            <input ref={TitleRef} placeholder='add the titile'></input>
            <input ref={DescRef} placeholder='add the description'></input>
            <select ref={OptionRef}>
              <option value="atay">atay</option>
              <option value="mssamn">mssamn</option>
              <option value="pizza">pizza</option>
            </select>
          </label>
          <button>add to fire Base</button>
        </form>
      </>
    )
  }
  