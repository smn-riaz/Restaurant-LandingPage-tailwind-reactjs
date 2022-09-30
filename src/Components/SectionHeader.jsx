import React from 'react'

const SectionHeader = ({text1, text2}) => {
  return (
    <div>
        <section className="px-7 space-y-2">
        <h4 className="text-xl px-5 text-gray-400">{text1}</h4>
        <h1 className="text-5xl px-5">{text2}</h1>
        </section>
    </div>
  )
}

export default SectionHeader