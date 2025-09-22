// MainContent.jsx
import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <Container maxWidth="lg">
                {/* Banner Section */}
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <div className="text-content">
                            <Typography variant="h2" component="h1" color="primary" gutterBottom>
                                Welcome to Medimate!
                            </Typography>
                            <Typography variant="body1" component="p" color="textSecondary" paragraph>
                                Your go-to platform for medical information.
                            </Typography>
                            <Button variant="contained" color="primary" href="#learn-more">
                                Learn More
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="image-content">
                            <img src='https://images.unsplash.com/photo-1555633514-abcee6ab92e1?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Pill" />
                        </div>
                    </Grid>
                </Grid>

                {/* Additional Content Sections */}
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <div className="additional-content">
                            <Typography variant="h3" component="h2" color="primary" gutterBottom>
                                Our Services
                            </Typography>
                            <Typography variant="body1" component="p" color="textSecondary" paragraph>
                                Discover the wide range of medical services we offer to our users.
                            </Typography>
                            <Button variant="outlined" color="primary" href="#services">
                                Explore Services
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="additional-content">
                            <Typography variant="h3" component="h2" color="primary" gutterBottom>
                                About Us
                            </Typography>
                            <Typography variant="body1" component="p" color="textSecondary" paragraph>
                                Learn more about our mission, vision, and values.
                            </Typography>
                            <Button variant="outlined" color="primary" href="#about">
                                Read More
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default MainContent;
