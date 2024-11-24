import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Grid from '@mui/material/Grid';

import { TextField, Button } from '@mui/material';
import { Email } from '@mui/icons-material';
import PageContainer from '../Custom/PageContainer/PageContainer'
import Cake from '../../assests/cake.png'
import Ballons from '../../assests/ballons.png'
import Cap from '../../assests/chocolate1.png'
import Lolipop from '../../assests/chocolate.png'
import './RSPV.css'

const RSPV = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_lf5k2vv',
                'template_88tdiwr',
                {
                    from_name: form.name,
                    to_name: "Abhishek Choudhary",
                    // from_email: form.email,
                    to_email: "abhishekchoudhary5414@gmail.com",
                    number: form.number,
                    number_of_guest: form.guest,
                    meal_prefances: form.meal,
                    // message: form.message,
                },
                '5XspuYeCrHojAUOpV'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        // email: "",
                        number: "",
                        // message: "",
                        guest: "",
                        meal: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <>
            <div id='rspv-section'>
                <PageContainer title='RSPV'>
                    <Grid container justifyContent="space-around" alignItems="center"  >
                        <Grid item xs={10} md={3} >
                            <div className="rspv-image-section">
                                <div className='rspv-image-section-inner'>
                                    <img src={Cake} alt="" />
                                </div>
                                <div className='rspv-image-section-inner'>
                                    <img src={Cap} alt="" />
                                </div>
                            </div>
                        </Grid>


                        <Grid item xs={10} md={4} >
                            <div className="grid-header">
                                <h1>Are You Attending?</h1>
                            </div>
                            <div className="contact_gap">

                                <form ref={formRef}
                                    onSubmit={handleSubmit}>

                                    <TextField label="Name" className="custom-label" required name='name' onChange={handleChange} value={form.name} variant="outlined" margin="normal" fullWidth />
                                    <TextField label="Contact Number" className="custom-label" required name='number' value={form.number} onChange={handleChange} variant="outlined" margin="normal" fullWidth />

                                    <div className='dropdown-menu'>
                                        <select id="dropdown" required className='dropdown-item' name='guest' value={form.guest} onChange={handleChange}>
                                            <option className='option-custom' value="">Number Of Guests</option>
                                            <option className='option-custom' value="01">01</option>
                                            <option className='option-custom' value="02">02</option>
                                            <option className='option-custom' value="03">03</option>
                                            <option className='option-custom' value="04">04</option>
                                            <option className='option-custom' value="05">05</option>
                                            <option className='option-custom' value="06">06</option>
                                            <option className='option-custom' value="07">07</option>
                                            <option className='option-custom' value="08">08</option>
                                        </select>
                                    </div>

                                    <div className='dropdown-menu'>
                                        <select id="dropdown" required className='dropdown-item' name='meal' value={form.meal} onChange={handleChange}>
                                            <option value=""><em>Meal Prefrences</em></option>
                                            <option value="Veg">Veg</option>
                                            <option value="non_veg">Non-Veg</option>
                                        </select>
                                    </div>

                                    <Button type='submit' variant="contained" sx={{ backgroundColor: '#244E3C', color: 'white', mt: 2 }} fullWidth>
                                        <Email /> &nbsp; {loading ? "Sending..." : "Send"}
                                    </Button>
                                </form>
                            </div>
                        </Grid>
                        <Grid item xs={10} md={3} >

                            <div className="rspv-image-section">
                                <div className='rspv-image-section-inner'>
                                    <img src={Ballons} alt="" />
                                </div>
                                <div className='rspv-image-section-inner'>
                                    <img src={Lolipop} alt="" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </PageContainer>
            </div >
        </>
    )
}

export default RSPV