import React, { useEffect, useState } from 'react';
import ProductHook from '../Hooks/ProductHook';
import Nav2 from '../Nav/Nav2';

const Productpage = () => {


    const code = <>

    </>
    return (
        <div>
            <Nav2></Nav2>
            <content>
                <h1 className='font-bold'>How will you improve the performance of a React Application?</h1>
                <p>
                    if we  use coustom hook for stop repeating code. It would be better for our application. In React, function components and PureComponent provide two different ways of optimizing React apps at the component level.
                    Function components prevent constructing class instances while reducing the overall bundle size as it minifies better than classes.
                    On the other hand, in order to optimize UI updates, we can consider converting function components to a PureComponent class (or a class with a custom shouldComponentUpdate method). However, if the component doesn’t use state and other life cycle methods, the initial render time is a bit more complicated when compared to function components with potentially faster updates.
                </p>
                <h1 className='font-bold'>What are the different ways to manage a state in a React application?</h1>
                <p>
                    A good option to manage state use context api. we can easily pass it on component to another component. so we can not load data multiple times.At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.

                    What happens when there is a network error? Do I really need to hit my server every time my user visits the home page if the data hasn’t changed? Do I need to add useState and useEffect in every component I want to fetch my data?

                    To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and React Query
                </p>
                <h1  className='font-bold'>How does prototypical inheritance work?</h1>
                <p>
                    Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.
                </p>
                <h1  className='font-bold'>code</h1>
                <p>
                    " user input const name: efg
                    const value=product.filter(data=   data.name===name)
                    consol.log(value)"
                </p>

            </content>

        </div>
    );
};

export default Productpage;