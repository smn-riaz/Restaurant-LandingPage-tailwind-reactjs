import React from 'react'

const SectionHeader = ({text1, text2}) => {
  return (
    <div>
        <section className="space-y-2 text-center md:pb-4">
        <h4 className="text-2xl text-gray-400 xl:text-4xl">{text1}</h4>
        <h1 className="text-4xl font-mono text-primary xl:text-6xl">{text2}</h1>
        </section>
    </div>
  )
}

export default SectionHeader