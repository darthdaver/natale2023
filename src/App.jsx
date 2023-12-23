import { useState } from 'react'
import piggyBank from './assets/piggy-bank.png'
import './App.css'

function App() {
    const [pwdFlag, setPwdFlag] = useState(false)
    const [codeFlag, setCodeFlag] = useState(false)
    const [pwd, setPwd] = useState("")
    const [code, setCode] = useState("")
    const correct_pwd = "louutoboaeoaelsbieoannie"
    const correct_code = "jamesWEBB2023!"

    const checkPwd = () => {
        console.log(pwd);
        if (pwd === correct_pwd) {
            setPwdFlag(true)
            setPwd("")
        }
    }

    const checkCode = () => {
        console.log(code);
        if (code === correct_code) {
            setCodeFlag(true)
            setCode("")
        }
    }

    const handleInputChangePwd = (event) => {
        const target = event.target;
        const value = target.value;
        setPwd(value);
    }

    const handleInputChangeCode = (event) => {
        const target = event.target;
        const value = target.value;
        setCode(value);
    }

  return (
    <>
        {
            !codeFlag ?
                <>
                    {
                        !pwdFlag ?
                        <div className={"login"}>
                            <div className={"login-box"}>
                                <div className={"login-title"}>
                                    <p><span className={"icon-big"}>&#127876;</span></p>
                                    <h1>Natale 2023</h1>
                                    <p>Bene, bene, bene...<br/>Se sei arrivata fin qui, <br/> sei quasi sopravvissuta anche<br/> a questo Natale 2023.<span className={"icon"}>&#129503;</span></p>
                                    <p>Inserisci la password <span className={"icon"}>&#128273;</span> che<br/> hai generato durante il periodo dell'avvento<br/> e scopri se sei stata brava <span className={"icon"}>&#128519;</span> durante l'anno <br/> e meriti il tuo regalo <span className={"icon"}>&#128131;</span>, <br/> o se sei stata monella <span className={"icon"}>&#128520;</span> <br/> e dovrai ritentare l'anno prossimo. <span className={"icon"}>&#129335;</span></p>
                                </div>

                                <div className={"login-input"}>
                                    <input type={"password"} placeholder={"Christmas Password"} onChange={handleInputChangePwd} value={pwd}/>
                                </div>
                                <div className={"login-btn"}>
                                    <button onClick={checkPwd}>Send</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className={"login"}>
                            <div className={"login-box"}>
                                <div className={"login-title"}>
                                    <p><span className={"icon-big"}>&#129313;</span></p>
                                    <h2>AHAHAHAHAH</h2>
                                    <p>Davvero credevi fosse così semplice?</p>
                                    <p>Rispondi alle 5 domande di ATPL <span className={"icon"}>&#128745;</span> che ti verranno fatte e dimostra di aver meritato la tua licenza. <span className={"icon"}>&#128524;</span></p>
                                    <p>Se risponderai correttamente <span className={"icon"}>&#9989;</span>,<br/> riceverai il vero codice per aprire il tuo premio. <span className={"icon"}>&#128640;</span></p>
                                </div>
                                <div className={"login-input-code"}>
                                    <input type={"password"} placeholder={"Code"} onChange={handleInputChangeCode} value={code} />
                                </div>
                                <div className={"login-btn"}>
                                    <button onClick={checkCode}>Send</button>
                                </div>
                            </div>
                        </div>
                    }
                </>
            :
                <div className={"login"}>
                    <div className={"login-box"}>
                        <div className={"login-title"}>
                            <img className={"piggy"} src={piggyBank}/>
                            <h1>Piggy Bank</h1>
                            <h1 style={{color: "green"}}>1000€</h1>
                            <p>Questo è un piccolo salvadanaio che continuerà a crescere.</p>
                            <p>Cercherò di mettere una piccola quota da parte ogni mese <span className={"icon"}>&#127974;</span>,<br/> per sostenerti in questo tuo sogno<br/> e aiutarti a realizzarlo <span className={"icon"}>&#10024;</span></p>
                            <p>Buon Natale musino <span className={"icon"}>&#128150;</span><span className={"icon"}>&#128040;</span></p>
                        </div>
                    </div>
                </div>
        }
    </>
  )
}

export default App
