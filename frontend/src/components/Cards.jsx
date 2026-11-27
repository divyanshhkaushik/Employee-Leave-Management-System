import React from 'react'
import { ArrowUpRight } from 'lucide-react'


const Cards = () => {
  const cards = [
    {
      title: 'For Employees',
      items: ['Apply for leaves', 'Track the application', 'Upcoming holidays'],
    },
    {
      title: 'For Managers',
      items: ['Review requests', 'Approve claims'],
    },
    {
      title: 'Administration',
      items: ['Keep your policy in checks', 'Set holidays', 'Manage transparency'],
    },
  ]

  return (
    <section className="bg-[#FAFAF6] px-5 py-16 sm:px-12 lg:px-20">
      <h2 className="mb-10 text-center text-3xl font-bold text-[#263E32] sm:text-4xl">
        One Workspace for everyone
      </h2>

      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-[#DDE5DE] bg-white p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-[#263E32]">{card.title}</h3>
            <ul className="mt-5 space-y-3 text-[#52665B]">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#284F3E]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Cards
