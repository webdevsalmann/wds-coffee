import Image from 'next/image'
import React from 'react'

export default function ExerciseCard({ data }) {
    return (
        <div className='relative rounded overflow-hidden group border border-solid border-neutral-400/70'>
            <div className="img-box"><Image src={data.gifUrl} width={500} height={600} alt={data.name} /></div>
            <div className="p-2">
                <p className="group-hover:clr-p group-hover:underline">{data.name}</p>
            </div>
            <div className="absolute top-2 left-2 py-1 px-2 text-xs rounded-full bg-orange-300 text-orange-900 font-bold">{data.target}</div>
        </div>
    )
}
