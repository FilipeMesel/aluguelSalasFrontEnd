import Alert from 'react-bootstrap/Alert';

function Alerta(tipo, texto) {

    if(tipo == 'positivo')
    {
        return(
            <>
            <Alert variant='success'>
                {texto}
            </Alert>
            </>
        );
    }else {
        return(
            <>
            <Alert variant='danger'>
                {texto}
            </Alert>
            </>
        );
    }
}

export default Alerta;