export function Tarjeta(props) {

    console.log(props.Estatus)

    const StyleCard = {
        background: "#202020",
        color: "#fff",
        padding: "20px"
    }

    const StyleSpanTrue = {
        color : " #48ef09 ",
        fontWeight: "lighter"
    }
    const StyleSpanFalse = {
        color : "#ef3209 ",
        fontWeight: "lighter"
    }

    return <div style={StyleCard}>
        <h1>Primer Tarea</h1>
        <span style={props.Estatus ? StyleSpanTrue: StyleSpanFalse}>
        {props.Estatus ? 'Tarea lista' : 'Tarea incompleta'}
        </span>
    </div>

}