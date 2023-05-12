import style from './About.module.css';

const About = () => {
    return (
        <div className={style.about}>
            <h2 className={style.hola}>Mas sobre mi</h2>
            <h4 className={style.hola}>hola</h4>
            <p className={style.p}><a href="bustosromina93@outlook.com"><h3 className={style.hola}>Gmail</h3></a></p>
            <p className={style.p}><a href="https://www.linkedin.com/in/romina-bustos/"><h3 className={style.hola}>Linkedin</h3></a></p>
            <p className={style.p}><a href="https://github.com/Romiidafox"><h3 className={style.hola}>Github</h3></a></p>

        </div>
    )
}


export default About;