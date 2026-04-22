import React, { useState, useEffect } from "react";

const getToday = () => new Date().toISOString().split("T")[0];

const FilterModal = ({
  show,
  onHide,
  onApply,
  initialFilters = {},
  children,
}) => {
  const [fromDate, setFromDate] = useState(initialFilters.from || "");
  const [toDate, setToDate] = useState(initialFilters.to || "");
  const [extraFilters, setExtraFilters] = useState({});

  // Reset local state when modal opens
  useEffect(() => {
    if (show) {
      setFromDate(initialFilters.from || "");
      setToDate(initialFilters.to || "");
    }
  }, [show, initialFilters]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  const updateExtraFilter = (key, value) => {
    setExtraFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetExtraFilters = () => setExtraFilters({});

  const handleApply = () => {
    onApply({
      from: fromDate,
      to: toDate,
      ...extraFilters,
    });
    onHide();
  };

  const handleClear = () => {
    // Reset local date fields
    setFromDate("");
    setToDate("");
    // Reset all extra filters (e.g., status)
    resetExtraFilters();
    // Immediately apply cleared filters -> triggers API and closes modal
    onApply({
      from: "",
      to: "",
    });
    onHide();
  };

  return (
    <>
      {/* Backdrop */}
      {show && (
        <div
          className="modal-backdrop fade show"
          style={{ zIndex: 1040 }}
          onClick={onHide}
        />
      )}

      {/* Modal */}
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        tabIndex="-1"
        style={{ display: show ? "block" : "none", zIndex: 1050 }}
        aria-hidden={!show}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-3 fw-semibold">Filter</h1>
              <button
                type="button"
                className="btn-close"
                onClick={onHide}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="col-form-label">From:</label>
                      <input
                        type="date"
                        className="form-control"
                        value={fromDate}
                        max={getToday()}
                        onChange={(e) => setFromDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="col-form-label">To:</label>
                      <input
                        type="date"
                        className="form-control"
                        value={toDate}
                        max={getToday()}
                        min={fromDate || undefined}
                        disabled={!fromDate}
                        onChange={(e) => setToDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {typeof children === "function"
                  ? children({
                      filters: extraFilters,
                      setFilter: updateExtraFilter,
                      resetFilters: resetExtraFilters,
                    })
                  : children}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClear}
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleApply}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
