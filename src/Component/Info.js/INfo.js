import React from 'react';
import Nav2 from '../Nav/Nav2';

const INfo = () => {
    const style={
        textDecoration:"none"
    }
    return (
        <div>
            <Nav2></Nav2>
            <section data-aos="fade-left" data-aos-duration="1000" className='mx-12'>
                <h1 className='text-4xl font-bold my-5'>Short Info </h1>
                <p className='text-2xl'>
                    My name is Abdullah Al Mahmood. I am a dedicated web developer. I Past flew month i learn  a lot off think like HTML,CSS,bootstrap, tailwind css, firebase, mongodb and react and node js. Now My level is basic junior developer. I always passionate to learn new think. I love to learn new think.
                    Now I study on Independent university, Bangladesh, Department of computer science and enginner.
                </p>
                <p>
                    <h1 className='text-2xl my-5 underline underline-offset-1'>My work</h1>
                    <div className='text-xl flex'>
                        <p>1 . </p> <a style={style} class="link link-primary ml-3" href='' target='block'>Link-1</a>
                    </div>
                    <div className='text-xl flex'>
                        <p>2 . </p> <a style={style} class="link link-primary ml-3" href='' target='block'>Link-2</a>
                    </div>
                    <div className='text-xl flex'>
                        <p>3 . </p> <a style={style} class="link link-primary ml-3" href='' target='block'>Link-3</a>
                    </div>
              

                </p>
            </section>

        </div>
    );
};

export default INfo;