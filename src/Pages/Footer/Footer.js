import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='text-center sticky-bottom'>
            <h4>Copyright &copy; {year}</h4>
        </footer>
    );
};

export default Footer;