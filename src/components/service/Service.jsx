import classes from './Service.module.css'

export default function Service(props) {
    return (
        <p 
            className={classes.service} 
            style={{ backgroundColor: props.background}}
        >{props.title}</p>
    )
}