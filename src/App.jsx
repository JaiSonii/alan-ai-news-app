import React,{useEffect, useState} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles";
import wordsToNumbers from "words-to-numbers";
import Footer from "./components/Footer/Footer";


const alanKey = process.env.ALAN_KEY
const App = ()=>{
    const classes = useStyles();
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand:({command, articles, number})=>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle)=>prevActiveArticle +1);
                }
                else if(command === 'open'){
                    const parsedNumber = number.length>2 ? wordsToNumbers(number,{fuzzy:true}) : number;
                    const article = articles[parsedNumber -1];

                    if(parsedNumber > 20){
                        alanBtn().playText('Please try that again');
                    }
                    else if(article){
                        window.open(article.url, '_blank');
                    }
                    
                }
                
            }
        })
    },[])
    return(
        <div>
            <div className={classes.logoContainer}>
                <img src="https://assets-global.website-files.com/64ec3fc5bb945b48c0a37b1c/64ec859abeec7a9efe7eef25_logo.svg" className={classes.alanLogo} alt="alan-logo"/>
            </div>
            <NewsCards articles={newsArticles}  activeArticle={activeArticle}/>
            <Footer />
        </div>
    )
}
export default App;