import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function LeaveCalendar() {
  return (
    <section className="w-fit">
      <h2 className="mb-5 text-2xl font-bold text-[#263E32] sm:text-3xl">
        Manage your Calendar
      </h2>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{
            margin: 0,
            justifySelf: 'start',
          }}
        />
      </LocalizationProvider>
    </section>
  );
}
