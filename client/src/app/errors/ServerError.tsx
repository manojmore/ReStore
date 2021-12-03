import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";

export default function ServerError(){
    const history = useHistory();
    const {state}= useLocation<any>();
    
    return(
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography variant='h3' color='error'>{state.error.title}</Typography>
                    <Divider/>
                    <Typography >{state.error.detail || 'Internal Server Error'}</Typography>
                </>
            ) : (
                <Typography variant='h5' color='error'>Server Error</Typography>                
            )}
            <Button onClick={()=>history.push('/catalog')}>Go Back to Catalog</Button>
        </Container>
    )
}