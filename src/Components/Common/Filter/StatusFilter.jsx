import React from "react";

const StatusFilter = ({ filters, setFilter, options = [] }) => {
  const currentStatus = filters.status; // can be any type: boolean, string, number

  const handleStatusChange = (value) => {
    setFilter("status", value);
  };

  const defaultOptions = [
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ];

  const statusOptions = options.length > 0 ? options : defaultOptions;

  return (
    <div className="col-md-12">
      <label className="col-form-label">Status</label>
      <div className="d-flex justify-content-start align-items-center gap-4 mt-2">
        {statusOptions.map((option, idx) => (
          <div className="form-check" key={idx}>
            <input
              className="form-check-input"
              type="radio"
              name="statusRadio"
              id={`statusOption_${idx}`}
              checked={currentStatus === option.value}
              onChange={() => handleStatusChange(option.value)}
            />
            <label className="form-check-label" htmlFor={`statusOption_${idx}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusFilter;
