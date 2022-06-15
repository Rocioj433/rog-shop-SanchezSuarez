import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const EmptyCart = () => {
    return (
        <>
            <h1>Ooooooops... Tu carrito está vacío. ¡Agregá productos!</h1>
            <Link to='/product'>
                <Button>
                    Ir al catálogo
                </Button>
            </ Link>
        </>
    )
}

export default EmptyCart;