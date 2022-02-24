import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import MainSection from './MainSection';
import './MainComponent.scss'
import Skills from './Skills';
import Formacion from './Formacion';
import Works from './Works';
import ContactForm from './ContactForm';

const MainComponent = () => {
    return ( 
        <div className='main-container'>
                <NavBar />

                <main>
                    <MainSection />

                    <Skills />

                    <Formacion />

                    <Works />

                    <ContactForm />
                </main>

                <footer>
                    <p>Desarrollado por Oviedo Federico</p>
                    <p>2022</p>
                </footer>
        </div>
     );
}
export default MainComponent;