import React from 'react'
import { MdSubdirectoryArrowRight } from 'react-icons/md'

function Button() {
    return (
        <div className="w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between border-b-[1px] border-zinc-700">
            <span className="text-sm font-thin">Get Started</span>
            <MdSubdirectoryArrowRight />
        </div>
    )
}

export default Button