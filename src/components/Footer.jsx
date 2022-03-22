import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1', marginTop: "2rem", position: "fixed", bottom: "0", width: "100%" }}>
            <MDBContainer className=''>
                <section className=''>
                    <a
                        className='btn btn-link btn-floating btn-lg text-dark m-1'
                        href='#!'
                        role='button'
                        data-mdb-ripple-color='dark'
                    >
                        <MDBIcon fab className='fab fa-facebook-f' />
                    </a>

                    <a
                        className='btn btn-link btn-floating btn-lg text-dark m-1'
                        href='#!'
                        role='button'
                        data-mdb-ripple-color='dark'
                    >
                        <MDBIcon fab className='fa-twitter' />
                    </a>

                    <a
                        className='btn btn-link btn-floating btn-lg text-dark m-1'
                        href='#!'
                        role='button'
                        data-mdb-ripple-color='dark'
                    >
                        <MDBIcon fab className='fa-google' />
                    </a>

                    <a
                        className='btn btn-link btn-floating btn-lg text-dark m-1'
                        href='#!'
                        role='button'
                        data-mdb-ripple-color='dark'
                    >
                        <MDBIcon fab className='fa-instagram' />
                    </a>

                    <a
                        className='btn btn-link btn-floating btn-lg text-dark m-1'
                        href='#!'
                        role='button'
                        data-mdb-ripple-color='dark'
                    >
                        <MDBIcon fab className='fa-linkedin' />
                    </a>

                    <a
                        className='btn btn-link btn-floating btn-lg text-dark m-1'
                        href='#!'
                        role='button'
                        data-mdb-ripple-color='dark'
                    >
                        <MDBIcon fab className='fa-github' />
                    </a>
                </section>
            </MDBContainer>

            <div className='text-center text-dark p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a className='text-dark' href='#'>
                    COVID-19 Report.
                </a>
            </div>
        </MDBFooter>
    );
}