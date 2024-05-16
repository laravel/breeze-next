import { Button } from '@mui/material'

const ButtonCommon = ({ title, handleClick, variant, href, ...props }) => {
    return (
        <Button onClick={handleClick} variant={variant} href={href} {...props}>
            {title}
        </Button>
    )
}

export default ButtonCommon
