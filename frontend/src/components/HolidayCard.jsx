import React from 'react'

const HolidayCard = () => {
    const holidays = [
        {
            name: 'Christmas Day',
            date: 'December 25, 2026',
            day: 'Friday',
        },
        {
            name: 'New Year\'s Day',
            date: 'January 1, 2027',
            day: 'Friday',
        }
    ]
    return (
        <div>
            <h2 className="mb-5 text-2xl font-bold text-[#263E32] sm:text-3xl">Upcoming Holidays</h2>
            {holidays.map((holiday, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <h3 className="text-lg font-bold text-[#263E32]">{holiday.name}</h3>
                    <p className="text-gray-600">{holiday.date}</p>
                    <p className="text-gray-500">{holiday.day}</p>
                </div>
            ))}
        </div>
    )
}

export default HolidayCard
