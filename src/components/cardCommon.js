import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, CardActionArea, CardActions } from '@mui/material'
import { styled } from '@mui/material/styles'
import ButtonCommon from './buttonCommon'

const ButtonStyledLogin = styled(ButtonCommon)({
    color: 'white',
    backgroundColor: '#715aff',
    '&:hover': {
        backgroundColor: '#5830f7',
    },
})

export default function CardCommon({
    title,
    image,
    description,
    discount,
    buttonText,
    handlerClick,
}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <div
                    style={{
                        height: 250,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <div style={{ width: 150, height: 150 }}>
                        <CardMedia component="img" image={image} alt={title} />
                    </div>
                </div>
                <CardContent>
                    <Typography
                        textAlign="center"
                        gutterBottom
                        variant="h5"
                        component="div">
                        {title}
                    </Typography>
                    <Typography textAlign="center" variant="h6" component="div">
                        {'% ' + discount + ' DESCUENTO'}
                    </Typography>
                    <Typography
                        textAlign="center"
                        variant="body2"
                        color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Box width="100%" display="flex" justifyContent="center">
                    <ButtonStyledLogin
                        handleClick={handlerClick}
                        style={{ width: 150, height: 40, marginBottom: 20 }}
                        size="small"
                        variant={'contained'}
                        title={buttonText}
                    />
                </Box>
            </CardActions>
        </Card>
    )
}
