import TextField from '@mui/material/TextField';

export default function SMinputs(props) {
    const { type, label, color, onChange, value, id } = props
    return (

        <TextField id={id} type={type} value={value} onChange={onChange} color={color} label={label} variant="filled" />

    )
}

// inputss








