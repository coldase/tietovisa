import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AnswerBtn from './components/AnswerBtn';
import PlayBtn from './components/PlayBtn';
   
export default function App(){

    const [currentQ, setCurrentQ] = useState({});
    const [gameOn, setGameOn] = useState(false);
    const [score, setScore] = useState(0);
    const [statusText, setStatusText] = useState("");

    const getQuestion = () => {
        const data = require("./assets/questions.json")
        const randIndex = Math.floor(Math.random() * data.questions.length)
        setCurrentQ(data.questions[randIndex])
        console.log(currentQ)
    }

    const letsPlay = () => {
        getQuestion();
        setStatusText("");
        setGameOn(true);
    }

    const checkWin = (answerid) => {
        if(currentQ.answers[answerid] === currentQ.correct){
            console.log("RIGHT ANsWER");
            setGameOn(false);
            setStatusText("CORRECT");
            setScore(score + 1);
        }else{
            setScore(score - 1);
            setStatusText("WRONG");
            setGameOn(false);
        }
    }

    return (
        <View>
            <View style={styles.container}>
            <Text>{score}</Text>
            <PlayBtn title="Play" letsPlay={letsPlay}/>

            </View>
            {gameOn
            ?   <View>
                <View style={styles.questionContainer}>
                    <Text style={styles.qText}>
                    {currentQ.question}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <AnswerBtn onCheckWin={() => checkWin(0)} title={currentQ.answers[0]} getQ={getQuestion}/>
                    <AnswerBtn onCheckWin={() => checkWin(1)} title={currentQ.answers[1]} getQ={getQuestion}/>
                    <AnswerBtn onCheckWin={() => checkWin(2)} title={currentQ.answers[2]} getQ={getQuestion}/>
                </View>
                </View>
            : <Text style={styles.status}>{statusText}</Text>    
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer:{
        flex:1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    status: {
        textAlign: 'center'
    },
    questionContainer:{
        // flex:1,
        // alignItems: 'center ',
        // justifyContent: 'center',
        // marginHorizontal: 20
    },
    qText: {
        margin: 20,
        textAlign: 'center',
        fontSize: 20
    }

})
