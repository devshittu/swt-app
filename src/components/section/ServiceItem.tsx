import React from 'react'

export const ServiceItem = () => (<div className="rounded-2xl border border-gray-3x bg-white dark:bg-zinc-600 px-6 py-12 shadow-[0px_20px_80px_0px_rgba(9,14,34,0.06)] duration-300 hover:shadow-none">
    <div className="mx-auto w-full max-w-[280px] text-center">
        <div className="mb-10 flex items-center justify-center gap-6.5 rounded-full border-[.8px] border-gray-3 bg-gray-1 p-3">
            <span className="flex aspect-square w-full max-w-[75] items-center justify-center rounded-full bg-white shadow-[0px_0.83px_1.67px_0px_rgba(84,87,118,.1)] ">
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.65675 30.9598L4.05713 1.8H32.6095L30.0067 30.9621L18.3264 34.2L6.65675 30.9598Z" fill="#E64C18"></path>
                    <path d="M18.3335 4.18352V31.7232L27.7785 29.105L30.0038 4.18352H18.3335Z" fill="#F36518"></path>
                    <path
                        d="M9.37598 7.7603L10.34 18.5755H22.7359L22.3199 23.2143L18.3287 24.2934L14.345 23.2159L14.0787 20.2373H10.4888L11.0021 25.9791L18.3278 28.0137L25.6628 25.9791L26.6461 14.9995H13.611L13.2837 11.337H26.9593H26.9703L27.2906 7.7603H9.37598Z"
                        fill="white"
                    ></path>
                    <path d="M18.3333 7.7603H9.37598L10.34 18.5755H18.3333V14.9995H13.611L13.2837 11.337H18.3333V7.7603Z" fill="#EBEBEB"></path>
                    <path d="M18.3338 24.2919L18.3291 24.2935L14.3455 23.216L14.0792 20.2374H10.4893L11.0026 25.9792L18.3283 28.0138L18.3338 28.0123V24.2919Z" fill="#EBEBEB"></path>
                </svg>
            </span>
            <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.625 7.5C10.625 7.15482 10.3451 6.875 9.99996 6.875C9.65478 6.875 9.37496 7.15482 9.37496 7.5L9.37496 9.37502H7.49996C7.15478 9.37502 6.87496 9.65484 6.87496 10C6.87496 10.3452 7.15478 10.625 7.49996 10.625H9.37496V12.5C9.37496 12.8452 9.65478 13.125 9.99996 13.125C10.3451 13.125 10.625 12.8452 10.625 12.5L10.625 10.625H12.5C12.8451 10.625 13.125 10.3452 13.125 10C13.125 9.65484 12.8451 9.37502 12.5 9.37502H10.625V7.5Z"
                        fill="#8D93A5"
                    ></path>
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.99996 1.04167C5.05241 1.04167 1.04163 5.05245 1.04163 10C1.04163 14.9476 5.05241 18.9583 9.99996 18.9583C14.9475 18.9583 18.9583 14.9476 18.9583 10C18.9583 5.05245 14.9475 1.04167 9.99996 1.04167ZM2.29163 10C2.29163 5.7428 5.74276 2.29167 9.99996 2.29167C14.2572 2.29167 17.7083 5.7428 17.7083 10C17.7083 14.2572 14.2572 17.7083 9.99996 17.7083C5.74276 17.7083 2.29163 14.2572 2.29163 10Z"
                        fill="#8D93A5"
                    ></path>
                </svg>
            </span>
            <span className="flex aspect-square w-full max-w-[75] items-center justify-center rounded-full bg-white shadow-[0px_0.83px_1.67px_0px_rgba(84,87,118,.1)]">
                <svg width="44" height="27" viewBox="0 0 44 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.9648 0.715042C16.3488 0.715042 12.8388 3.54481 11.4348 9.20434C13.5408 6.37458 15.9978 5.31341 18.8058 6.02086C20.4079 6.4241 21.5529 7.59609 22.8204 8.89228C24.8851 11.0044 27.275 13.449 32.4948 13.449C38.1108 13.449 41.6208 10.6192 43.0248 4.95969C40.9188 7.78946 38.4618 8.85062 35.6538 8.14318C34.0517 7.73994 32.9066 6.56794 31.6391 5.27175C29.5745 3.15965 27.1845 0.715042 21.9648 0.715042ZM11.4348 13.449C5.81879 13.449 2.30879 16.2788 0.904785 21.9383C3.01079 19.1085 5.46778 18.0474 8.27578 18.7548C9.8779 19.1588 11.0229 20.33 12.2904 21.6262C14.3551 23.7383 16.745 26.183 21.9648 26.183C27.5808 26.183 31.0908 23.3532 32.4948 17.6936C30.3888 20.5234 27.9318 21.5846 25.1238 20.8771C23.5217 20.4739 22.3766 19.3019 21.1091 18.0057C19.0445 15.8936 16.6545 13.449 11.4348 13.449Z"
                        fill="#38BDF8"
                    ></path>
                </svg>
            </span>
        </div>
        <div>
            <h3 className="mb-2.5 text-2xl font-semibold text-black">
                HTML
                + Tailwind
            </h3>
            <p className="mb-7.5 text-base">TailAdmin HTML: Built-with Tailwind CSS, HTML and Alpine.js</p>
            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-black px-6 text-base font-medium text-white duration-300 hover:bg-primary">
                Explore
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.2248 4.55806C11.4688 4.31398 11.8646 4.31398 12.1086 4.55806L17.1086 9.55806C17.3527 9.80214 17.3527 10.1979 17.1086 10.4419L12.1086 15.4419C11.8646 15.686 11.4688 15.686 11.2248 15.4419C10.9807 15.1979 10.9807 14.8021 11.2248 14.5581L15.1578 10.625H3.33337C2.9882 10.625 2.70837 10.3452 2.70837 10C2.70837 9.65482 2.9882 9.375 3.33337 9.375H15.1578L11.2248 5.44194C10.9807 5.19786 10.9807 4.80214 11.2248 4.55806Z"
                        fill="white"
                    ></path>
                </svg>
            </button>
        </div>
    </div>
</div>)