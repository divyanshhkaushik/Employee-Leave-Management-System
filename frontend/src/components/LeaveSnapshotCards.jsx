import React from 'react'

const EmployeeDashboardsCard = () => {
  const cards = [
    {
      title: 'Casual Leaves',
      entitled: 12,
      taken: 3,
      available: 9,
    },
    {
      title: 'Sick Leaves',
      entitled: 6,
      taken: 1,
      available: 5,
    },
    {
      title: 'Earned Leaves',
      entitled: 12,
      taken: 0,
      available: 12,
    },
  ]

  return (
    <section className="bg-[#FAFAF6] px-5 pb-14 sm:px-12 lg:px-20">
      <h2 className="mx-auto mb-7 max-w-7xl text-left text-2xl font-bold text-[#263E32] sm:text-3xl">
        Your Leave Snapshots - 2026
      </h2>

      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {cards.map((card) => {
          const progress =
            card.entitled === 0
              ? 0
              : Math.min((card.taken / card.entitled) * 100, 100)

          return (
            <article
              key={card.title}
              className="rounded-2xl border border-[#DDE5DE] bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-[#263E32]">{card.title}</h3>
                <p className="shrink-0 text-sm font-light text-[#52665B]">
                  {card.entitled} entitled
                </p>
              </div>

              <p className="mt-5 flex items-center gap-3 text-base text-[#52665B]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#284F3E]" />
                <span>{card.available} available</span>
              </p>

              <div
                className="mt-6 h-2.5 overflow-hidden rounded-full bg-[#E6ECE7]"
                role="progressbar"
                aria-label={`${card.title}: ${card.taken} taken out of ${card.entitled} entitled`}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={Math.round(progress)}
              >
                <div
                  className="h-full rounded-full bg-[#284F3E] transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="mt-2 text-right text-xs font-light text-[#52665B]">
                {card.taken} taken / {card.entitled} entitled
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default EmployeeDashboardsCard
