import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quiz = ({navigation}) => {
    const [quiz,setQuiz] = useState();
    const [qno,setQno]= useState(0);
    const [options,setOptions] = useState([]);
    const [score,setScore] = useState(0);

    useEffect(()=>{
        getQuestions()
    },[]);

    const getQuestions= async()=> {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
        const res = await fetch(url);
        const data = await res.json();
        setQuiz(data.results);
        setOptions(generateOptions(data.results[0]));
    }
    const handleNext = () => {
        setQno(qno+1);
        setOptions(generateOptions(quiz[qno+1]));

    }
    const generateOptions =(option) => {
        const opt= [...option.incorrect_answer];
        opt.push(option.correct_answer);
        return opt
    }

    const handleSelectedOption = (answer) => {
        if(answer === quiz[qno].correct_answer){
            setScore(score+1)
        }
        if(qno !== 9){
            setQno(qno+1);
            setOptions(generateOptions(quiz[qno+1]));
        }
    }
    const handleShowResults = () => {
        navigation.navigate('Result',{
            score:score  
        })
    }

  return (
    <View style={styles.container}>
        {Quiz ?
        <View style={styles.quiz}>
            <View style={styles.header}>
                <Text style={styles.question}>Q.{decodeURIComponent(quiz[qno].question)}</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionContainer} onPress={()=>handleSelectedOption(options[0])}>
                    <Text style={styles.option}>1.{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer} onPress={()=>handleSelectedOption(options[1])}>
                    <Text style={styles.option}>2.{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer} onPress={()=>handleSelectedOption(options[2])}>
                    <Text style={styles.option}>3.{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer} onPress={()=>handleSelectedOption(options[3])}>
                    <Text style={styles.option}>4.{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                {/* <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Previous</Text>
                </TouchableOpacity> */}
                {qno !== 9 && <TouchableOpacity style={styles.button} onPress={handleNext}> 
                    <Text style={styles.text}>Skip</Text>
                </TouchableOpacity>}
                {qno === 9 && <TouchableOpacity style={styles.button} onPress={handleShowResults} > 
                    <Text style={styles.text}>Show Results</Text>
                </TouchableOpacity>}
                
            </View>
        </View>
        : <Text>no Quiz</Text>
        }
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    question:{
        fontSize:28,
    },
    button:{
        backgroundColor: '#184E77',
        padding:12,
        paddingHorizontal:18,
        borderRadius: 10,
        alignItems:'center',
        marginBottom:30,
    },
    text:{
        fontSize:16,
        fontWeight:'500',
        color:'white'
    },
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height: '100%'
    },
    header:{
        marginVertical:16,
    },
    options:{
        marginVertical:16,
        flex:1,
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:25,
        paddingVertical:16
    },
    option:{
        fontSize:18,
        color:'white',
    },
    optionContainer:{
        paddingVertical:12,
        marginVertical:6,
        backgroundColor:'#34A0A4',
        paddingHorizontal:12,
        borderRadius:10,
    },
    quiz:{
        height:'100%'
    }
})