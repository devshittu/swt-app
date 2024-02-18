import React from 'react'
import { ServiceItem } from './ServiceItem'


export const Services = () => {
  return (
    <>
    <section className="relative z-1 pt-16 sm:pt-22 xl:pt-28">
    <div className="animate_bottom mx-auto mb-16 max-w-4xl px-4 text-center sm:px-8 xl:px-0">
        <span className="mb-5 inline-block font-heading text-title-6 font-medium text-zinc-950 dark:text-zinc-50">Ready to use with your favourite front-end tools</span>
        <h2 className="text-3xl font-semibold text-black dark:text-white sm:text-4xl xl:text-custom-xl">TailAdmin is now available for HTML, React, and Vue</h2>
    </div>
    <div className="px-40 2xl:px-[115px] pb-40">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ServiceItem/>
            <ServiceItem/>
            <ServiceItem/>
            <ServiceItem/>
        </div>
    </div>
</section>

    </>
  )
}
