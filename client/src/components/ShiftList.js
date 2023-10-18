import { Trash2 } from "lucide-react";
import React from "react";

const ShiftList = ({ shifts, onDelete }) => {
  return (
    <div className="flex flex-col gap-3 border-t-2 border-black py-6">
      <h2 className="text-2xl font-semibold">Shift List</h2>

      <ul>
        {shifts < 1 ? (
          <div>No shifts to display</div>
        ) : (
          <li className="text-lg">Start time - End time</li>
        )}
        {shifts.map((shift) => (
          <>
            <li
              key={shift.id}
              className="flex items-center justify-between text-xl font-medium my-2"
            >
              <div>
                {shift.start_time} - {shift.end_time}
              </div>
              <button
                onClick={() => onDelete(shift.id)}
                className="px-3 py-2 bg-red-400 hover:bg-red-500 rounded-md hover:rounded-lg transition-all duration-300 font-semibold flex gap-2 items-center"
              >
                Delete <Trash2 size={16} />
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ShiftList;
