import { Article } from "../Article/Article";
import { SanityTest } from "../SanityTest/SanityTest";
import { SpielbergerQuestionary } from "../Spielberger/SpielbergerQuestionary";
import './MainPage.css'

export function MainPage() {
    return <section className="test_main">
        {/* <SanityTest /> */}
        <SpielbergerQuestionary/>
        {/* <Article/> */}
    </section>
}