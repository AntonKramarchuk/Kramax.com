import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const styles = {
    link: {
        textDecoration: 'none',
    },
};

function PromotionsCard({imageUrl, title, description, customId}) {
    const backgroundColor = customId % 2 === 0 ? '#DFB48B' : '#92C2ED';
    return (
        <Card>
            <CardMedia sx={{width: '350px', height: '490px', position: 'relative'}}
                       image={imageUrl}
                       alt="image">
                <CardContent sx={{
                    background: backgroundColor,
                    position: 'absolute',
                    top: '25%',
                    right: '0',
                    width: '70%',
                    minHeight: '200px'
                }}>
                    <Link to='/' style={styles.link}><Typography sx={{
                        fontSize: '30px',
                        fontWeight: '200',
                        color: '#172127',
                        paddingBottom: '15px',
                        '&:hover': {textDecoration: 'underline'}
                    }}>{title}</Typography></Link>
                    <Typography sx={{fontSize: '16px', fontWeight: '200', color: '#1C272E'}}>{description}</Typography>
                </CardContent>
            
            </CardMedia>
        </Card>
    );
}

PromotionsCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    customId: PropTypes.string.isRequired
};
export default PromotionsCard;