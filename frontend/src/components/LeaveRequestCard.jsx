import React from 'react'

const LeaveRequestCard = () => {
  const leaveRequests = [
    {
      title: 'Casual Leave',
      dates: '13 December 2026 - 15 December 2026',
      days: 3,
      status: 'Pending',
    },
    {
      title: 'Sick Leave',
      dates: '25 November 2026',
      days: 1,
      status: 'Approved',
    },
    {
      title: 'Earned Leave',
      dates: '1 October 2026 - 5 October 2026',
      days: 5,
      status: 'Rejected',
    },
  ]

  const statusStyles = {
    Pending: 'bg-[#FFF4DB] text-[#8A6214]',
    Approved: 'bg-[#E7F1EB] text-[#284F3E]',
    Rejected: 'bg-[#FBE8E5] text-[#A04A3D]',
  }

  return (
    <section className="bg-[#FAFAF6] px-5 pb-14 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-7 text-2xl font-bold text-[#263E32] sm:text-3xl">
          Your Recent Requests
        </h2>

        <div className="overflow-hidden rounded-2xl border border-[#DDE5DE] bg-white">
          {leaveRequests.map((request, index) => (
            <article
              key={`${request.title}-${request.dates}`}
              className={`grid items-center gap-4 px-5 py-5 sm:grid-cols-[1.2fr_1fr_auto] sm:px-7 ${
                index !== leaveRequests.length - 1 ? 'border-b border-[#E8ECE8]' : ''
              }`}
            >
              <div>
                <h3 className="font-bold text-[#263E32]">{request.title}</h3>
                <p className="mt-1 text-sm text-[#52665B]">{request.dates}</p>
              </div>

              <p className="text-sm text-[#52665B]">
                {request.days} {request.days === 1 ? 'day' : 'days'}
              </p>

              <span
                className={`justify-self-start rounded-full px-3 py-1.5 text-xs font-semibold sm:justify-self-end ${statusStyles[request.status]}`}
              >
                {request.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeaveRequestCard
