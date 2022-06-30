import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";

function App() {
    return (
        <div>
            <Card
                title="Eleceed"
                img="file:///C:/Users/Acer/OneDrive/Pictures/Jiwoo%20Ch-86.png"
                link="https://readmanganato.com/manga-de980813/chapter-86"
                linkText="For the true fans"
                thoughts={["This chapter was really cool, seeing Jiwoo fight this", "guy and still persevere is so great, and the final panel", "of him standing back up is so good"]}/>
        </div>
    );
}

export default App;
