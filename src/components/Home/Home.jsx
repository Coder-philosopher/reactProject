import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <aside className="relative overflow-hidden text-black rounded-lg mx-auto my-8 bg-white shadow-lg">
                <div className="relative z-10 px-6 py-12 sm:py-20 lg:px-12 text-center lg:text-left">
                    <div className="space-y-6 max-w-lg mx-auto lg:ml-auto lg:mr-0 lg:text-right">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Download Now
                            <span className="block sm:inline text-indigo-600"> Lorem Ipsum</span>
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-md mx-auto lg:mx-0">
                            Discover the ultimate experience. Download now to enjoy exclusive features.
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center px-8 py-3 text-white bg-indigo-600 rounded-full hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <svg
                                fill="currentColor"
                                className="w-6 h-6 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download Now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 lg:right-0 lg:top-0 lg:w-1/2 flex items-center justify-center">
                    <img
                        className="w-3/4 max-w-sm mx-auto lg:mx-0 lg:w-full lg:h-full object-cover"
                        src="https://i.ibb.co/5BCcDYB/Remote2.png"
                        alt="Illustrative background"
                    />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-16">
                <img
                    className="sm:w-80 w-48 object-cover rounded-lg shadow-md"
                    src="https://i.ibb.co/2M7rtLk/Remote1.png"
                    alt="Additional image"
                />
            </div>

            <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl mt-10 sm:mt-16 font-semibold text-gray-800">
                Lorem Ipsum Yojo
            </h1>
        </div>
    );
}
