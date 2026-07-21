// src/components/shared-comps/Pagination.tsx
import React from 'react';

type PaginationProps = {
    page: number;
    onNext: () => void;
    onPrev: () => void;
    // Optional: useful if your API returns an empty array and you want to lock the Next button
    isNextDisabled?: boolean;
};

export const Pagination: React.FC<PaginationProps> = ({
    page,
    onNext,
    onPrev,
    isNextDisabled = false
}) => {
    return (
        <div
            className="pagination-container"
            style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 0'
            }}
        >
            <button
                onClick={onPrev}
                disabled={page === 1}
                style={{
                    padding: '0.5rem 1rem',
                    cursor: page === 1 ? 'not-allowed' : 'pointer'
                }}
            >
                Previous
            </button>

            <span style={{ fontWeight: 'bold' }}>
                Page {page}
            </span>

            <button
                onClick={onNext}
                disabled={isNextDisabled}
                style={{
                    padding: '0.5rem 1rem',
                    cursor: isNextDisabled ? 'not-allowed' : 'pointer'
                }}
            >
                Next
            </button>
        </div>
    );
};