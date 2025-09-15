import Service from "../service/Service"
import classes from './SectionServices.module.css'

export default function SectionServices() {
    return (
        <section className={classes.services}>
            <Service title="Годовое ТО" background="#22356F" />
            <Service title="Выравнивание колес" background="#0052C1"/>
            <Service title="Настройка переключателей" background="#76B58B"/>
        </section>
    )
}