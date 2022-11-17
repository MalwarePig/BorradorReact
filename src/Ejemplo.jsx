import PropTypes from 'prop-types'//Para poder asignar tipo de datos a los props

 

export function Boton(props) {

    return <button>
        {props.text}
    </button>

}



PropTypes.propTypes = {
        text: PropTypes.string.isRequired  //Requiere que el valor sea String obligagorio
}