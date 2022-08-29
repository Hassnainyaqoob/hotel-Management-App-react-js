import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


export default function SMbuttons(props) {

    const { label, onClick, loading, disabled, id } = props

    return (

        <Button id={id} onClick={onClick} disabled={disabled || loading}
            variant="contained">{loading && <CircularProgress />}{label}</Button>

    )
}

